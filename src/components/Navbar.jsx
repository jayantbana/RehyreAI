import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Terminal, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Menu, 
  X,
  ShieldCheck,
  GraduationCap,
  Building2,
  Code2
} from 'lucide-react';

export default function Navbar({ onOpenStudentModal, onOpenRecruiterModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/50 transition-all">
              <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0B0F17] animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Rehyre<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">AI</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  v2.4
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">PREPARE ⇄ HIRE LOOP</span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#111827]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            <a href="#pipeline" className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              Pipeline Builder
            </a>
            <a href="#solutions" className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              Dual Ecosystem
            </a>
            <a href="#architecture" className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              Architecture
            </a>
            <a href="#scorecard" className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5">
              <span>Verified Scorecard</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </a>
            <a href="#comparison" className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              Compare
            </a>
            <a href="#pricing" className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors">
              Pricing
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Judge0 Cluster: 14ms</span>
            </div>

            <button 
              onClick={onOpenRecruiterModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-all flex items-center gap-1.5"
            >
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Campus / B2B</span>
            </button>

            <button 
              onClick={onOpenStudentModal}
              className="relative group overflow-hidden px-4 py-2 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all shadow-md shadow-indigo-500/25 flex items-center gap-2"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Mock Loop Free</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-2">
            <a 
              href="#pipeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Pipeline Builder Preview
            </a>
            <a 
              href="#solutions" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Dual Target Audience
            </a>
            <a 
              href="#architecture" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Componentized Architecture
            </a>
            <a 
              href="#scorecard" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Verified Candidate Scorecard
            </a>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Competitive Differentiation
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Plans & Pricing
            </a>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenStudentModal(); }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              <GraduationCap className="w-4 h-4" />
              Practice Free Mock Loop
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenRecruiterModal(); }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-white/10 rounded-lg flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-indigo-400" />
              Request Campus / B2B Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
