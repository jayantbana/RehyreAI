/**
 * AssessmentView.jsx
 * Full AI-powered assessment flow:
 *   1. Gemini generates 10 questions
 *   2. Student answers each question (timed)
 *   3. Gemini evaluates → shows scorecard
 */
import React, { useState, useEffect, useCallback } from 'react';
import { Timer, ArrowRight, ArrowLeft, Check, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { generateAssessment, evaluateAssessment, generateScorecardFromAssessment } from '@/lib/gemini';

const TOTAL_SECONDS = 45 * 60; // 45 minutes

function useTimer(initialSeconds, running) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    if (!running) return;
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [running, seconds]);
  return seconds;
}

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

// ─── States ──────────────────────────────────────────────────────────────────
// 'loading' | 'answering' | 'evaluating' | 'done' | 'error'

export default function AssessmentView({ track, language, onComplete, onBack }) {
  const [phase, setPhase] = useState('loading');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [evaluation, setEvaluation] = useState(null);
  const [scorecard, setScorecard] = useState(null);
  const [error, setError] = useState('');

  const seconds = useTimer(TOTAL_SECONDS, phase === 'answering');

  // ── Load questions ──────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setPhase('loading');
    generateAssessment(track, language)
      .then((qs) => {
        if (!cancelled) {
          setQuestions(qs);
          setPhase('answering');
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message);
          setPhase('error');
        }
      });
    return () => { cancelled = true; };
  }, [track, language]);

  // ── Auto-submit when timer hits 0 ──────────────────────────────────────────
  useEffect(() => {
    if (phase === 'answering' && seconds <= 0) submit();
  }, [seconds, phase]);

  const q = questions[currentIdx];
  const progress = questions.length > 0 ? ((currentIdx + 1) / questions.length) * 100 : 0;

  const setAnswer = (value) => setAnswers((prev) => ({ ...prev, [q.id]: value }));

  const next = () => {
    if (currentIdx < questions.length - 1) setCurrentIdx((i) => i + 1);
    else submit();
  };

  const prev = () => setCurrentIdx((i) => Math.max(0, i - 1));

  const submit = useCallback(async () => {
    setPhase('evaluating');
    try {
      const ev = await evaluateAssessment(questions, answers);
      const sc = await generateScorecardFromAssessment(ev, track, language);
      setEvaluation(ev);
      setScorecard(sc);
      setPhase('done');
    } catch (e) {
      setError(e.message);
      setPhase('error');
    }
  }, [questions, answers, track, language]);

  // ── Render phases ───────────────────────────────────────────────────────────
  if (phase === 'loading') return <LoadingScreen message="Gemini is generating your assessment…" />;
  if (phase === 'evaluating') return <LoadingScreen message="Gemini is evaluating your answers…" />;
  if (phase === 'error') return <ErrorScreen message={error} onBack={onBack} />;

  if (phase === 'done') {
    return (
      <ResultsScreen
        scorecard={scorecard}
        evaluation={evaluation}
        questions={questions}
        answers={answers}
        track={track}
        language={language}
        onComplete={onComplete}
        onBack={onBack}
      />
    );
  }

  // ── Answering phase ─────────────────────────────────────────────────────────
  return (
    <div className="container flex flex-col gap-8 py-16">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="eyebrow">AI Assessment · {track} / {language}</p>
          <p className="text-sm text-muted-foreground">
            Question {currentIdx + 1} of {questions.length}
          </p>
        </div>
        <span
          className={`flex items-center gap-2 font-mono text-lg font-semibold tabular ${
            seconds < 300 ? 'text-destructive' : ''
          }`}
        >
          <Timer className="size-5" aria-hidden="true" />
          {formatTime(seconds)}
        </span>
      </div>

      <Progress value={progress} aria-label="Assessment progress" className="h-1.5" />

      {/* Question card */}
      {q && (
        <Card className="mx-auto w-full max-w-3xl">
          <CardHeader className="gap-3 p-8 pb-6">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-mono text-xs">
                {q.type === 'mcq' ? 'Multiple choice' : 'Short answer'}
              </Badge>
              <span className="text-xs text-muted-foreground">Q{q.id}</span>
            </div>
            <CardTitle className="text-xl leading-relaxed">{q.question}</CardTitle>
          </CardHeader>

          <CardContent className="p-8 pt-0">
            {q.type === 'mcq' ? (
              <div className="flex flex-col gap-3">
                {q.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setAnswer(opt[0])} // store just the letter e.g. 'A'
                    className={`flex items-start gap-3 rounded-lg border px-5 py-4 text-left text-sm transition-colors hover:bg-secondary ${
                      answers[q.id] === opt[0]
                        ? 'border-primary bg-secondary font-semibold'
                        : 'border-border'
                    }`}
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold">
                      {opt[0]}
                    </span>
                    <span>{opt.slice(3)}</span>
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                rows={6}
                value={answers[q.id] ?? ''}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here…"
                className="w-full resize-none rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}
          </CardContent>

          <CardFooter className="flex items-center justify-between p-8 pt-0">
            <Button variant="ghost" onClick={prev} disabled={currentIdx === 0}>
              <ArrowLeft aria-hidden="true" /> Previous
            </Button>
            <Button onClick={next}>
              {currentIdx === questions.length - 1 ? (
                <>Submit <Check aria-hidden="true" /></>
              ) : (
                <>Next <ArrowRight aria-hidden="true" /></>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Question navigation dots */}
      <div className="mx-auto flex flex-wrap justify-center gap-2">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIdx(i)}
            aria-label={`Question ${i + 1}`}
            className={`size-2.5 rounded-full transition-colors ${
              i === currentIdx
                ? 'bg-primary'
                : answers[questions[i]?.id] !== undefined
                ? 'bg-brand-400'
                : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function LoadingScreen({ message }) {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-6">
      <Loader2 className="size-10 animate-spin text-muted-foreground" aria-hidden="true" />
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
}

function ErrorScreen({ message, onBack }) {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-5 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="size-7 text-destructive" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Something went wrong</h2>
        <p className="max-w-[42ch] text-sm text-muted-foreground">{message}</p>
        <p className="text-xs text-muted-foreground">
          Make sure your Gemini API key is set in <code>.env.local</code>
        </p>
      </div>
      <Button variant="outline" onClick={onBack}>Go back</Button>
    </div>
  );
}

function ResultsScreen({ scorecard, evaluation, questions, answers, track, language, onComplete, onBack }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const score = scorecard?.overallScore ?? 0;
  const dims = scorecard?.dimensions ? Object.entries(scorecard.dimensions) : [];

  return (
    <div className="container flex flex-col gap-10 py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Assessment complete · {track} / {language}</p>
        <h1 className="text-4xl">Your AI-generated scorecard</h1>
      </div>

      {/* Score ring */}
      <Card className="mx-auto w-full max-w-3xl overflow-hidden">
        <CardHeader className="flex-col items-center gap-6 p-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <CardTitle className="text-2xl">{scorecard?.recommendation ?? 'Result'}</CardTitle>
            <CardDescription className="max-w-[46ch]">{scorecard?.summary}</CardDescription>
          </div>
          <div className="relative size-28 shrink-0">
            <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden="true">
              <circle cx="60" cy="60" r={r} fill="none" stroke="hsl(var(--brand-200))" strokeWidth="7" />
              <circle
                cx="60" cy="60" r={r} fill="none" stroke="hsl(var(--brand-900))" strokeWidth="7"
                strokeLinecap="round" strokeDasharray={circ}
                strokeDashoffset={circ - (score / 100) * circ}
                className="transition-[stroke-dashoffset] duration-700 ease-out"
              />
            </svg>
            <span className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-4xl font-medium tabular">{score}</span>
              <span className="text-xs text-muted-foreground">/ 100</span>
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-8 p-8 pt-0">
          {/* Dimension scores */}
          {dims.length > 0 && (
            <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {dims.map(([key, val]) => (
                <div key={key} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="tabular text-muted-foreground">{val.score}</span>
                  </div>
                  <Progress value={val.score} aria-label={key} />
                  <p className="text-xs text-muted-foreground">{val.note}</p>
                </div>
              ))}
            </div>
          )}

          {/* Strengths + gaps */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Strengths</p>
              <ul className="flex flex-col gap-1.5">
                {(scorecard?.strengths ?? []).map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-green-500" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Areas to improve</p>
              <ul className="flex flex-col gap-1.5">
                {(scorecard?.improvements ?? []).map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-amber-500" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Per-question feedback */}
          {evaluation?.perQuestion?.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold">Question-by-question feedback</p>
              <div className="flex flex-col divide-y rounded-lg border">
                {evaluation.perQuestion.map((pq) => {
                  const qObj = questions.find((q) => q.id === pq.id);
                  return (
                    <div key={pq.id} className="flex flex-col gap-1.5 px-5 py-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Q{pq.id}</span>
                        <Badge variant={pq.score >= 7 ? 'default' : 'outline'}>
                          {pq.score}/10
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{qObj?.question}</p>
                      <p className="text-xs">{pq.feedback}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-3 p-8 pt-0">
          <Button variant="outline" onClick={onBack} className="flex-1 sm:flex-none">
            Try again
          </Button>
          <Button onClick={onComplete} className="flex-1 sm:flex-none">
            Done
            <ArrowRight aria-hidden="true" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

