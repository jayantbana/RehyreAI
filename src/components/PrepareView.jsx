import React, { useState } from 'react';
import { Timer, Code2, Layers, Mic2, Award, Check, ArrowRight, Play, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Rail from '@/components/Rail.jsx';

const CODE = {
  cpp: `// Range sum query — segment tree
#include <vector>

class SegmentTree {
  std::vector<long long> tree;
  int n;
public:
  explicit SegmentTree(const std::vector<int>& a)
    : tree(4 * a.size()), n(a.size()) {
    build(a, 1, 0, n - 1);
  }
  // O(log n) point update and range query
};`,
  python: `# Longest palindromic subsequence
def lps(s: str) -> int:
    n = len(s)
    dp = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if s[i] == s[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
    return dp[0][n - 1]`,
  go: `// Worker pool
package main

import "sync"

func worker(jobs <-chan int, out chan<- int, wg *sync.WaitGroup) {
	defer wg.Done()
	for j := range jobs {
		out <- j * 2
	}
}`,
};

const PILLARS = [
  { icon: Timer, title: 'Online assessments', detail: 'Timed sections that mirror real screening rounds.' },
  { icon: Code2, title: 'Live coding', detail: 'Over 40 languages, run against hidden tests.' },
  { icon: Layers, title: 'System design', detail: 'A shared whiteboard with follow-up questions.' },
  { icon: Mic2, title: 'Voice interview', detail: 'A conversational debrief on your reasoning.' },
  { icon: Award, title: 'Verified scorecard', detail: 'A signed record you can share with employers.' },
];

const PLANS = [
  {
    name: 'Free',
    price: '₹0',
    period: 'always',
    description: 'Benchmark your readiness.',
    features: ['One complete practice loop', 'Readiness report', '50 code runs per month'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: 'per month',
    description: 'Unlimited practice before placement season.',
    features: ['Unlimited practice loops', 'Verified, shareable scorecard', 'Personal 14-day study plan'],
    cta: 'Choose Pro',
    featured: true,
  },
];

export default function PrepareView({ onOpenStudentModal }) {
  const [lang, setLang] = useState('cpp');
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(null);

  const run = () => {
    setRunning(true);
    setResult(null);
    setTimeout(() => {
      setRunning(false);
      setResult({ tests: '42 / 42', time: '0.024 s', memory: '13.8 MB' });
    }, 700);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="container flex flex-col items-start gap-6 py-16 md:py-24">
        <p className="eyebrow">For candidates</p>
        <h1 className="max-w-[18ch] text-5xl">Practise the full interview, not only the puzzles.</h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          Assessments, live coding, system design and a voice debrief, in a single session.
        </p>
        <div className="flex w-full flex-col items-start gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
          <Button size="lg" className="w-full sm:w-auto" onClick={onOpenStudentModal}>
            Start free practice
            <ArrowRight aria-hidden="true" />
          </Button>
          <span className="text-sm text-muted-foreground">No payment required.</span>
        </div>
      </section>

      {/* ── What you practise ── */}
      <section className="container flex flex-col gap-8 pb-20 md:pb-28">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">What you practise</p>
          <h2 className="text-4xl">Five parts of a real hiring loop.</h2>
        </div>
        <Rail label="Practice areas">
          {PILLARS.map(({ icon: Icon, title, detail }) => (
            <Card key={title} className="w-[78%] sm:w-[17.5rem]">
              <CardHeader className="gap-4">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-sm">{detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </Rail>
      </section>

      {/* ── Sandbox demo ── */}
      <section className="border-y bg-card/60">
        <div className="container grid items-center gap-10 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="eyebrow">Try it</p>
            <h2 className="text-4xl">Run code in a real sandbox.</h2>
            <p className="max-w-[40ch] text-muted-foreground">
              Each run reports tests passed, runtime and memory.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-700 px-4 py-3">
              <Tabs value={lang} onValueChange={(v) => { setLang(v); setResult(null); }}>
                <TabsList className="h-10 bg-brand-700/60 text-brand-300">
                  {[['cpp', 'C++'], ['python', 'Python'], ['go', 'Go']].map(([id, label]) => (
                    <TabsTrigger
                      key={id}
                      value={id}
                      className="h-8 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-900"
                    >
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <Button size="sm" variant="secondary" onClick={run} disabled={running}>
                {running ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Play aria-hidden="true" />}
                {running ? 'Running' : 'Run'}
              </Button>
            </div>

            <ScrollArea className="h-64">
              <pre className="p-5 font-mono text-[0.8125rem] leading-relaxed text-brand-200">
                <code>{CODE[lang]}</code>
              </pre>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div aria-live="polite" className="min-h-[3.25rem] border-t border-brand-700 px-5 py-3.5 text-sm">
              {result ? (
                <div className="flex flex-wrap gap-x-6 gap-y-1 tabular">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Check className="size-4" aria-hidden="true" />
                    {result.tests} tests passed
                  </span>
                  <span className="text-brand-300">Runtime {result.time}</span>
                  <span className="text-brand-300">Memory {result.memory}</span>
                </div>
              ) : (
                <span className="text-brand-300">{running ? 'Compiling…' : 'Press Run to execute.'}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="container flex flex-col gap-10 py-20 md:py-28">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="text-4xl">Free to start. Simple to upgrade.</h2>
        </div>

        <div className="mx-auto grid w-full max-w-3xl gap-6 md:grid-cols-2">
          {PLANS.map((p) => (
            <Card
              key={p.name}
              className={p.featured ? 'flex flex-col border-primary bg-primary text-primary-foreground' : 'flex flex-col'}
            >
              <CardHeader className="gap-2 p-8">
                <div className="flex items-center justify-between">
                  <CardTitle className={p.featured ? 'text-2xl text-primary-foreground' : 'text-2xl'}>{p.name}</CardTitle>
                  {p.featured && <Badge variant="secondary">Recommended</Badge>}
                </div>
                <CardDescription className={p.featured ? 'text-brand-300' : undefined}>{p.description}</CardDescription>
                <p className="flex items-baseline gap-2 pt-4">
                  <span className="font-serif text-4xl font-medium tabular">{p.price}</span>
                  <span className={p.featured ? 'text-sm text-brand-300' : 'text-sm text-muted-foreground'}>{p.period}</span>
                </p>
              </CardHeader>
              <Separator className={p.featured ? 'bg-brand-700' : undefined} />
              <CardContent className="flex-1 p-8">
                <ul className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-1 size-4 shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button
                  size="lg"
                  variant={p.featured ? 'secondary' : 'outline'}
                  className="w-full"
                  onClick={onOpenStudentModal}
                >
                  {p.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
