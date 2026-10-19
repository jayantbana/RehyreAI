import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  FileText,
  Mail
} from 'lucide-react';

export default function WarmFooter({ setActiveTab, onOpenStudentModal, onOpenRecruiterModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#F4F0EA] border-t border-[#E6E2DA] pt-16 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Callout Monograph */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E6E2DA] shadow-warm-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C25E00] font-bold">
                WEEKLY TECHNICAL MONOGRAPH
              </span>
              <h3 className="font-serif text-3xl text-[#1C1E21]">
                Deconstructed Hiring Loops in Your Inbox
              </h3>
              <p className="text-xs sm:text-sm text-[#525866] leading-relaxed max-w-xl">
                Every Tuesday: Authentic production system design case studies, Judge0 corner-case breakdowns, and campus placement benchmarks.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@university.edu or company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-[#FAFAF7] border border-[#E6E2DA] text-xs text-[#1C1E21] placeholder-[#525866]/60 focus:outline-none focus:border-[#1E3A8A] flex-1 font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Join 48k+ Readers</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-xs">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] text-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1E21]">
                Rehyre <span className="italic font-normal text-[#C25E00]">AI</span>
              </span>
            </div>

            <p className="text-[#525866] leading-relaxed max-w-sm">
              The AI-powered technical hiring ecosystem connecting candidate preparation with employer recruitment into one seamless loop.
            </p>

            {/* Warm Status Indicator */}
            <div className="p-3 rounded-xl bg-white border border-[#E6E2DA] inline-flex flex-col gap-1 text-[11px] font-mono shadow-warm-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0D5C3A] animate-pulse"></span>
                <span className="text-[#0D5C3A] font-bold">AI Sandbox Latency: 14ms</span>
                <span className="text-[#E6E2DA]">|</span>
                <span className="text-[#525866]">SOC-2 Compliant</span>
              </div>
              <div className="text-[10px] text-[#525866]">
                Judge0 Compiler Cluster: 40+ Language Runtimes Active
              </div>
            </div>
          </div>

          {/* Col 1 */}
          <div className="space-y-3">
            <div className="font-mono uppercase tracking-wider text-[#1C1E21] font-bold text-xs">
              For Candidates
            </div>
            <ul className="space-y-2 text-[#525866]">
              <li><button onClick={() => setActiveTab('prepare')} className="hover:text-[#1C1E21] transition-colors">Timed Online Assessments</button></li>
              <li><button onClick={() => setActiveTab('prepare')} className="hover:text-[#1C1E21] transition-colors">Judge0 Code Compilers</button></li>
              <li><button onClick={() => setActiveTab('prepare')} className="hover:text-[#1C1E21] transition-colors">System Design Whiteboard</button></li>
              <li><button onClick={() => setActiveTab('prepare')} className="hover:text-[#1C1E21] transition-colors">Staff AI Voice Agent</button></li>
              <li><button onClick={() => setActiveTab('scorecard')} className="hover:text-[#1C1E21] transition-colors">Verified Scorecard</button></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <div className="font-mono uppercase tracking-wider text-[#1C1E21] font-bold text-xs">
              For Enterprise
            </div>
            <ul className="space-y-2 text-[#525866]">
              <li><button onClick={() => setActiveTab('enterprise')} className="hover:text-[#1C1E21] transition-colors">Assessment-as-a-Service</button></li>
              <li><button onClick={() => setActiveTab('enterprise')} className="hover:text-[#1C1E21] transition-colors">Explainable AI ATS</button></li>
              <li><button onClick={() => setActiveTab('enterprise')} className="hover:text-[#1C1E21] transition-colors">Campus Drive Automation</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-[#1C1E21] transition-colors">Book Executive Demo</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-[#1C1E21] transition-colors">ATS Integration APIs</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <div className="font-mono uppercase tracking-wider text-[#1C1E21] font-bold text-xs">
              Monograph &amp; Legal
            </div>
            <ul className="space-y-2 text-[#525866]">
              <li><a href="#" className="hover:text-[#1C1E21] transition-colors">Editorial Publications</a></li>
              <li><a href="#" className="hover:text-[#1C1E21] transition-colors">Algorithmic Audits</a></li>
              <li><a href="#" className="hover:text-[#1C1E21] transition-colors">Privacy &amp; Data Ethics</a></li>
              <li><a href="#" className="hover:text-[#1C1E21] transition-colors">Security Whitepaper</a></li>
              <li><a href="#" className="hover:text-[#1C1E21] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rule */}
        <div className="pt-8 border-t border-[#E6E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525866] font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#0D5C3A]">
              <ShieldCheck className="w-3.5 h-3.5" />
              SOC-2 Type II Certified
            </span>
            <span>•</span>
            <span>ISO 27001 Compliant</span>
            <span>•</span>
            <span>GDPR Ready</span>
          </div>

          <div>
            © 2026 Rehyre AI Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
