import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal, 
  Send
} from 'lucide-react';

export default function WarmDemoModal({ isOpen, mode, onClose }) {
  if (!isOpen) return null;

  // Student State
  const [studentTrack, setStudentTrack] = useState('swe');
  const [studentLang, setStudentLang] = useState('cpp');
  const [studentSubmitted, setStudentSubmitted] = useState(false);

  // Recruiter State
  const [recruiterData, setRecruiterData] = useState({
    name: '',
    workEmail: '',
    orgName: '',
    cohortSize: '500-2000'
  });
  const [recruiterSubmitted, setRecruiterSubmitted] = useState(false);

  const handleStudentStart = (e) => {
    e.preventDefault();
    setStudentSubmitted(true);
  };

  const handleRecruiterSubmit = (e) => {
    e.preventDefault();
    setRecruiterSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1E21]/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#FAFAF7] border border-[#E6E2DA] p-6 sm:p-8 shadow-warm-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-[#F4F0EA] border border-[#E6E2DA] text-[#525866] hover:text-[#1C1E21] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {mode === 'student' ? (
          <div>
            {!studentSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C25E00] font-bold mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>REHYRE PREPARE • FREE MOCK CALIBRATION</span>
                </div>
                <h3 className="font-serif text-3xl text-[#1C1E21] mb-2">
                  Initialize Your Free Mock Loop
                </h3>
                <p className="text-xs text-[#525866] mb-6 leading-relaxed">
                  Experience the full 5-stage simulation: OA → Judge0 Sandbox → System Design Canvas → AI Voice Interview.
                </p>

                <form onSubmit={handleStudentStart} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#1C1E21] mb-1.5 font-bold">
                      Target Role Track
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'swe', label: 'Backend / SDE' },
                        { id: 'fullstack', label: 'Full-Stack Lead' },
                        { id: 'data', label: 'Data Analyst' },
                        { id: 'devops', label: 'Cloud / DevOps' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setStudentTrack(t.id)}
                          className={`p-3 rounded-xl text-xs font-mono text-left border transition-all cursor-pointer ${
                            studentTrack === t.id
                              ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] font-bold shadow-warm-sm'
                              : 'bg-white text-[#525866] border-[#E6E2DA] hover:bg-[#F4F0EA]'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#1C1E21] mb-1.5 font-bold">
                      Primary Programming Language (Judge0 Sandbox)
                    </label>
                    <select
                      value={studentLang}
                      onChange={(e) => setStudentLang(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E6E2DA] text-xs font-mono text-[#1C1E21] focus:outline-none focus:border-[#1E3A8A]"
                    >
                      <option value="cpp">C++20 (GCC 13.2 -O3)</option>
                      <option value="python">Python 3.12 (CPython)</option>
                      <option value="java">Java 21 (OpenJDK LTS)</option>
                      <option value="go">Go 1.22</option>
                      <option value="ts">TypeScript 5.4 / Node.js</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4F0EA] border border-[#E6E2DA] space-y-1 text-xs text-[#525866]">
                    <div className="flex items-center gap-1.5 text-[#0D5C3A] font-bold font-mono text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Zero-Stakes Calibration Sandbox
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      This free session tests your baseline across algorithmic execution and behavioral depth with zero penalty.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>Launch Sandbox Environment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0D5C3A]/10 text-[#0D5C3A] border border-[#0D5C3A]/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1E21]">Mock Loop Initialized</h3>
                <p className="text-xs text-[#525866] max-w-sm mx-auto leading-relaxed">
                  Allocating isolated Judge0 container for <strong className="text-[#1C1E21]">{studentTrack.toUpperCase()}</strong> in <strong className="text-[#0D5C3A]">{studentLang.toUpperCase()}</strong>.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#E6E2DA] font-mono text-[11px] text-[#525866] max-w-sm mx-auto text-left space-y-1">
                  <div>&gt; Spinning up Judge0 container node... OK</div>
                  <div>&gt; Loading OA problem rubric (42 test cases)... OK</div>
                  <div>&gt; Initializing Staff AI Voice Agent... OK</div>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#1E3A8A] text-white text-xs font-semibold cursor-pointer shadow-warm-sm"
                >
                  Enter Assessment Suite
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {!recruiterSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#1E3A8A] font-bold mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>ENTERPRISE &amp; CAMPUS DEMO</span>
                </div>
                <h3 className="font-serif text-3xl text-[#1C1E21] mb-2">
                  Schedule an Enterprise Walkthrough
                </h3>
                <p className="text-xs text-[#525866] mb-6 leading-relaxed">
                  Discover how Rehyre evaluates 50,000+ candidates simultaneously with zero hallucination and explicit reason codes.
                </p>

                <form onSubmit={handleRecruiterSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-[#1C1E21] mb-1 font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. R. Sharma / Priya Mehta"
                        value={recruiterData.name}
                        onChange={(e) => setRecruiterData({ ...recruiterData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6E2DA] text-xs text-[#1C1E21] placeholder-[#525866]/50 focus:outline-none focus:border-[#1E3A8A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#1C1E21] mb-1 font-bold">
                        Work / University Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="placement@iitb.ac.in"
                        value={recruiterData.workEmail}
                        onChange={(e) => setRecruiterData({ ...recruiterData, workEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6E2DA] text-xs text-[#1C1E21] placeholder-[#525866]/50 focus:outline-none focus:border-[#1E3A8A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#1C1E21] mb-1 font-bold">
                      Organization / University Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BITS Pilani or Razorpay Talent Team"
                      value={recruiterData.orgName}
                      onChange={(e) => setRecruiterData({ ...recruiterData, orgName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6E2DA] text-xs text-[#1C1E21] placeholder-[#525866]/50 focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#1C1E21] mb-1 font-bold">
                      Estimated Candidates per Drive / Semester
                    </label>
                    <select
                      value={recruiterData.cohortSize}
                      onChange={(e) => setRecruiterData({ ...recruiterData, cohortSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E6E2DA] text-xs font-mono text-[#1C1E21] focus:outline-none focus:border-[#1E3A8A]"
                    >
                      <option value="100-500">100 - 500 Candidates</option>
                      <option value="500-2000">500 - 2,000 Candidates</option>
                      <option value="2000-10000">2,000 - 10,000 Candidates</option>
                      <option value="10000+">10,000+ Candidates (Mega Campus Drive)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Walkthrough Request</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0D5C3A]/10 text-[#0D5C3A] border border-[#0D5C3A]/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#1C1E21]">Walkthrough Requested</h3>
                <p className="text-xs text-[#525866] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1C1E21]">{recruiterData.name}</strong>. An enterprise solutions specialist will reach out at <strong className="text-[#1E3A8A]">{recruiterData.workEmail}</strong> with custom sandbox credentials and SLA agreements.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#F4F0EA] hover:bg-[#E6E2DA] text-[#1C1E21] text-xs font-semibold cursor-pointer"
                >
                  Return to Ecosystem
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
