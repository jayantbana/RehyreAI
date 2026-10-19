import React, { useState } from 'react';
import { 
  Building2, 
  FileCheck2, 
  Filter, 
  School, 
  ArrowRight, 
  Check, 
  DollarSign, 
  Clock, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Sliders,
  TrendingDown,
  Terminal,
  Cpu
} from 'lucide-react';

export default function EnterpriseView({ onOpenRecruiterModal }) {
  // B2B ROI Calculator State
  const [candidatesPerMonth, setCandidatesPerMonth] = useState(250);
  const [engineerHourlyRate, setEngineerHourlyRate] = useState(65); // $65/hr

  // Calculations:
  // Without Rehyre: 3.5 engineer hours spent per candidate (resume review + OA review + 2 tech interviews)
  // With Rehyre: 0.5 hours spent (only final partner round)
  // Hours saved = 3 hours per candidate
  const hoursSaved = candidatesPerMonth * 3;
  const costSavings = hoursSaved * engineerHourlyRate;

  const sampleReasonCodes = [
    { code: "RC-DSA-04", label: "Time Complexity Suboptimal", detail: "Quadratic O(N²) array traversal when Hash Map O(N) was explicitly expected.", type: "reject" },
    { code: "RC-SYS-09", label: "Cache Invalidation Race", detail: "Architecture lacked write-through mutex lock, exposing database to stampede.", type: "reject" },
    { code: "RC-SQL-02", label: "Optimal Window Aggregation", detail: "Successfully executed dense_rank() over partition without memory spill.", type: "pass" },
    { code: "RC-HR-01", label: "Exemplary Ownership (STAR)", detail: "Clearly articulated blast radius mitigation during production outage scenario.", type: "pass" }
  ];

  return (
    <div className="space-y-24 py-12 md:py-20 animate-fadeIn">
      
      {/* 1. Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] font-bold">
            FOR ENGINEERING LEADERS &amp; CAMPUS PLACEMENT CELLS
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#1C1E21] mt-3 leading-[1.08]">
            Stop wasting engineering hours on candidate screening.
          </h1>
          <p className="mt-6 text-lg text-[#525866] leading-relaxed">
            Senior software engineers spend 20+ hours every month conducting repetitive first-round screens. Rehyre AI automates rigorous, explainable technical loops so your engineers only interview the top 5% finalists.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenRecruiterModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Schedule Enterprise Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-[#525866] font-mono">
              SOC-2 Type II Certified • GDPR Compliant
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Capabilities Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 pb-4 border-b border-[#E6E2DA] flex items-end justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-bold">
              THE ENTERPRISE SUITE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E21] mt-1">
              Screening Engineered for High Volume
            </h2>
          </div>
          <span className="text-xs font-mono text-[#525866] hidden sm:inline">3 CORE PLATFORM VECTORS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Assessment-as-a-Service */}
          <div className="bg-white rounded-3xl p-8 border border-[#E6E2DA] shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-[#F4F0EA] text-[#1E3A8A] w-fit mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#1E3A8A] font-bold">
                JD-TO-PIPELINE COMPILER
              </span>
              <h3 className="font-serif text-2xl text-[#1C1E21] font-normal mt-1 mb-3">
                Assessment-as-a-Service
              </h3>
              <p className="text-xs text-[#525866] leading-relaxed mb-6">
                Paste any job description. Rehyre automatically generates calibrated timed OAs, multi-language Judge0 coding problems, and AI voice interviewer rubrics tailored to that exact role in under 45 seconds.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E2DA] space-y-2 text-xs font-mono text-[#1C1E21]">
              <div className="flex justify-between">
                <span className="text-[#525866]">Pipeline Setup:</span>
                <span className="font-bold text-[#0D5C3A]">&lt; 45 Seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#525866]">Question Leakage:</span>
                <span className="font-bold text-[#1E3A8A]">0% (Dynamic Variants)</span>
              </div>
            </div>
          </div>

          {/* 2. Explainable AI Screening */}
          <div className="bg-white rounded-3xl p-8 border border-[#E6E2DA] shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-[#F4F0EA] text-[#C25E00] w-fit mb-6">
                <Filter className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C25E00] font-bold">
                EVIDENCE-BASED DECISION LOGS
              </span>
              <h3 className="font-serif text-2xl text-[#1C1E21] font-normal mt-1 mb-3">
                Explainable AI Screening
              </h3>
              <p className="text-xs text-[#525866] leading-relaxed mb-6">
                Eliminate opaque ATS black boxes. Rehyre provides auditable rejection and match reason codes backed by candidate test outputs, Git commits, and behavioral STAR transcripts.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E2DA] space-y-2 text-xs font-mono text-[#1C1E21]">
              <div className="flex justify-between">
                <span className="text-[#525866]">Audit Explainability:</span>
                <span className="font-bold text-[#0D5C3A]">100% Citable Evidence</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#525866]">Candidate Inquiries:</span>
                <span className="font-bold text-[#1E3A8A]">Zero Blind Disputes</span>
              </div>
            </div>
          </div>

          {/* 3. Campus Drive Automation */}
          <div className="bg-white rounded-3xl p-8 border border-[#E6E2DA] shadow-warm-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-[#F4F0EA] text-[#0D5C3A] w-fit mb-6">
                <School className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#0D5C3A] font-bold">
                HIGH-CONCURRENCY INFRASTRUCTURE
              </span>
              <h3 className="font-serif text-2xl text-[#1C1E21] font-normal mt-1 mb-3">
                Campus Drive Automation
              </h3>
              <p className="text-xs text-[#525866] leading-relaxed mb-6">
                Run massive university placement drives with 50,000+ simultaneous test-takers. Includes tab-switching heuristics, dual-camera proctoring, and instant placement cell CSV/API exports.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E2DA] space-y-2 text-xs font-mono text-[#1C1E21]">
              <div className="flex justify-between">
                <span className="text-[#525866]">Concurrency Limit:</span>
                <span className="font-bold text-[#0D5C3A]">50,000+ Test Takers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#525866]">Scorecard Turnaround:</span>
                <span className="font-bold text-[#1E3A8A]">Instantaneous</span>
              </div>
            </div>
          </div>

        </div>

        {/* Explainable Reason Codes Preview Showcase */}
        <div className="mt-10 bg-[#FAFAF7] rounded-3xl border border-[#E6E2DA] p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#525866] font-bold">
              AUDITABLE REASON CODES IN ACTION
            </span>
            <span className="text-xs font-mono text-[#0D5C3A]">Zero Hallucination Guarantee</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleReasonCodes.map((rc, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-[#E6E2DA] shadow-warm-sm flex items-start gap-3">
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold shrink-0 mt-0.5 ${
                  rc.type === 'pass' 
                    ? 'bg-[#0D5C3A]/10 text-[#0D5C3A] border border-[#0D5C3A]/20' 
                    : 'bg-[#C25E00]/10 text-[#C25E00] border border-[#C25E00]/20'
                }`}>
                  {rc.code}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[#1C1E21]">{rc.label}</h4>
                  <p className="text-xs text-[#525866] mt-0.5 leading-relaxed">{rc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive B2B ROI Calculator Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E3A8A] text-white rounded-3xl p-8 sm:p-14 shadow-warm-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
                  EXECUTIVE ROI CALCULATOR
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                  Quantify Your Engineering Bandwidth Saved
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  Adjust your monthly candidate intake volume and engineering hourly cost to compute immediate monthly savings.
                </p>
              </div>

              {/* Slider 1: Candidates per Month */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Candidates Evaluated / Month</span>
                  <span className="text-white font-bold text-sm">{candidatesPerMonth.toLocaleString()} candidates</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={candidatesPerMonth}
                  onChange={(e) => setCandidatesPerMonth(Number(e.target.value))}
                  className="w-full accent-white h-2 bg-white/20 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-300 font-mono">
                  <span>50</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>2,000+</span>
                </div>
              </div>

              {/* Slider 2: Engineering Hourly Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Blended Staff Engineer Cost / Hour</span>
                  <span className="text-white font-bold text-sm">${engineerHourlyRate} / hr</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={engineerHourlyRate}
                  onChange={(e) => setEngineerHourlyRate(Number(e.target.value))}
                  className="w-full accent-white h-2 bg-white/20 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-300 font-mono">
                  <span>$30/hr</span>
                  <span>$75/hr</span>
                  <span>$150/hr</span>
                </div>
              </div>
            </div>

            {/* Projected Savings Card */}
            <div className="lg:col-span-5 bg-white text-[#1C1E21] rounded-2xl p-8 border border-white/20 shadow-warm-lg space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C25E00] font-bold">
                MONTHLY PROJECTED EFFICIENCY
              </span>

              <div className="space-y-1">
                <div className="text-xs text-[#525866] font-mono uppercase">Engineering Hours Saved</div>
                <div className="font-serif text-5xl text-[#1E3A8A]">
                  {hoursSaved.toLocaleString()} <span className="text-lg font-sans text-[#525866] font-normal">hrs / mo</span>
                </div>
              </div>

              <div className="space-y-1 pt-4 border-t border-[#E6E2DA]">
                <div className="text-xs text-[#525866] font-mono uppercase">Estimated Financial Recovery</div>
                <div className="font-serif text-5xl text-[#0D5C3A]">
                  ${costSavings.toLocaleString()} <span className="text-lg font-sans text-[#525866] font-normal">/ mo</span>
                </div>
              </div>

              <button
                onClick={onOpenRecruiterModal}
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Request Custom Enterprise Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
