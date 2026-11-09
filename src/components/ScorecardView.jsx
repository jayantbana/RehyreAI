import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CANDIDATES = [
  {
    id: 'arjun',
    name: 'Arjun Sharma',
    role: 'Backend Engineer',
    institution: 'B.Tech Computer Science, 2026',
    score: 88,
    percentile: 'Top 4%',
    hash: '0x7f4a9b12e8c45d31b27914a87265fe09a1c84',
    issued: '18 October 2026',
    meters: [
      { label: 'Problem solving', value: 92, note: 'All 42 tests passed in C++20 using an O(n log n) heap.' },
      { label: 'System design', value: 81, note: 'Distributed cache with Raft replication and a sharded store.' },
      { label: 'Communication', value: 85, note: 'Clear ownership when discussing a past outage.' },
      { label: 'Code quality', value: 94, note: 'No memory leaks; clean separation of modules.' },
    ],
    summary:
      'Reduced a dynamic-programming solution from O(n²) to O(n) space and explained partition trade-offs clearly. Recommended for the final round.',
    reasons: [
      { code: 'RC-DSA-04', label: 'Optimal algorithm variant', pass: true },
      { code: 'RC-SYS-12', label: 'Cache invalidation handled', pass: true },
      { code: 'RC-DB-07', label: 'Consider composite indexes', pass: false },
      { code: 'RC-HR-02', label: 'Ownership verified', pass: true },
    ],
  },
  {
    id: 'ananya',
    name: 'Ananya Rao',
    role: 'Infrastructure Engineer',
    institution: 'M.Tech Data Engineering, 2026',
    score: 95,
    percentile: 'Top 1%',
    hash: '0x3e18a9fc44b2091db87114c092a41d77b58e2',
    issued: '17 October 2026',
    meters: [
      { label: 'Problem solving', value: 98, note: 'Fastest run in the cohort, 0.011 s in Go.' },
      { label: 'System design', value: 94, note: 'Sound replication and quorum model.' },
      { label: 'Communication', value: 92, note: 'Concise justification of trade-offs under questioning.' },
      { label: 'Code quality', value: 96, note: 'Idiomatic, race-free Go.' },
    ],
    summary:
      'Exceptional across algorithms and distributed systems. Remained composed under interruption and defended an event-driven design convincingly.',
    reasons: [
      { code: 'RC-ALG-01', label: 'Linear-time trie', pass: true },
      { code: 'RC-DIST-05', label: 'Split-brain mitigated', pass: true },
      { code: 'RC-MET-02', label: 'Strong observability', pass: true },
      { code: 'RC-CONC-08', label: 'Deadlock-free locking', pass: true },
    ],
  },
  {
    id: 'devansh',
    name: 'Devansh Mehta',
    role: 'Site Reliability Engineer',
    institution: 'B.Tech Information Technology, 2026',
    score: 83,
    percentile: 'Top 9%',
    hash: '0x89d2c10a4e76b883c74992b115e619fa00c43',
    issued: '16 October 2026',
    meters: [
      { label: 'Problem solving', value: 78, note: 'Solid scripting and queue processing in Python.' },
      { label: 'System design', value: 89, note: 'Multi-region failover with GeoDNS.' },
      { label: 'Communication', value: 82, note: 'Calm, structured incident review.' },
      { label: 'Code quality', value: 86, note: 'Clean, lint-compliant Terraform modules.' },
    ],
    summary:
      'Diagnosed a failing Kubernetes pod in 75 seconds. Should strengthen back-pressure handling for very high log volumes.',
    reasons: [
      { code: 'RC-K8S-03', label: 'Crash loop resolved', pass: true },
      { code: 'RC-NET-08', label: 'Socket backlog identified', pass: true },
      { code: 'RC-MEM-04', label: 'Add log back-pressure', pass: false },
      { code: 'RC-INC-01', label: 'Correct severity triage', pass: true },
    ],
  },
];

export default function ScorecardView() {
  const [id, setId] = useState(CANDIDATES[0].id);
  const [copied, setCopied] = useState(false);
  const [verified, setVerified] = useState(false);

  const c = CANDIDATES.find((x) => x.id === id);

  const select = (next) => {
    setId(next);
    setCopied(false);
    setVerified(false);
  };

  const copy = () => {
    navigator.clipboard?.writeText(c.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const r = 52;
  const circ = 2 * Math.PI * r;

  return (
    <>
      {/* ── Header ── */}
      <section className="container flex flex-col items-center gap-6 py-16 text-center md:py-20">
        <p className="eyebrow">Sample scorecard</p>
        <h1 className="max-w-[16ch] text-5xl">One page. Every score explained.</h1>

        <div className="-mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 pt-2 sm:mx-0 sm:w-auto sm:px-0">
          <Tabs value={id} onValueChange={select}>
            <TabsList aria-label="Choose a candidate">
              {CANDIDATES.map((x) => (
                <TabsTrigger key={x.id} value={x.id}>{x.name}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* ── Scorecard ── */}
      <section className="container pb-20 md:pb-28">
        <Card className="mx-auto max-w-3xl overflow-hidden shadow-[0_24px_48px_-28px_hsl(var(--brand-900)/0.3)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/60 px-6 py-3.5 sm:px-10">
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <BadgeCheck className="size-4" aria-hidden="true" />
              Verified
            </span>
            <span className="text-sm text-muted-foreground">Issued {c.issued}</span>
          </div>

          <CardHeader className="flex-col gap-8 space-y-0 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex flex-col gap-1.5">
              <CardTitle className="text-3xl">{c.name}</CardTitle>
              <p className="font-semibold">{c.role}</p>
              <p className="text-sm text-muted-foreground">{c.institution}</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative size-28 shrink-0">
                <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden="true">
                  <circle cx="60" cy="60" r={r} fill="none" stroke="hsl(var(--brand-200))" strokeWidth="7" />
                  <circle
                    cx="60" cy="60" r={r} fill="none" stroke="hsl(var(--brand-900))" strokeWidth="7"
                    strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ - (c.score / 100) * circ}
                    className="transition-[stroke-dashoffset] duration-700 ease-out"
                  />
                </svg>
                <span className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-4xl font-medium leading-none tabular">{c.score}</span>
                  <span className="text-xs text-muted-foreground">of 100</span>
                </span>
              </div>
              <div className="flex flex-col gap-0.5 text-left">
                <span className="text-sm text-muted-foreground">Cohort rank</span>
                <span className="font-serif text-2xl font-medium">{c.percentile}</span>
              </div>
            </div>
          </CardHeader>

          <Separator />

          <CardContent className="flex flex-col gap-8 p-6 sm:p-10">
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {c.meters.map((m) => (
                <div key={m.label} className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{m.label}</span>
                    <span className="tabular text-muted-foreground">{m.value}</span>
                  </div>
                  <Progress value={m.value} aria-label={m.label} />
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-brand-300 pl-5 font-serif text-xl leading-relaxed">
              {c.summary}
            </blockquote>

            <Accordion type="multiple" className="border-t">
              <AccordionItem value="notes">
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
                  Assessor notes
                </AccordionTrigger>
                <AccordionContent>
                  <dl className="flex flex-col gap-4 text-base">
                    {c.meters.map((m) => (
                      <div key={m.label} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                        <dt className="font-semibold">{m.label}</dt>
                        <dd className="text-muted-foreground">{m.note}</dd>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="reasons">
                <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
                  Reason codes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col divide-y">
                    {c.reasons.map((rc) => (
                      <li key={rc.code} className="flex flex-wrap items-center justify-between gap-3 py-3 text-base">
                        <span>{rc.label}</span>
                        <Badge variant={rc.pass ? 'default' : 'outline'} className="font-mono font-medium">
                          {rc.code}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>

          <CardFooter className="flex flex-col items-stretch gap-4 border-t bg-muted/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex min-w-0 items-center gap-2 text-sm">
              <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
              <span className="shrink-0 text-muted-foreground">Signature</span>
              <code className="truncate font-mono text-[0.8125rem]">{c.hash}</code>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="sm" onClick={copy} className="flex-1 sm:flex-none">
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy'}
              </Button>
              <Button size="sm" onClick={() => setVerified(true)} className="flex-1 sm:flex-none" aria-live="polite">
                {verified ? <Check aria-hidden="true" /> : null}
                {verified ? 'Signature valid' : 'Verify'}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
