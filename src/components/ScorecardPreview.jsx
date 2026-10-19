import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Share2, 
  ExternalLink, 
  Copy, 
  Sparkles, 
  BarChart2, 
  Cpu, 
  ArrowUpRight,
  TrendingUp,
  FileBadge,
  Terminal,
  Check
} from 'lucide-react';

export default function ScorecardPreview() {
  const [selectedCandidate, setSelectedCandidate] = useState(0);
  const [copied, setCopied] = useState(false);

  const candidates = [
    {
      id: 0,
      name: "Arjun Sharma",
      role: "Candidate: Senior Full-Stack / Platform SDE",
      college: "B.Tech Computer Science • Batch of 2026",
      score: 88,
      percentile: "Top 4.2%",
      hash: "0x7f4a9b12e8c45d31",
      meters: [
        { label: "DSA Speed & Accuracy", value: 92, note: "O(N log N) Heap priority queue, 42/42 tests" },
        { label: "System Architecture", value: 81, note: "Distributed caching & write-ahead log consensus" },
        { label: "Communication & STAR", value: 85, note: "High behavioral ownership, zero defensive deflection" },
        { label: "Code Cleanliness & Idiom", value: 94, note: "Modular interfaces, zero cyclomatic complexity traps" }
      ],
      aiFeedback: "Strong space complexity optimization in Dynamic Programming (reduced from O(N²) to O(N)); suggested improvement in database indexing strategies and distributed write idempotency.",
      reasonCodes: [
        { code: "RC-DSA-04", desc: "Optimal Kadane's variant with early pruning", type: "success" },
        { code: "RC-SYS-12", desc: "Cache stampede mitigated via mutex lock", type: "success" },
        { code: "RC-DB-07", desc: "Missing composite index recommendation on user_orders", type: "warning" },
        { code: "RC-HR-02", desc: "Exemplary STAR story on production outage recovery", type: "success" }
      ],
      nextAction: "Recommended for Stage 3 Final Partner Interview"
    },
    {
      id: 1,
      name: "Ananya Rao",
      role: "Candidate: Distributed Systems & Backend SDE",
      college: "M.Tech Data Engineering • Batch of 2026",
      score: 95,
      percentile: "Top 0.8%",
      hash: "0x3e18a9fc44b2091d",
      meters: [
        { label: "DSA Speed & Accuracy", value: 98, note: "Fastest run in cohort, 0.012s execution on Judge0" },
        { label: "System Architecture", value: 94, note: "Flawless Raft consensus state machine modeling" },
        { label: "Communication & STAR", value: 92, note: "Concise, structured architectural trade-off justification" },
        { label: "Code Cleanliness & Idiom", value: 96, note: "Rust & Go memory safety idioms verified" }
      ],
      aiFeedback: "Exceptional algorithmic mastery. Successfully defended asynchronous event-driven architecture against cascading failure during voice interview probe.",
      reasonCodes: [
        { code: "RC-ALG-01", desc: "Linear-time Trie with memory compression", type: "success" },
        { code: "RC-DIST-05", desc: "Clear handling of split-brain network partitions", type: "success" },
        { code: "RC-MET-02", desc: "Proactive Prometheus telemetry design", type: "success" },
        { code: "RC-CODE-09", desc: "Zero memory leaks in Judge0 Valgrind check", type: "success" }
      ],
      nextAction: "Fast-Track Offer Direct Track"
    },
    {
      id: 2,
      name: "Devansh Mehta",
      role: "Candidate: Cloud SRE & DevOps Engineer",
      college: "B.Tech Information Technology • Batch of 2026",
      score: 83,
      percentile: "Top 8.5%",
      hash: "0x89d2c10a4e76b883",
      meters: [
        { label: "DSA Speed & Accuracy", value: 78, note: "Python scripting & automation logic" },
        { label: "System Architecture", value: 89, note: "Multi-region Kubernetes failover & VPC peering" },
        { label: "Communication & STAR", value: 82, note: "Calm incident retrospection under simulated stress" },
        { label: "Code Cleanliness & Idiom", value: 86, note: "Clean Terraform HCL modules & lint compliance" }
      ],
      aiFeedback: "Rapid root cause identification in live Linux sandbox crash dump; advised to sharpen space complexity on streaming logs ingestion.",
      reasonCodes: [
        { code: "RC-K8S-03", desc: "Fixed CrashLoopBackOff in pod spec within 75s", type: "success" },
        { code: "RC-NET-08", desc: "Identified TCP SYN backlog bottleneck", type: "success" },
        { code: "RC-MEM-04", desc: "Unbuffered log buffer can exhaust memory at 200k RPS", type: "warning" },
        { code: "RC-INC-01", desc: "Followed ITIL severity incident protocol precisely", type: "success" }
      ],
      nextAction: "Eligible for SRE Core Operations Track"
    }
  ];

  const current = candidates[selectedCandidate];

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="scorecard" className="py-24 bg-[#0B0F17] relative border-t border-white/5 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CRYPTOGRAPHICALLY VERIFIED READINESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Interactive Verified Scorecard
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A single, auditable artifact that replaces vague interview feedback with verifiable metrics, execution logs, and cryptographic proof of competence.
          </p>

          {/* Candidate Switcher */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {candidates.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setSelectedCandidate(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedCandidate === idx
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900 text-slate-400 border border-white/5 hover:text-white'
                }`}
              >
                {c.name} ({c.score}/100)
              </button>
            ))}
          </div>
        </div>

        {/* Realistic Verified Scorecard UI Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111827] border border-white/10 shadow-2xl overflow-hidden relative border-gradient-indigo">
          
          {/* Card Top Header Banner */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/80 p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-400 p-[2px] shadow-lg">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-bold text-xl text-white font-mono">
                    {current.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-emerald-500 text-white shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{current.name}</h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> VERIFIED TALENT
                  </span>
                </div>
                <div className="text-xs text-indigo-300 font-mono mt-0.5">{current.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{current.college}</div>
              </div>
            </div>

            {/* Scorecard Hero Metric Badge */}
            <div className="flex items-center gap-4 bg-slate-950/80 border border-white/10 rounded-2xl p-4 self-stretch sm:self-auto justify-between sm:justify-start">
              <div className="text-right">
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Overall Readiness</div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 font-mono">
                  {current.score}<span className="text-sm text-slate-400">/100</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-mono font-semibold">{current.percentile} Benchmark</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <FileBadge className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* 4 Skill Breakdown Progress Meters */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-indigo-400" />
                  Multidimensional Competency Breakdown
                </h4>
                <span className="text-xs text-slate-400 font-mono">Calibrated against Tier-1 Product Rubric</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.meters.map((meter, mIdx) => (
                  <div key={mIdx} className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-200 font-semibold">{meter.label}</span>
                      <span className="text-emerald-400 font-bold">{meter.value}%</span>
                    </div>

                    {/* Progress Bar with glowing neon fill */}
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400 transition-all duration-700 shadow-sm shadow-emerald-500/50"
                        style={{ width: `${meter.value}%` }}
                      />
                    </div>

                    <div className="text-[11px] text-slate-400 leading-tight">
                      {meter.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Synthesized Feedback Quote Box */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-5 relative">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                <Sparkles className="w-4 h-4" />
                <span>EXPLAINABLE AI REASONING ENGINE (GPT-4o + JUDGE0 COMPILED TRACE)</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
                &ldquo;{current.aiFeedback}&rdquo;
              </blockquote>

              <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-400">Recruiter Action:</span>
                <span className="font-semibold text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {current.nextAction}
                </span>
              </div>
            </div>

            {/* Granular Reason Codes Grid */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Evidence-Based Reason Codes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.reasonCodes.map((rc, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/70 border border-white/5 font-mono text-xs">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                      rc.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {rc.code}
                    </span>
                    <span className="text-slate-300 text-[11px] leading-tight">{rc.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Card Footer with Cryptographic Hash & Actions */}
          <div className="bg-slate-950 p-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-400 truncate max-w-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px]">Verification Hash:</span>
              <span className="text-slate-200 text-[11px] truncate bg-slate-900 px-2 py-0.5 rounded">{current.hash}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Hash Copied!' : 'Copy Hash'}</span>
              </button>

              <button
                onClick={() => alert(`Viewing live cryptographic audit for ${current.name} (Hash: ${current.hash})`)}
                className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
              >
                <span>Verify on Chain</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
