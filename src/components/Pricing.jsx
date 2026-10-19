import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  GraduationCap, 
  Zap, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Clock
} from 'lucide-react';

export default function Pricing({ onOpenStudentModal, onOpenRecruiterModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'semester'

  const plans = [
    {
      name: "Student Freemium",
      badge: "Forever Free for Students",
      tagline: "Test the waters and benchmark your basic readiness before placements.",
      price: "₹0",
      period: "forever",
      cta: "Practice Free Mock Loop",
      isPrimary: false,
      onAction: onOpenStudentModal,
      features: [
        "1 Free Full Mock Loop (OA + DSA + System Design + Voice)",
        "Basic Readiness Report with percentile ranking",
        "50 Judge0 Sandbox Code Executions / month",
        "Community placement leaderboard access",
        "Standard latency AI voice interviewer"
      ]
    },
    {
      name: "Pro Candidate Pass",
      badge: "Most Popular for Placement Prep",
      tagline: "Unlimited loop iterations, deep AI telemetry, and verified recruiter badge.",
      price: billingCycle === 'monthly' ? "₹499" : "₹999",
      period: billingCycle === 'monthly' ? "/ month" : "/ entire semester (3 mo)",
      savings: billingCycle === 'semester' ? "Save 33% with Semester Pass" : null,
      cta: "Unlock Pro Candidate Pass",
      isPrimary: true,
      onAction: onOpenStudentModal,
      features: [
        "Unlimited Full Mock Hiring Loops with dynamic AI variants",
        "Unlimited high-speed Judge0 sandbox runs (40+ languages)",
        "Interactive System Design Whiteboard with real-time AI questioning",
        "Ultra-low latency AI Voice Interviewer (Staff Engineer Persona)",
        "Cryptographically Verified Scorecard for LinkedIn & Resumes",
        "Tailored 14-day Recovery Plan based on exact reason codes",
        "Priority routing to partner recruiters & fast-track queues"
      ]
    },
    {
      name: "Placement Cells & Enterprise",
      badge: "Turnkey Campus & B2B",
      tagline: "Conduct high-stakes university drives and automate candidate screening.",
      price: "Custom",
      period: "based on cohort volume",
      cta: "Request Campus / Enterprise Demo",
      isPrimary: false,
      onAction: onOpenRecruiterModal,
      features: [
        "Assessment-as-a-Service: Turn any JD into evaluation pipelines instantly",
        "Up to 50,000 concurrent test-takers with zero latency degradation",
        "Explainable AI Screening with auditable evidence & rejection codes",
        "AI-assisted anti-cheat proctoring (Tab switch, audio & dual-cam heuristics)",
        "Cohort analytics & university placement cell dashboards",
        "Direct ATS integrations (Greenhouse, Lever, Workday, SAP)",
        "Dedicated Enterprise Account Manager & 99.98% SLA"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0B0F17] relative border-t border-white/5 tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT, ACCESSIBLE PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Plans for Individual Aspirants &amp; Enterprise Drives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Start for free to benchmark your skills, or unlock unlimited mock loops and high-throughput campus drive infrastructure.
          </p>

          {/* Billing Toggle for Candidates */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-slate-900 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('semester')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'semester'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Semester Pass</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded-full">
                -33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                plan.isPrimary
                  ? 'bg-gradient-to-b from-[#151D2C] to-[#0E1624] border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2'
                  : 'bg-[#111827]/80 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Ribbon */}
              {plan.isPrimary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {!plan.isPrimary && (
                  <div className="inline-block text-[11px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20 mb-3">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">{plan.tagline}</p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-mono">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="text-xs text-emerald-400 font-mono font-semibold mt-1">
                      {plan.savings}
                    </div>
                  )}
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s Included:
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={plan.onAction}
                className={`w-full py-4 px-6 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPrimary
                    ? 'bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white shadow-xl shadow-indigo-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-white border border-white/10 hover:border-indigo-500/40'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Money-Back & Placement Guarantee Note */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            7-Day No-Questions-Asked Refund Guarantee on Pro Pass
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            Instant Activation & 24/7 Judge0 Compiler Sandbox Access
          </span>
        </div>

      </div>
    </section>
  );
}
