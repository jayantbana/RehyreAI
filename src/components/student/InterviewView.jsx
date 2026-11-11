/**
 * InterviewView.jsx
 * AI-powered conversational technical interview with Gemini.
 * Gemini asks questions, student replies, Gemini adapts.
 * After 8 exchanges → Gemini closes → scorecard generated.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Loader2, Bot, User, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { startInterview, continueInterview, scoreInterview } from '@/lib/gemini';

// ─── States ──────────────────────────────────────────────────────────────────
// 'starting' | 'chatting' | 'scoring' | 'done' | 'error'

export default function InterviewView({ track, language, onComplete, onBack }) {
  const [phase, setPhase] = useState('starting');
  const [messages, setMessages] = useState([]); // { role: 'model'|'user', text: string }
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [scorecard, setScorecard] = useState(null);
  const [error, setError] = useState('');

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // ── Build Gemini history array from messages ───────────────────────────────
  const toHistory = (msgs) =>
    msgs.map((m) => ({ role: m.role, parts: [{ text: m.text }] }));

  // ── Start interview ────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setPhase('starting');
    startInterview(track, language)
      .then((text) => {
        if (!cancelled) {
          setMessages([{ role: 'model', text }]);
          setPhase('chatting');
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

  // ── Auto-scroll ────────────────────────────────────────────────────────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // ── Detect interview end ──────────────────────────────────────────────────
  const checkComplete = useCallback(async (msgs) => {
    const lastModel = [...msgs].reverse().find((m) => m.role === 'model');
    if (lastModel?.text?.includes('INTERVIEW_COMPLETE')) {
      setPhase('scoring');
      try {
        const sc = await scoreInterview(msgs, track, language);
        setScorecard(sc);
        setPhase('done');
      } catch (e) {
        setError(e.message);
        setPhase('error');
      }
    }
  }, [track, language]);

  // ── Send a message ─────────────────────────────────────────────────────────
  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || phase !== 'chatting') return;

    const newMessages = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const history = toHistory(messages); // history before the new user message
      const reply = await continueInterview(history, text);
      const updated = [...newMessages, { role: 'model', text: reply }];
      setMessages(updated);
      await checkComplete(updated);
    } catch (e) {
      setError(e.message);
      setPhase('error');
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [input, loading, phase, messages, checkComplete]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  // ── Exchange count (user messages) ────────────────────────────────────────
  const exchangeCount = messages.filter((m) => m.role === 'user').length;
  const maxExchanges = 8;
  const progressPct = Math.min((exchangeCount / maxExchanges) * 100, 100);

  // ── Render ─────────────────────────────────────────────────────────────────
  if (phase === 'starting') return <LoadingScreen message="Gemini is preparing your interview…" />;
  if (phase === 'scoring') return <LoadingScreen message="Generating your scorecard…" />;
  if (phase === 'error') return <ErrorScreen message={error} onBack={onBack} />;

  if (phase === 'done') {
    return (
      <InterviewResultsScreen
        scorecard={scorecard}
        messages={messages}
        track={track}
        language={language}
        onComplete={onComplete}
        onBack={onBack}
      />
    );
  }

  // ── Chat UI ────────────────────────────────────────────────────────────────
  return (
    <div className="container flex flex-col gap-6 py-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <p className="eyebrow">AI Interview · {track} / {language}</p>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Technical Interview</h1>
          <Badge variant="outline" className="font-mono">
            {exchangeCount}/{maxExchanges} questions
          </Badge>
        </div>
        <Progress value={progressPct} className="h-1.5" aria-label="Interview progress" />
      </div>

      {/* Chat window */}
      <Card className="flex flex-col" style={{ minHeight: '60vh' }}>
        <CardContent className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
          {messages.map((m, i) => (
            <MessageBubble key={i} role={m.role} text={m.text} />
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Interviewer is thinking…
            </div>
          )}
          <div ref={bottomRef} />
        </CardContent>

        {/* Input */}
        <CardFooter className="border-t p-4">
          <div className="flex w-full gap-3">
            <textarea
              ref={inputRef}
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your answer… (Enter to send, Shift+Enter for new line)"
              disabled={loading || phase !== 'chatting'}
              className="flex-1 resize-none rounded-lg border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
            <Button onClick={send} disabled={loading || !input.trim() || phase !== 'chatting'}>
              <Send aria-hidden="true" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

// ── Chat bubble ───────────────────────────────────────────────────────────────
function MessageBubble({ role, text }) {
  const isModel = role === 'model';
  // Strip the INTERVIEW_COMPLETE marker from displayed text
  const displayText = text.replace('INTERVIEW_COMPLETE', '').trim();

  return (
    <div className={`flex gap-3 ${isModel ? '' : 'flex-row-reverse'}`}>
      <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${isModel ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
        {isModel
          ? <Bot className="size-4" aria-hidden="true" />
          : <User className="size-4" aria-hidden="true" />
        }
      </span>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isModel
            ? 'rounded-tl-sm bg-muted'
            : 'rounded-tr-sm bg-primary text-primary-foreground'
        }`}
      >
        {displayText}
      </div>
    </div>
  );
}

// ── Results screen ────────────────────────────────────────────────────────────
function InterviewResultsScreen({ scorecard, messages, track, language, onComplete, onBack }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const score = scorecard?.overallScore ?? 0;
  const dims = scorecard?.dimensions ? Object.entries(scorecard.dimensions) : [];

  return (
    <div className="container flex flex-col gap-10 py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Interview complete · {track} / {language}</p>
        <h1 className="text-4xl">Interview Scorecard</h1>
      </div>

      <Card className="mx-auto w-full max-w-3xl overflow-hidden">
        <CardHeader className="flex-col items-center gap-6 p-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
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

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Strengths</p>
              <ul className="flex flex-col gap-1.5">
                {(scorecard?.strengths ?? []).map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 size-3.5 shrink-0 text-green-500">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Improvements</p>
              <ul className="flex flex-col gap-1.5">
                {(scorecard?.improvements ?? []).map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 size-3.5 shrink-0 text-amber-500">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 p-8 pt-0">
          <Button variant="outline" onClick={onBack} className="flex-1 sm:flex-none">
            Try again
          </Button>
          <Button onClick={onComplete} className="flex-1 sm:flex-none">
            Done <ArrowRight aria-hidden="true" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

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

