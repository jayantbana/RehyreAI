import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  FileBadge, 
  BarChart3, 
  Clock, 
  Calendar,
  Share2,
  AlertCircle
} from 'lucide-react';

export default function ScorecardView() {
  const [selectedCandidate, setSelectedCandidate] = useState(0);
  const [copied, setCopied] = useState(false);

  const candidates = [
    {
      id: 0,
      name: "Arjun Sharma",
      role: "Senior Backend & Platform Engineer",
      institution: "B.Tech Computer Science • Batch of 2026",
      score: 88,
      percentile: "Top 4.2%",
      verificationHash: "0x7f4a9b12e8c45d31b27914a87265fe09a1c84",
      issuedAt: "October 18, 2026",
      meters: [
        { label: "DSA Execution & Speed", value: 92, note: "42/42 testcases passed in C++20. O(N log N) Heap queue." },
        { label: "System Design & Architecture", value: 81, note: "Distributed caching with Raft log replication and sharded DB." },
        { label: "Communication & STAR Behavioral", value: 85, note: "Strong ownership, zero defensive deflection on outage retros." },
        { label: "Code Idiom & Maintainability", value: 94, note: "Zero memory leaks in Judge0 sandbox; clean modular separation." }
      ],
      aiSynthesis: "Arjun demonstrated remarkable spatial and asymptotic efficiency in algorithmic dynamic programming problems, reducing space overhead from O(N²) to O(N). During the system design oral interrogation, he clearly articulated trade-offs around split-brain network partitions. Recommended next step: Fast-track to partner onsite.",
      reasonCodes: [
        { code: "RC-DSA-04", label: "Optimal Kadane's Variant", detail: "Early pruning loop detected; 0.024s execution time.", type: "pass" },
        { code: "RC-SYS-12", label: "Cache Invalidation Handled", detail: "Mitigated cache stampede via mutex lease timeouts.", type: "pass" },
        { code: "RC-DB-07", label: "Indexing Suggestion", detail: "Advised to utilize composite B-Trees for multi-column range scans.", type: "delta" },
        { code: "RC-HR-02", label: "STAR Ownership Verified", detail: "Directly explained root-cause isolation in previous production outage.", type: "pass" }
      ]
    },
    {
      id: 1,
      name: "Ananya Rao",
      role: "Distributed Systems & Infrastructure SDE",
      institution: "M.Tech Data Engineering • Batch of 2026",
      score: 95,
      percentile: "Top 0.8%",
      verificationHash: "0x3e18a9fc44b2091db87114c092a41d77b58e2",
      issuedAt: "October 17, 2026",
      meters: [
        { label: "DSA Execution & Speed", value: 98, note: "Fastest execution in batch (0.011s) in Go 1.22." },
        { label: "System Design & Architecture", value: 94, note: "Flawless state machine replication & quorum consensus model." },
        { label: "Communication & STAR Behavioral", value: 92, note: "Succinct architectural trade-off justification under probe." },
        { label: "Code Idiom & Maintainability", value: 96, note: "Exceptional memory-safe Go idioms with zero race conditions." }
      ],
      aiSynthesis: "Ananya is an exceptional tier candidate ranking in the 99th percentile across algorithmic execution and distributed resilience. Handled live staff engineer voice interruption with composure and defended asynchronous event bus architectures flawlessly.",
      reasonCodes: [
        { code: "RC-ALG-01", label: "Linear-Time Compressed Trie", detail: "Flawless bitwise traversal with zero runtime allocations.", type: "pass" },
        { code: "RC-DIST-05", label: "Quorum Split-Brain Mitigation", detail: "Leveraged Raft leader leases to guarantee strict linearizability.", type: "pass" },
        { code: "RC-MET-02", label: "Prometheus Telemetry Topology", detail: "Instrumented RED metrics directly in distributed microservices.", type: "pass" },
        { code: "RC-CONC-08", label: "Deadlock-Free Lock Ordering", detail: "Enforced strict hierarchical mutex acquisition hierarchy.", type: "pass" }
      ]
    },
    {
      id: 2,
      name: "Devansh Mehta",
      role: "Site Reliability & Cloud Infrastructure Lead",
      institution: "B.Tech Information Technology • Batch of 2026",
      score: 83,
      percentile: "Top 8.5%",
      verificationHash: "0x89d2c10a4e76b883c74992b115e619fa00c43",
      issuedAt: "October 16, 2026",
      meters: [
        { label: "DSA Execution & Speed", value: 78, note: "Python scripting automation & queue processing logic." },
        { label: "System Design & Architecture", value: 89, note: "Multi-region Kubernetes ingress failover with GeoDNS." },
        { label: "Communication & STAR Behavioral", value: 82, note: "Calm, structured incident retrospection under simulated pressure." },
        { label: "Code Idiom & Maintainability", value: 86, note: "Clean Terraform HCL modules & lint compliance." }
      ],
      aiSynthesis: "Rapid root cause identification in live Linux sandbox crash dump; diagnosed container CrashLoopBackOff within 75 seconds. Minor recommendation: Polish streaming log backpressure logic for bursts over 200k RPS.",
      reasonCodes: [
        { code: "RC-K8S-03", label: "CrashLoopBackOff Remediated", detail: "Identified liveness probe misconfiguration in pod spec in 75s.", type: "pass" },
        { code: "RC-NET-08", label: "TCP SYN Backlog Identified", detail: "Diagnosed dropouts in kernel socket buffer queue.", type: "pass" },
        { code: "RC-MEM-04", label: "Log Buffer Allocation Delta", detail: "Advised to add circular buffer backpressure under extreme flood.", type: "delta" },
        { code: "RC-INC-01", label: "ITIL Severity Alignment", detail: "Strict adherence to incident severity categorization guidelines.", type: "pass" }
      ]
    }
  ];

  const current = candidates[selectedCandidate];

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard?.writeText(current.verificationHash);
    setTimeout(() => setCopied(false), 2000);
  };

  // SVG Gauge calculations
  // Radius = 60, circumference = 2 * PI * 60 = 376.99
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (current.score / 100) * circumference;

  return (
    <div className="space-y-16 py-12 md:py-20 animate-fadeIn">
      
      {/* 1. Header & Candidate Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0D5C3A] font-bold">
            THE AUTHENTICATED TALENT PASSPORT
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-[#1C1E21] mt-2 leading-tight">
            Verified Readiness Scorecard
          </h1>
          <p className="mt-4 text-base text-[#525866] leading-relaxed">
            Replace opaque resume claims with an auditable, cryptographically verifiable record of genuine problem-solving, architectural acumen, and communication velocity.
          </p>

          {/* Candidate Switcher Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {candidates.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setSelectedCandidate(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCandidate === idx
                    ? 'bg-[#1E3A8A] text-white shadow-warm-sm'
                    : 'bg-white text-[#525866] border border-[#E6E2DA] hover:bg-[#F4F0EA]'
                }`}
              >
                {c.name} ({c.score}/100)
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Full Verified Scorecard Sheet (Editorial Paper Monograph) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E6E2DA] shadow-warm-lg overflow-hidden">
          
          {/* Certificate Top Ribbon */}
          <div className="bg-[#F4F0EA] px-8 py-5 border-b border-[#E6E2DA] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#525866]">
              <span className="w-2 h-2 rounded-full bg-[#0D5C3A]"></span>
              <span>CERTIFICATE STATUS: <strong className="text-[#0D5C3A]">AUTHENTICATED &amp; SEALED</strong></span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-[#525866]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {current.issuedAt}
              </span>
              <span>SHA-256 SIGNED</span>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-10">
            
            {/* Header: Candidate Identity & SVG Vector Gauge Ring */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-8 border-b border-[#E6E2DA]">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0D5C3A]/10 text-[#0D5C3A] text-[11px] font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>REHYRE VERIFIED TALENT</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E21] font-bold">
                  {current.name}
                </h2>
                <div className="text-sm font-semibold text-[#1E3A8A]">
                  {current.role}
                </div>
                <div className="text-xs text-[#525866]">
                  {current.institution}
                </div>
              </div>

              {/* Custom Vector Gauge Ring SVG */}
              <div className="flex items-center gap-5 bg-[#FAFAF7] p-5 rounded-2xl border border-[#E6E2DA] self-stretch sm:self-auto justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
                    {/* Background Track */}
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="none"
                      stroke="#E6E2DA"
                      strokeWidth="8"
                    />
                    {/* Animated Score Arc */}
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="none"
                      stroke="#0D5C3A"
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-serif text-3xl font-bold text-[#1C1E21] leading-none">
                      {current.score}
                    </span>
                    <span className="text-[10px] text-[#525866] font-mono mt-0.5">/ 100</span>
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#525866]">Readiness Score</div>
                  <div className="font-serif text-2xl text-[#0D5C3A] font-bold">{current.percentile}</div>
                  <div className="text-[11px] text-[#525866] mt-0.5">Cohort Benchmark</div>
                </div>
              </div>
            </div>

            {/* Competency Breakdown Meters */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl text-[#1C1E21]">
                  Competency Vector Breakdown
                </h3>
                <span className="text-xs font-mono text-[#525866]">Calibrated to Tier-1 Rubric</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.meters.map((meter, mIdx) => (
                  <div key={mIdx} className="bg-[#FAFAF7] p-4 rounded-2xl border border-[#E6E2DA] space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#1C1E21]">{meter.label}</span>
                      <span className="font-mono text-[#0D5C3A] font-bold">{meter.value}%</span>
                    </div>

                    <div className="h-2 w-full bg-[#E6E2DA] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-[#0D5C3A] transition-all duration-700"
                        style={{ width: `${meter.value}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-[#525866] leading-tight">
                      {meter.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Synthesized Executive Feedback */}
            <div className="bg-[#F4F0EA] p-6 rounded-2xl border border-[#E6E2DA] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#1E3A8A] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>EXPLAINABLE EVALUATION SYNTHESIS</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1C1E21] leading-relaxed italic font-serif">
                &ldquo;{current.aiSynthesis}&rdquo;
              </p>
            </div>

            {/* Evidence-Based Reason Codes */}
            <div>
              <h3 className="font-serif text-2xl text-[#1C1E21] mb-4">
                Audited Reason Codes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.reasonCodes.map((rc, rIdx) => (
                  <div key={rIdx} className="p-3.5 rounded-xl bg-white border border-[#E6E2DA] shadow-warm-sm flex items-start gap-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                      rc.type === 'pass' 
                        ? 'bg-[#0D5C3A]/10 text-[#0D5C3A] border border-[#0D5C3A]/20'
                        : 'bg-[#C25E00]/10 text-[#C25E00] border border-[#C25E00]/20'
                    }`}>
                      {rc.code}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#1C1E21]">{rc.label}</div>
                      <div className="text-[11px] text-[#525866] mt-0.5">{rc.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Certificate Footer with SHA-256 Hash and Copy */}
          <div className="bg-[#FAFAF7] px-8 py-5 border-t border-[#E6E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#525866] truncate max-w-sm">
              <ShieldCheck className="w-4 h-4 text-[#0D5C3A] shrink-0" />
              <span className="text-[11px]">Audit Hash:</span>
              <span className="text-[#1C1E21] font-bold truncate bg-white px-2 py-0.5 rounded border border-[#E6E2DA]">
                {current.verificationHash}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#F4F0EA] text-[#1C1E21] border border-[#E6E2DA] shadow-warm-sm flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#0D5C3A]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Hash Copied!' : 'Copy Hash'}</span>
              </button>

              <button
                onClick={() => alert(`Cryptographic verification proof confirmed for ${current.name} on the Rehyre public registry.`)}
                className="px-4 py-1.5 rounded-lg bg-[#1E3A8A] hover:bg-[#172554] text-white font-semibold flex items-center gap-1.5 cursor-pointer shadow-warm-sm transition-colors"
              >
                <span>Verify on Chain</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
