import React, { useState } from 'react';
import { 
  Timer, 
  Code2, 
  Layers, 
  Mic2, 
  Award, 
  Check, 
  ArrowRight, 
  Play, 
  Sparkles, 
  ChevronRight,
  Terminal,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function PrepareView({ onOpenStudentModal }) {
  const [selectedLang, setSelectedLang] = useState('cpp');
  const [compilerRunning, setCompilerRunning] = useState(false);
  const [testOutput, setTestOutput] = useState(null);

  const codeSnippets = {
    cpp: `// Judge0 C++20 Sandbox - Range Sum Query Segment Tree
#include <iostream>
#include <vector>

class SegmentTree {
    std::vector<long long> tree;
    int n;
public:
    SegmentTree(const std::vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n, 0);
        build(arr, 1, 0, n - 1);
    }
    // O(log N) point update and range query...
};`,
    python: `# Judge0 Python 3.12 Sandbox - Dynamic Programming
def longest_palindromic_subsequence(s: str) -> int:
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
    go: `// Judge0 Go 1.22 Sandbox - Worker Pool Concurrency
package main

import (
    "fmt"
    "sync"
)

func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        results <- j * 2 // idempotent atomic transform
    }
}`
  };

  const handleRunCode = () => {
    setCompilerRunning(true);
    setTimeout(() => {
      setCompilerRunning(false);
      setTestOutput({
        time: '0.024s',
        memory: '13.8 MB',
        passed: '42 / 42 Testcases Passed',
        complexity: 'O(log N) Time • O(N) Space (Optimal)'
      });
    }, 700);
  };

  const pillars = [
    {
      id: "oa",
      number: "01",
      title: "Timed Online Assessments",
      subtitle: "Mirrors the exact algorithmic and aptitude pressure of Tier-1 product screenings.",
      icon: Timer,
      points: [
        "Time-pressured sectionals with strict anti-tab loss monitoring",
        "Adaptive difficulty engine responding to solving velocity",
        "Realistic aptitude & core OS/Networking fundamentals"
      ]
    },
    {
      id: "judge0",
      number: "02",
      title: "Judge0 Code Compiler Sandbox",
      subtitle: "Multi-language isolated execution with instant Big-O and memory bounds diagnostics.",
      icon: Code2,
      points: [
        "Instant compilation across 40+ programming languages on Judge0",
        "Asymptotic time & space complexity curve generation",
        "Automated edge-case synthesis and corner-case stress testing"
      ]
    },
    {
      id: "design",
      number: "03",
      title: "System Design Whiteboard",
      subtitle: "Interactive canvas for LLD & HLD with dynamic AI architectural follow-ups.",
      icon: Layers,
      points: [
        "Drag-and-drop distributed components (Load Balancers, Kafka, Redis)",
        "Real-time AI interviewer asks: 'How do you handle split-brain partitions?'",
        "Throughput, sharding, and latency bottleneck audits"
      ]
    },
    {
      id: "voice",
      number: "04",
      title: "AI Voice Interview Simulation",
      subtitle: "Ultra-low latency conversational agent simulating HR and Staff Engineer probes.",
      icon: Mic2,
      points: [
        "Conversational interruptions, clarification requests, and tone analysis",
        "Strict adherence to the Amazon / Google STAR framework",
        "Synchronized collaborative code editor while conversing live"
      ]
    },
    {
      id: "scorecard",
      number: "05",
      title: "Verified Readiness Scorecard",
      subtitle: "A tamper-proof credential with clear reason codes that recruiters trust.",
      icon: Award,
      points: [
        "Cryptographically signed report shareable directly on resumes & LinkedIn",
        "Granular reason codes explaining exactly where points were won or lost",
        "Targeted 14-day study plan calibrated to your weakest architectural habits"
      ]
    }
  ];

  return (
    <div className="space-y-24 py-12 md:py-20 animate-fadeIn">
      
      {/* 1. Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-bold">
            FOR CANDIDATES &amp; UNIVERSITY ASPIRANTS
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#1C1E21] mt-3 leading-[1.08]">
            Master the hiring loop before you sit in the hot seat.
          </h1>
          <p className="mt-6 text-lg text-[#525866] leading-relaxed">
            Stop solving disjointed LeetCode puzzles in total isolation. Rehyre Prepare puts you through the entire company gauntlet — from timed OAs to asynchronous system design interrogations.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={onOpenStudentModal}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Launch Free Mock Loop</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#525866] font-mono">No credit card required.</span>
          </div>
        </div>
      </section>

      {/* 2. The 5 Preparation Pillars Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-[#E6E2DA] flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] font-bold">
              THE FIVE PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E21] mt-1">
              Complete Interview Muscularity
            </h2>
          </div>
          <span className="text-xs font-mono text-[#525866] hidden sm:inline">5 CORE CAPABILITIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-white rounded-3xl p-8 border border-[#E6E2DA] shadow-warm-sm hover:shadow-warm-md hover:border-[#1E3A8A]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#C25E00] italic font-normal">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#F4F0EA] text-[#1E3A8A]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1C1E21] font-normal mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#525866] leading-relaxed mb-6">
                    {pillar.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E6E2DA]">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#1C1E21]">
                        <Check className="w-3.5 h-3.5 text-[#0D5C3A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E6E2DA] flex items-center justify-between text-xs font-semibold text-[#1E3A8A]">
                  <span>Explore Sandbox</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}

          {/* Interactive Live Code Sandbox Widget Card */}
          <div className="bg-[#1C1E21] text-white rounded-3xl p-8 border border-[#1C1E21] shadow-warm-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-400 font-bold">
                  JUDGE0 LIVE RUNNER
                </span>
                <div className="flex gap-1.5 font-mono text-[11px]">
                  {['cpp', 'python', 'go'].map((l) => (
                    <button
                      key={l}
                      onClick={() => { setSelectedLang(l); setTestOutput(null); }}
                      className={`px-2 py-0.5 rounded uppercase cursor-pointer ${
                        selectedLang === l ? 'bg-[#1E3A8A] text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="font-serif text-xl text-white font-normal mb-2">
                Instant Compilation Engine
              </h3>

              <div className="bg-[#111317] rounded-xl p-3.5 font-mono text-[11px] text-slate-300 overflow-x-auto border border-white/10 h-36">
                <pre>{codeSnippets[selectedLang]}</pre>
              </div>

              {testOutput && (
                <div className="mt-3 p-3 bg-white/5 rounded-xl border border-white/10 font-mono text-[10px] space-y-1">
                  <div className="text-emerald-400 font-bold">{testOutput.passed}</div>
                  <div className="text-slate-300">Runtime: {testOutput.time} | Memory: {testOutput.memory}</div>
                  <div className="text-cyan-300">{testOutput.complexity}</div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={handleRunCode}
                disabled={compilerRunning}
                className="px-4 py-2 rounded-lg bg-[#0D5C3A] hover:bg-[#0B4F31] text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{compilerRunning ? 'Compiling...' : 'Run in Sandbox'}</span>
              </button>
              <span className="text-[10px] font-mono text-slate-400">Dockerized Node</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Candidate Pricing Tier */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-bold">
            ACCESSIBLE CANDIDATE TIERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E21] mt-2">
            Practice for Free. Accelerate with Pro.
          </h2>
          <p className="text-sm text-[#525866] mt-2">
            Every candidate gets a free complete mock loop with full analytics. Upgrade only when you want unlimited runs before placement season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Freemium */}
          <div className="bg-white rounded-3xl p-8 border border-[#E6E2DA] shadow-warm-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#525866]">
                STARTER PASS
              </span>
              <h3 className="font-serif text-3xl text-[#1C1E21] mt-1 mb-2">Student Freemium</h3>
              <p className="text-xs text-[#525866] leading-relaxed mb-6">
                Benchmark your readiness before university placement drives.
              </p>

              <div className="font-serif text-4xl text-[#1C1E21] mb-6">
                ₹0 <span className="text-xs font-sans text-[#525866] font-normal">/ forever free</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#E6E2DA] text-xs text-[#1C1E21]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5C3A]" />
                  <span>1 Free Full Mock Loop (OA + DSA + System + Voice)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5C3A]" />
                  <span>Basic Readiness Report with percentile ranking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5C3A]" />
                  <span>50 Judge0 Sandbox Code Executions / month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D5C3A]" />
                  <span>Public cohort placement leaderboards</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenStudentModal}
              className="mt-8 w-full py-3.5 rounded-xl text-xs font-semibold text-[#1C1E21] bg-[#F4F0EA] hover:bg-[#E6E2DA] transition-colors cursor-pointer"
            >
              Start Free Mock Loop
            </button>
          </div>

          {/* Pro Candidate Pass */}
          <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 border border-[#1E3A8A] shadow-warm-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold uppercase tracking-wider">
              MOST POPULAR
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                PLACEMENT RECOVERY BUNDLE
              </span>
              <h3 className="font-serif text-3xl text-white mt-1 mb-2">Pro Candidate Pass</h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-6">
                Unlimited retries, ultra-low latency voice interviewers, and verified recruiter badges.
              </p>

              <div className="font-serif text-4xl text-white mb-6">
                ₹499 <span className="text-xs font-sans text-slate-300 font-normal">/ month (cancel anytime)</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/20 text-xs text-white">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Unlimited Full Mock Hiring Loops with dynamic AI variants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Unlimited high-speed Judge0 sandbox runs (40+ languages)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Dynamic System Design Whiteboard with real-time AI questioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Cryptographically Verified Scorecard for resumes &amp; LinkedIn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Tailored 14-day recovery curriculum targeting weak patterns</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenStudentModal}
              className="mt-8 w-full py-3.5 rounded-xl text-xs font-bold text-[#1E3A8A] bg-white hover:bg-slate-100 transition-colors shadow-warm-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Unlock Pro Candidate Pass</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
