import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layers, 
  Mic2, 
  ShieldCheck,
  Send
} from 'lucide-react';

export default function DemoModal({ isOpen, mode, onClose }) {
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
    setTimeout(() => {
      // simulate session setup
    }, 1500);
  };

  const handleRecruiterSubmit = (e) => {
    e.preventDefault();
    setRecruiterSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#111827] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {mode === 'student' ? (
          <div>
            {!studentSubmitted ? (
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-indigo-400 mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>REHYRE PREPARE • FREE MOCK LOOP</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Initialize Your 1st Mock Hiring Loop
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Experience the full 5-stage simulation: OA → Judge0 Sandbox → System Design Canvas → AI Voice Interview.
                </p>

                <form onSubmit={handleStudentStart} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
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
                          className={`p-2.5 rounded-xl text-xs font-mono font-medium border text-left transition-all ${
                            studentTrack === t.id
                              ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold'
                              : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                      Primary Programming Language (Judge0 Sandbox)
                    </label>
                    <select
                      value={studentLang}
                      onChange={(e) => setStudentLang(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="cpp">C++20 (GCC 13.2 -O3)</option>
                      <option value="python">Python 3.12 (CPython)</option>
                      <option value="java">Java 21 (OpenJDK LTS)</option>
                      <option value="go">Go 1.22</option>
                      <option value="ts">TypeScript 5.4 / Node.js</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 space-y-1.5 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Zero-Stakes Calibration Sandbox
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      Your test session will generate an unverified draft scorecard that you can upgrade into a cryptographically verified badge once completed.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>Launch Sandbox Simulation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">Mock Loop Initialized!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Allocating Judge0 Docker container for <span className="text-indigo-400 font-bold">{studentTrack.toUpperCase()}</span> in <span className="text-emerald-400 font-bold">{studentLang.toUpperCase()}</span>.
                </p>
                <div className="p-3 bg-slate-900 rounded-xl font-mono text-[11px] text-slate-400 max-w-sm mx-auto text-left space-y-1">
                  <div>&gt; Spinning up Judge0 worker sandbox... OK</div>
                  <div>&gt; Loading OA test harness (42 test cases)... OK</div>
                  <div>&gt; Initializing Staff AI Voice Agent... OK</div>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-all cursor-pointer"
                >
                  Enter Assessment Room
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {!recruiterSubmitted ? (
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>CAMPUS RECRUITMENT &amp; B2B DEMO</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Schedule an Enterprise / Campus Walkthrough
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  See how Rehyre handles 50k candidate drives, JD-to-pipeline compilation, and zero-hallucination resume screening.
                </p>

                <form onSubmit={handleRecruiterSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. R. Sharma / Priya Mehta"
                        value={recruiterData.name}
                        onChange={(e) => setRecruiterData({ ...recruiterData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                        Work / College Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="placement@iitb.ac.in"
                        value={recruiterData.workEmail}
                        onChange={(e) => setRecruiterData({ ...recruiterData, workEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      Organization / University Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. BITS Pilani or Razorpay Talent Team"
                      value={recruiterData.orgName}
                      onChange={(e) => setRecruiterData({ ...recruiterData, orgName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                      Estimated Candidates per Drive / Semester
                    </label>
                    <select
                      value={recruiterData.cohortSize}
                      onChange={(e) => setRecruiterData({ ...recruiterData, cohortSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="100-500">100 - 500 Candidates</option>
                      <option value="500-2000">500 - 2,000 Candidates</option>
                      <option value="2000-10000">2,000 - 10,000 Candidates</option>
                      <option value="10000+">10,000+ Candidates (Mega Campus Drive)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Demo Request</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">Demo Request Logged!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <span className="text-white font-semibold">{recruiterData.name}</span>. An enterprise solutions engineer will reach out at <span className="text-cyan-400 font-mono">{recruiterData.workEmail}</span> with custom sandbox access and SLA credentials.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all cursor-pointer"
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
