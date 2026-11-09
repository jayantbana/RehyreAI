import React, { useState } from 'react';
import { FileCheck2, Scale, School, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import Rail from '@/components/Rail.jsx';

// Assumption: 3 engineer-hours saved per candidate (3.5h manual screening → 0.5h final round)
const HOURS_SAVED_PER_CANDIDATE = 3;

const CAPABILITIES = [
  {
    icon: FileCheck2,
    title: 'Assessments from any job description',
    detail: 'Paste a role description and receive a calibrated assessment.',
    metric: ['Setup', 'Under a minute'],
  },
  {
    icon: Scale,
    title: 'Explainable screening',
    detail: 'Each decision links to tests, code and interview transcripts.',
    metric: ['Evidence', 'For every decision'],
  },
  {
    icon: School,
    title: 'Campus drives at scale',
    detail: 'Proctored assessments for large cohorts, with instant exports.',
    metric: ['Capacity', '50,000 concurrent'],
  },
];

const REASON_CODES = [
  { code: 'RC-DSA-04', label: 'Suboptimal complexity', detail: 'Used O(n²) where O(n) was expected.', pass: false },
  { code: 'RC-SYS-09', label: 'Cache race condition', detail: 'No lock on write-through; risk of stampede.', pass: false },
  { code: 'RC-SQL-02', label: 'Efficient aggregation', detail: 'Window function ran without memory spill.', pass: true },
  { code: 'RC-HR-01', label: 'Clear ownership', detail: 'Explained outage mitigation step by step.', pass: true },
];

export default function EnterpriseView({ onOpenRecruiterModal }) {
  const [candidates, setCandidates] = useState(250);
  const [rate, setRate] = useState(65);

  const hours = candidates * HOURS_SAVED_PER_CANDIDATE;
  const savings = hours * rate;

  return (
    <>
      {/* ── Hero ── */}
      <section className="container flex flex-col items-start gap-6 py-16 md:py-24">
        <p className="eyebrow">For employers</p>
        <h1 className="max-w-[18ch] text-5xl">Give engineering time back to engineering.</h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          Automated, explainable first rounds. Your team meets only the strongest finalists.
        </p>
        <Button size="lg" className="mt-2 w-full sm:w-auto" onClick={onOpenRecruiterModal}>
          Book a demo
          <ArrowRight aria-hidden="true" />
        </Button>
      </section>

      {/* ── Capabilities ── */}
      <section className="container grid gap-6 pb-20 md:grid-cols-3 md:pb-28">
        {CAPABILITIES.map(({ icon: Icon, title, detail, metric }) => (
          <Card key={title} className="flex flex-col justify-between">
            <CardHeader className="gap-4 p-7">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{detail}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-stretch gap-4 p-7 pt-0">
              <Separator />
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{metric[0]}</span>
                <span className="font-semibold tabular">{metric[1]}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* ── Reason codes ── */}
      <section className="border-y bg-card/60">
        <div className="container flex flex-col gap-8 py-20 md:py-28">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Reason codes</p>
            <h2 className="text-4xl">Decisions you can audit.</h2>
          </div>
          <Rail label="Sample reason codes">
            {REASON_CODES.map((rc) => (
              <Card key={rc.code} className="w-[78%] bg-background sm:w-[19rem]">
                <CardHeader className="gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant={rc.pass ? 'default' : 'outline'} className="font-mono font-medium">
                      {rc.code}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{rc.pass ? 'Strength' : 'Gap'}</span>
                  </div>
                  <CardTitle className="text-lg">{rc.label}</CardTitle>
                  <CardDescription className="text-sm">{rc.detail}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Rail>
        </div>
      </section>

      {/* ── ROI calculator ── */}
      <section className="container py-20 md:py-28">
        <Card className="grid overflow-hidden lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-10 p-7 sm:p-10">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">Estimate</p>
              <h2 className="text-3xl">Hours your engineers get back.</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4">
                <label id="cand-label" className="text-sm font-semibold">Candidates per month</label>
                <span className="font-semibold tabular">{candidates.toLocaleString()}</span>
              </div>
              <Slider
                aria-labelledby="cand-label"
                min={50}
                max={2000}
                step={25}
                value={[candidates]}
                onValueChange={([v]) => setCandidates(v)}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4">
                <label id="rate-label" className="text-sm font-semibold">Engineer cost per hour</label>
                <span className="font-semibold tabular">${rate}</span>
              </div>
              <Slider
                aria-labelledby="rate-label"
                min={30}
                max={150}
                step={5}
                value={[rate]}
                onValueChange={([v]) => setRate(v)}
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Assumes {HOURS_SAVED_PER_CANDIDATE} engineer-hours saved per candidate.
            </p>
          </div>

          <CardContent className="flex flex-col justify-between gap-8 bg-primary p-7 text-primary-foreground sm:p-10">
            <dl className="flex flex-col gap-8" aria-live="polite">
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-brand-300">Hours saved each month</dt>
                <dd className="font-serif text-5xl font-medium tabular">{hours.toLocaleString()}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-brand-300">Estimated monthly saving</dt>
                <dd className="font-serif text-5xl font-medium tabular">${savings.toLocaleString()}</dd>
              </div>
            </dl>
            <Button size="lg" variant="secondary" className="w-full" onClick={onOpenRecruiterModal}>
              Request a quote
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
