import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Building2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function WarmNavbar({ activeTab, setActiveTab, onOpenStudentModal, onOpenRecruiterModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'prepare', label: 'For Candidates' },
    { id: 'enterprise', label: 'For Enterprise' },
    { id: 'scorecard', label: 'Verified Scorecard' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#E6E2DA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Editorial Insignia */}
          <button 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            {/* Custom SVG Monogram Seal */}
            <div className="relative w-10 h-10 rounded-lg bg-[#1E3A8A] text-[#FAFAF7] flex items-center justify-center shadow-warm-sm group-hover:bg-[#172554] transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C25E00] rounded-full ring-2 ring-[#FAFAF7]"></div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1E21] leading-none">
                Rehyre <span className="italic font-normal text-[#C25E00]">AI</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#525866] mt-1">
                The Technical Hiring Monograph
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F4F0EA] p-1.5 rounded-full border border-[#E6E2DA]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#1C1E21] shadow-warm-sm border border-[#E6E2DA]/80'
                      : 'text-[#525866] hover:text-[#1C1E21] hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenStudentModal}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#1C1E21] bg-white hover:bg-[#F4F0EA] border border-[#E6E2DA] shadow-warm-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#C25E00]" />
              <span>Practice Mock</span>
            </button>

            <button
              onClick={onOpenRecruiterModal}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Enterprise Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#E6E2DA] bg-white text-[#1C1E21]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF7] border-b border-[#E6E2DA] px-4 pt-3 pb-6 space-y-3 shadow-warm-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#F4F0EA] text-[#1E3A8A] font-bold'
                    : 'text-[#525866] hover:bg-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E6E2DA] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStudentModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#1C1E21] bg-white border border-[#E6E2DA] rounded-lg"
            >
              Practice Free Mock Loop
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#1E3A8A] rounded-lg"
            >
              Book Enterprise Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
