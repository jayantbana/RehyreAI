import React from 'react';
import { ArrowRight, ShieldCheck, Scale, FileCheck2, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Rail from '@/components/Rail.jsx';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const PIPELINES = [
  {
    id: 'swe',
    label: 'Software',
    stages: [
      { title: 'Code review', detail: 'Reads real commits, not résumé keywords.', duration: 'Automated' },
      { title: 'Online assessment', detail: 'Timed problems with strict limits.', duration: '45 min' },
      { title: 'Live coding', detail: 'Sandboxed execution against hidden tests.', duration: '30 min' },
      { title: 'System design', detail: 'Whiteboard trade-offs, explained aloud.', duration: '30 min' },
      { title: 'Technical debrief', detail: 'Adaptive voice interview on reasoning.', duration: '20 min' },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    stages: [
      { title: 'Portfolio review', detail: 'SQL patterns and pipeline structure.', duration: 'Automated' },
      { title: 'Statistics', detail: 'Hypothesis testing and inference.', duration: '30 min' },
      { title: 'Live SQL', detail: 'Window functions and query tuning.', duration: '35 min' },
      { title: 'Case study', detail: 'Diagnose an anomaly in live data.', duration: '30 min' },
      { title: 'Executive summary', detail: 'Explain findings in plain language.', duration: '20 min' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & SRE',
    stages: [
      { title: 'Infrastructure review', detail: 'Terraform, Helm and IAM policies.', duration: 'Automated' },
      { title: 'Linux sandbox', detail: 'Find bottlenecks and memory leaks.', duration: '30 min' },
      { title: 'Cluster debugging', detail: 'Fix a failing Kubernetes service.', duration: '30 min' },
      { title: 'Failover design', detail: 'Plan a zero-downtime architecture.', duration: '30 min' },
      { title: 'Incident review', detail: 'Walk through a post-mortem.', duration: '20 min' },
    ],
  },
];

const PRINCIPLES = [
  { icon: ShieldCheck, title: 'Sandboxed execution', detail: 'Code runs in isolated environments.' },
  { icon: Scale, title: 'Explainable decisions', detail: 'Every outcome cites its evidence.' },
  { icon: FileCheck2, title: 'Verifiable records', detail: 'Scorecards are signed and auditable.' },
];

const PREVIEW_METERS = [
  { label: 'Problem solving', value: 92 },
  { label: 'System design', value: 81 },
  { label: 'Communication', value: 85 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function HomeView({ setActiveTab, onOpenStudentModal, onOpenRecruiterModal }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="h-7 gap-1.5 rounded-full border-brand-300 px-3 text-sm font-semibold text-muted-foreground">
            <BadgeCheck className="size-4" aria-hidden="true" />
            Practice and assessment in one loop
          </Badge>

          <h1 className="text-5xl">Technical hiring, verified at every step.</h1>

          <p className="max-w-[46ch] text-lg text-muted-foreground">
            Candidates practise realistic interview loops. Employers receive explainable scorecards backed by evidence.
          </p>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
            <Button size="lg" onClick={onOpenStudentModal}>
              Start practising
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" onClick={onOpenRecruiterModal}>
              Book a demo
            </Button>
          </div>
        </div>

        <ScorecardPreview onClick={() => setActiveTab('scorecard')} />
      </section>

      {/* ── Principles ── */}
      <section aria-label="Principles" className="border-y bg-card/60">
        <div className="container grid gap-8 py-10 sm:grid-cols-3 sm:gap-6">
          {PRINCIPLES.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex items-start gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-0.5">
                <h2 className="font-sans text-base font-semibold tracking-normal">{title}</h2>
                <p className="text-sm text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Assessment stages ── */}
      <section className="container flex flex-col gap-10 py-20 md:py-28">
        <Tabs defaultValue="swe" className="flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">How assessment works</p>
              <h2 className="text-4xl">Five stages, one consistent standard.</h2>
            </div>
            <TabsList className="self-start md:self-auto">
              {PIPELINES.map((p) => (
                <TabsTrigger key={p.id} value={p.id}>{p.label}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          {PIPELINES.map((p) => (
            <TabsContent key={p.id} value={p.id} className="mt-0">
              <Rail label={`${p.label} assessment stages`}>
                {p.stages.map((s, i) => (
                  <Card key={s.title} className="flex w-[78%] flex-col justify-between sm:w-[17.5rem]">
                    <CardHeader className="gap-3 pb-4">
                      <span className="font-serif text-3xl font-normal leading-none text-brand-500 tabular">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <CardTitle>{s.title}</CardTitle>
                      <CardDescription className="text-sm">{s.detail}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col items-stretch gap-3">
                      <Separator />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-semibold tabular">{s.duration}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </Rail>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* ── Audiences ── */}
      <section className="container grid gap-6 pb-20 md:grid-cols-2 md:pb-28">
        <AudienceCard
          eyebrow="For candidates"
          title="Practise the real interview."
          body="Timed assessments, live coding and AI-led debriefs, with feedback you can act on."
          cta="Explore practice"
          onClick={() => setActiveTab('prepare')}
        />
        <AudienceCard
          eyebrow="For employers"
          title="Screen with confidence."
          body="Role-specific assessments with clear, auditable reasoning behind every decision."
          cta="Explore for teams"
          onClick={() => setActiveTab('enterprise')}
        />
      </section>

      {/* ── Closing call to action ── */}
      <section className="container pb-20 md:pb-28">
        <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-10 md:flex-row md:items-center md:px-14 md:py-16">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="text-3xl text-primary-foreground">See what a verified scorecard looks like.</h2>
            <p className="text-brand-300">Scores, evidence and reasoning on a single page.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" variant="secondary" onClick={() => setActiveTab('scorecard')}>
              View sample
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-700 text-primary-foreground hover:bg-brand-700 hover:text-primary-foreground"
              onClick={onOpenRecruiterModal}
            >
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Pieces
// ─────────────────────────────────────────────────────────────────────────────
function AudienceCard({ eyebrow, title, body, cta, onClick }) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="gap-3 p-8 pb-6">
        <p className="eyebrow">{eyebrow}</p>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="max-w-[42ch]">{body}</CardDescription>
      </CardHeader>
      <CardFooter className="p-8 pt-0">
        <Button variant="link" className="h-auto px-0 text-base" onClick={onClick}>
          {cta}
          <ArrowRight aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function ScorecardPreview({ onClick }) {
  const score = 88;
  const r = 34;
  const c = 2 * Math.PI * r;

  return (
    <Card className="relative mx-auto w-full max-w-md shadow-[0_24px_48px_-24px_hsl(var(--brand-900)/0.25)]">
      <CardHeader className="flex-row items-center justify-between gap-4 space-y-0 p-6 pb-5">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Readiness scorecard</p>
          <CardTitle className="text-xl">Arjun Sharma</CardTitle>
          <p className="text-sm text-muted-foreground">Backend Engineer</p>
        </div>
        <div className="relative size-20 shrink-0">
          <svg viewBox="0 0 80 80" className="size-full -rotate-90" aria-hidden="true">
            <circle cx="40" cy="40" r={r} fill="none" stroke="hsl(var(--brand-200))" strokeWidth="6" />
            <circle
              cx="40" cy="40" r={r} fill="none" stroke="hsl(var(--brand-900))" strokeWidth="6"
              strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (score / 100) * c}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-medium tabular">
            {score}
          </span>
          <span className="sr-only">Score {score} out of 100</span>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="flex flex-col gap-4 p-6">
        {PREVIEW_METERS.map((m) => (
          <div key={m.label} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span>{m.label}</span>
              <span className="font-semibold tabular">{m.value}</span>
            </div>
            <Progress value={m.value} aria-label={m.label} />
          </div>
        ))}
      </CardContent>

      <Separator />

      <CardFooter className="justify-between gap-4 p-6 py-4">
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <ShieldCheck className="size-4" aria-hidden="true" />
          Signed record
        </span>
        <Button variant="ghost" size="sm" onClick={onClick}>
          Open
          <ArrowRight aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}
