/**
 * gemini.js — Gemini API client + prompt templates for the Student section
 *
 * Uses the Gemini REST API directly (no backend needed).
 * Key is loaded from VITE_GEMINI_API_KEY in .env.local
 */

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-3.8-flash';
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

/** Core fetch wrapper — sends a system instruction + user prompt, returns text */
async function generate(systemInstruction, userPrompt, history = []) {
  const contents = [
    ...history,
    { role: 'user', parts: [{ text: userPrompt }] },
  ];

  const body = {
    system_instruction: { parts: [{ text: systemInstruction }] },
    contents,
    generationConfig: {
      temperature: 0.7,
      topP: 0.95,
      maxOutputTokens: 2048,
    },
  };

  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Gemini API error: ${res.status}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

/** Parse JSON robustly from Gemini's response (strips markdown code fences) */
function parseJSON(text) {
  const cleaned = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();
  return JSON.parse(cleaned);
}

// ─────────────────────────────────────────────────────────────────────────────
// ASSESSMENT
// ─────────────────────────────────────────────────────────────────────────────

const ASSESSMENT_SYSTEM = `You are a senior technical interviewer at a top tech company.
Generate interview assessment questions tailored to the given track and language.
Return ONLY valid JSON — no markdown, no extra text.`;

/**
 * Generate 10 assessment questions for a given track + language.
 * Returns: Question[]
 *   Question: { id, type: 'mcq'|'short', question, options?: string[], correctAnswer, explanation }
 */
export async function generateAssessment(track, language) {
  const prompt = `Generate exactly 10 technical interview questions for a ${track} engineer using ${language}.
Mix: 6 MCQ questions and 4 short-answer questions.
Difficulty: moderate to hard (simulate a real FAANG/top startup screening round).

Return JSON array:
[
  {
    "id": 1,
    "type": "mcq",
    "question": "...",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
    "correctAnswer": "A",
    "explanation": "..."
  },
  {
    "id": 2,
    "type": "short",
    "question": "...",
    "correctAnswer": "...",
    "explanation": "..."
  }
]`;

  const text = await generate(ASSESSMENT_SYSTEM, prompt);
  return parseJSON(text);
}

/**
 * Evaluate student's answers against the questions.
 * Returns: { totalScore, perQuestion: [{id, score, feedback}], strengths, gaps, overallFeedback }
 */
export async function evaluateAssessment(questions, answers) {
  const payload = questions.map((q) => ({
    id: q.id,
    question: q.question,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    studentAnswer: answers[q.id] ?? '(no answer)',
  }));

  const prompt = `Evaluate these assessment answers. For MCQ, check exact match. For short answers, assess conceptual correctness, depth, and clarity.

Questions + answers:
${JSON.stringify(payload, null, 2)}

Return JSON:
{
  "totalScore": 0-100,
  "perQuestion": [
    { "id": 1, "score": 0-10, "feedback": "..." }
  ],
  "strengths": ["...", "..."],
  "gaps": ["...", "..."],
  "overallFeedback": "2–3 sentence summary"
}`;

  const text = await generate(ASSESSMENT_SYSTEM, prompt);
  return parseJSON(text);
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERVIEW
// ─────────────────────────────────────────────────────────────────────────────

const INTERVIEW_SYSTEM = `You are a senior technical interviewer conducting a real job interview.
Be professional but conversational. Ask one question at a time.
Probe deeper based on the candidate's answers. Keep each message under 150 words.
When you have asked 8 questions and received 8 answers, end the interview by saying exactly: "INTERVIEW_COMPLETE"
followed by your closing remarks.`;

/**
 * Get the first interview question (opening message).
 */
export async function startInterview(track, language) {
  const prompt = `Start a technical interview for a ${track} engineer who prefers ${language}.
Introduce yourself briefly (1 sentence), then ask your first technical question.`;

  return generate(INTERVIEW_SYSTEM, prompt);
}

/**
 * Continue the interview — send history + student's latest answer, get next question.
 * history: [{role: 'model'|'user', parts: [{text: '...'}]}]
 */
export async function continueInterview(history, studentMessage) {
  return generate(INTERVIEW_SYSTEM, studentMessage, history);
}

/**
 * Generate final scorecard from the full interview transcript.
 * transcript: [{role, text}]
 */
export async function scoreInterview(transcript, track, language) {
  const formatted = transcript
    .map((m) => `${m.role === 'model' ? 'Interviewer' : 'Candidate'}: ${m.text}`)
    .join('\n\n');

  const prompt = `Here is a complete technical interview transcript for a ${track} engineer (${language}):

${formatted}

Evaluate the candidate and return JSON scorecard:
{
  "overallScore": 0-100,
  "dimensions": {
    "problemSolving": { "score": 0-100, "note": "..." },
    "systemDesign": { "score": 0-100, "note": "..." },
    "communication": { "score": 0-100, "note": "..." },
    "technicalDepth": { "score": 0-100, "note": "..." }
  },
  "summary": "3-4 sentence evaluation paragraph",
  "strengths": ["...", "..."],
  "improvements": ["...", "..."],
  "recommendation": "Strong Hire | Hire | No Hire",
  "reasonCodes": [
    { "code": "RC-XXX-00", "label": "...", "pass": true }
  ]
}`;

  const text = await generate(INTERVIEW_SYSTEM, prompt);
  return parseJSON(text);
}

// ─────────────────────────────────────────────────────────────────────────────
// SCORECARD FROM ASSESSMENT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Convert assessment evaluation result into a full scorecard.
 */
export async function generateScorecardFromAssessment(evalResult, track, language) {
  const prompt = `Based on this assessment evaluation for a ${track} engineer (${language}):
${JSON.stringify(evalResult, null, 2)}

Generate a final scorecard JSON:
{
  "overallScore": 0-100,
  "dimensions": {
    "problemSolving": { "score": 0-100, "note": "..." },
    "technicalKnowledge": { "score": 0-100, "note": "..." },
    "communication": { "score": 0-100, "note": "..." },
    "codeQuality": { "score": 0-100, "note": "..." }
  },
  "summary": "...",
  "strengths": ["..."],
  "improvements": ["..."],
  "recommendation": "Strong Hire | Hire | No Hire",
  "reasonCodes": [
    { "code": "RC-XXX-00", "label": "...", "pass": true }
  ]
}`;

  const text = await generate(ASSESSMENT_SYSTEM, prompt);
  return parseJSON(text);
}

