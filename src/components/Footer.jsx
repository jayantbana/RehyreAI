import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Check,
  Activity,
  Layers,
  GraduationCap,
  Building2,
  Server
} from 'lucide-react';

export default function Footer({ onOpenStudentModal, onOpenRecruiterModal }) {
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
    <footer className="bg-[#080B11] border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter & Ecosystem Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/20 p-8 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>WEEKLY SYSTEM DESIGN & INTERVIEW BLUEPRINTS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get real Tier-1 company hiring loop questions in your inbox
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                Every Tuesday: Deconstructed production system design challenges, Judge0 edge-case teardowns, and campus recruitment trends.
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
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 flex-1 font-mono"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/30 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Join 48,000+</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4 Column Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-[#0B0F17] rounded-[7px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                Rehyre<span className="text-indigo-400">AI</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              The AI-powered technical hiring ecosystem connecting candidate preparation with employer recruitment into one seamless loop.
            </p>

            {/* Live System Status Indicator Badge */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 inline-flex flex-col gap-1.5 font-mono text-[11px]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-bold">AI Engine Online</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-300">Judge0 Sandbox Active</span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between gap-4">
                <span>Compiler Latency: 18ms</span>
                <span className="text-emerald-400">99.98% SLA</span>
              </div>
            </div>
          </div>

          {/* Column 1: For Candidates */}
          <div className="space-y-3">
            <div className="font-mono uppercase tracking-wider text-white font-bold text-xs flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Candidates</span>
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pipeline" className="hover:text-white transition-colors">Free Full Mock Loop</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Judge0 DSA Practice</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">System Design Whiteboard</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Virtual AI Voice Agent</a></li>
              <li><a href="#scorecard" className="hover:text-white transition-colors">Verified Scorecard Badge</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pro Candidate Pass</a></li>
            </ul>
          </div>

          {/* Column 2: For Recruiters & Enterprise */}
          <div className="space-y-3">
            <div className="font-mono uppercase tracking-wider text-white font-bold text-xs flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Recruiters</span>
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">Assessment-as-a-Service</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">Explainable Resume ATS</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">JD-to-Pipeline Generator</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">Anti-Cheat Proctoring</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">ATS Integrations (Greenhouse)</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">Request Enterprise Demo</button></li>
            </ul>
          </div>

          {/* Column 3: For Universities & Colleges */}
          <div className="space-y-3">
            <div className="font-mono uppercase tracking-wider text-white font-bold text-xs flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>Universities</span>
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">Campus Placement Drives</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">50k Concurrency Sandbox</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Batch Leaderboards</a></li>
              <li><a href="#scorecard" className="hover:text-white transition-colors">Student Readiness Audits</a></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">Placement Officer Portal</button></li>
              <li><button onClick={onOpenRecruiterModal} className="hover:text-white transition-colors text-left">Accreditation Exports</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Compliance & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              SOC-2 Type II Certified
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              ISO 27001 Compliant
            </span>
            <span className="text-slate-700">|</span>
            <span>GDPR Ready</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Audit</a>
            <span className="text-slate-600">© 2026 Rehyre AI Inc.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
