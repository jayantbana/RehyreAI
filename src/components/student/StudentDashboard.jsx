/**
 * StudentDashboard.jsx
 * Hub screen shown after a student picks their track + language.
 * Lets them choose: AI Assessment OR AI Interview (or both).
 */
import React from 'react';
import { ClipboardList, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OPTIONS = [
  {
    id: 'assessment',
    icon: ClipboardList,
    title: 'AI Assessment',
    description:
      'Answer 10 tailored MCQ + short-answer questions generated for your track and language. Get scored and explained by Gemini.',
    duration: '~45 min',
    cta: 'Start assessment',
  },
  {
    id: 'interview',
    icon: MessageSquare,
    title: 'AI Interview',
    description:
      'Have a real back-and-forth with an AI interviewer. It adapts questions based on your answers — just like a real technical screen.',
    duration: '~20–30 min',
    cta: 'Start interview',
  },
];

export default function StudentDashboard({ track, language, onSelect, onBack }) {
  return (
    <div className="container flex flex-col gap-10 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            ← Change settings
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="h-7 gap-1.5 rounded-full px-3 text-sm font-semibold">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Powered by Gemini AI
          </Badge>
        </div>
        <h1 className="text-4xl">
          Ready to practise, {track} · {language}
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          Choose how you want to practise. Both sessions generate AI-powered feedback and a scorecard at the end.
        </p>
      </div>

      {/* Options */}
      <div className="grid gap-6 md:grid-cols-2">
        {OPTIONS.map(({ id, icon: Icon, title, description, duration, cta }) => (
          <Card key={id} className="flex flex-col justify-between">
            <CardHeader className="gap-4 p-8 pb-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1.5">
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription className="max-w-[40ch] text-sm">{description}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="flex items-center justify-between p-8 pt-0">
              <span className="text-sm text-muted-foreground">⏱ {duration}</span>
              <Button onClick={() => onSelect(id)}>
                {cta}
                <ArrowRight aria-hidden="true" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

