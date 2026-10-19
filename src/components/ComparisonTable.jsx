import React from 'react';
import { 
  Check, 
  X, 
  Minus, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function ComparisonTable({ onOpenStudentModal }) {
  const comparisonData = [
    {
      feature: "Full Interview Simulation",
      subtitle: "End-to-end loop: OA → Judge0 DSA → Whiteboard → AI Voice",
      rehyre: { status: "full", label: "Complete 5-Stage Loop" },
      leetcode: { status: "none", label: "Isolated Code Problems only" },
      pramp: { status: "partial", label: "Peer-to-peer 1:1 only" },
      hackerrank: { status: "partial", label: "Single OA test only" },
      greenhouse: { status: "none", label: "ATS pipeline tracker only" }
    },
    {
      feature: "DSA Code Execution (Judge0)",
      subtitle: "Cloud sandboxes, 40+ langs, strict memory & CPU bounds",
      rehyre: { status: "full", label: "Judge0 Cloud Sandbox (40+ langs)" },
      leetcode: { status: "full", label: "Proprietary Sandbox" },
      pramp: { status: "none", label: "Unvalidated in-browser" },
      hackerrank: { status: "full", label: "Proprietary Runner" },
      greenhouse: { status: "none", label: "No Code Execution" }
    },
    {
      feature: "Explainable AI Resume Screening",
      subtitle: "Evidence-backed reason codes, zero hallucination rejection",
      rehyre: { status: "full", label: "Transparent Reason Codes" },
      leetcode: { status: "none", label: "None" },
      pramp: { status: "none", label: "None" },
      hackerrank: { status: "none", label: "Keywords only" },
      greenhouse: { status: "partial", label: "Basic Boolean Filter" }
    },
    {
      feature: "System Design Interactive Whiteboard",
      subtitle: "Live LLD/HLD canvas with real-time AI architectural probes",
      rehyre: { status: "full", label: "Dynamic AI Architectural Canvas" },
      leetcode: { status: "none", label: "Static Text Articles" },
      pramp: { status: "partial", label: "Manual P2P Drawing" },
      hackerrank: { status: "none", label: "Multiple Choice only" },
      greenhouse: { status: "none", label: "None" }
    },
    {
      feature: "Turnkey Campus Drive Infra",
      subtitle: "50k concurrent candidates, anti-cheat & university exports",
      rehyre: { status: "full", label: "Turnkey 50k Concurrent Drives" },
      leetcode: { status: "none", label: "B2C only" },
      pramp: { status: "none", label: "B2C only" },
      hackerrank: { status: "full", label: "Enterprise Custom Tier" },
      greenhouse: { status: "none", label: "Requires external testing" }
    },
    {
      feature: "Preparation-to-Hire Flywheel",
      subtitle: "Candidate practice scores convert directly into verified recruiter pipelines",
      rehyre: { status: "full", label: "Direct Recruiter Talent Pipeline" },
      leetcode: { status: "none", label: "Disconnected Practice" },
      pramp: { status: "none", label: "Disconnected Practice" },
      hackerrank: { status: "partial", label: "Separate Job Board" },
      greenhouse: { status: "none", label: "Recruiter tool only" }
    }
  ];

  const renderBadge = (item, isRehyre = false) => {
    if (item.status === 'full') {
      return (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold ${
          isRehyre 
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
        }`}>
          <Check className="w-3.5 h-3.5" />
          <span>{item.label}</span>
        </div>
      );
    }
    if (item.status === 'partial') {
      return (
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Minus className="w-3.5 h-3.5" />
          <span>{item.label}</span>
        </div>
      );
    }
    return (
      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-mono bg-rose-500/10 text-rose-400/80 border border-rose-500/20">
        <X className="w-3.5 h-3.5" />
        <span>{item.label}</span>
      </div>
    );
  };

  return (
    <section id="comparison" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>THE ARCHITECTURAL DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Stop Stitching 5 Disconnected Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Candidates practice on LeetCode, mock on Pramp, take tests on HackerRank, and recruiters track in Greenhouse. Rehyre AI unites everything in one seamless flywheel.
          </p>
        </div>

        {/* Responsive Comparison Table Container */}
        <div className="rounded-2xl border border-white/10 bg-[#111827] shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-white/10 bg-slate-950/80">
                  <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Capability / Vector
                  </th>
                  <th className="p-5 text-xs font-mono uppercase tracking-wider bg-indigo-950/40 border-x border-indigo-500/30 text-indigo-300 w-1/4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="font-bold text-white text-sm">Rehyre AI</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/30 text-indigo-300 font-mono">Continuous Loop</span>
                    </div>
                  </th>
                  <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-400">LeetCode</th>
                  <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-400">Pramp</th>
                  <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-400">HackerRank</th>
                  <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-400">Greenhouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    {/* Capability column */}
                    <td className="p-5">
                      <div className="font-bold text-white text-sm">{row.feature}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{row.subtitle}</div>
                    </td>

                    {/* Rehyre AI Column (Standout style) */}
                    <td className="p-5 bg-indigo-950/20 border-x border-indigo-500/30">
                      {renderBadge(row.rehyre, true)}
                    </td>

                    {/* Competitors */}
                    <td className="p-5">{renderBadge(row.leetcode)}</td>
                    <td className="p-5">{renderBadge(row.pramp)}</td>
                    <td className="p-5">{renderBadge(row.hackerrank)}</td>
                    <td className="p-5">{renderBadge(row.greenhouse)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Action Callout */}
          <div className="p-6 bg-slate-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
              <p className="text-xs text-slate-300">
                Are you a campus placement cell or high-growth tech recruiter? Get turnkey assessment pipelines deployed in under 24 hours.
              </p>
            </div>
            <button
              onClick={onOpenStudentModal}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30 shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Test Free Mock Loop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
