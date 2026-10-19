import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  Timer, 
  Code2, 
  Layers, 
  Mic2, 
  Award, 
  FileCheck2, 
  Filter, 
  School, 
  ArrowRight, 
  Check, 
  Terminal, 
  Cpu, 
  Flame, 
  ChevronRight, 
  Sparkles,
  BarChart3,
  ShieldAlert,
  PlayCircle
} from 'lucide-react';

export default function AudienceSwitcher({ onOpenStudentModal, onOpenRecruiterModal }) {
  const [activeTab, setActiveTab] = useState('candidates'); // 'candidates' | 'recruiters'
  const [selectedPillar, setSelectedPillar] = useState(0);

  const candidatePillars = [
    {
      id: 0,
      title: "Timed Online Assessments (OAs)",
      subtitle: "Mirrors OA test patterns of Google, Amazon, Atlassian & Razorpay",
      icon: Timer,
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      features: [
        "Time-pressured sectionals: Aptitude, Data Structures & System Core",
        "Adaptive difficulty engine that responds to your solving velocity",
        "Anti-proctoring mock environment to eliminate real test anxiety"
      ],
      interactiveDemo: {
        type: "oa",
        title: "Section 2: Concurrency & Locks",
        timer: "00:18:42 remaining",
        codeSnippet: "Thread #2 Deadlock Detection in Mutex Graph...",
        score: "94th percentile time speed"
      }
    },
    {
      id: 1,
      title: "DSA Code Execution (Judge0)",
      subtitle: "Full isolated compiler sandbox with instant complexity diagnostics",
      icon: Code2,
      color: "from-indigo-500 to-cyan-500",
      accentBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      features: [
        "Instant compilation across 40+ programming languages on Judge0",
        "Automated Big-O Time & Space complexity curve visualization",
        "AI code quality review: Idiomatic patterns, edge-cases & memory leaks"
      ],
      interactiveDemo: {
        type: "judge0",
        title: "Dynamic Programming: Segment Tree Range Sum",
        timer: "Execution: 0.038s | 14.1 MB",
        codeSnippet: "Judge0 sandbox isolated. 50/50 test cases passed with O(log N) updates.",
        score: "Clean Code: 96/100"
      }
    },
    {
      id: 2,
      title: "System Design Whiteboard",
      subtitle: "Interactive canvas for LLD & HLD with dynamic AI probe questions",
      icon: Layers,
      color: "from-cyan-500 to-emerald-500",
      accentBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      features: [
        "Drag-and-drop architectural blocks (Load Balancers, Redis, Kafka, DBs)",
        "Real-time AI interviewer asks follow-ups: 'What happens during a network partition?'",
        "CAP theorem, write-heavy sharding, and latency bottleneck audits"
      ],
      interactiveDemo: {
        type: "system",
        title: "Architecture: URL Shortener with 100k QPS",
        timer: "Throughput: 120k req/s validated",
        codeSnippet: "AI Follow-Up: 'How do you avoid hash collisions across 10 distributed workers?'",
        score: "Architecture Rating: High (89/100)"
      }
    },
    {
      id: 3,
      title: "Virtual AI Voice Interviewer",
      subtitle: "Zero-latency conversational agent simulating Senior Staff & HR rounds",
      icon: Mic2,
      color: "from-purple-500 to-pink-500",
      accentBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      features: [
        "Realistic conversational flow with smart interruption & clarification logic",
        "Behavioral scoring based on the strict STAR framework",
        "Synchronized collaborative code editor while conversing in real-time"
      ],
      interactiveDemo: {
        type: "voice",
        title: "AI Voice Agent: 'Tell me about an architectural trade-off you regretted.'",
        timer: "Response Latency: 220ms",
        codeSnippet: "Analyzing: STAR Situation (High), Task (Clear), Action (Deep), Result (Measurable).",
        score: "Verbal Clarity: 91/100"
      }
    },
    {
      id: 4,
      title: "Verified Readiness Scorecard",
      subtitle: "Recruiter-trusted credential with exact reason codes & recovery roadmaps",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
      accentBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      features: [
        "Cryptographically signed scorecard shareable directly on LinkedIn and Resumes",
        "Granular reason codes explaining exactly where points were gained or lost",
        "Tailored 14-day recovery curriculum targeting your weak architectural patterns"
      ],
      interactiveDemo: {
        type: "scorecard",
        title: "Rehyre Verified Readiness Credential",
        timer: "Hash: 0x7e8b24...f01a",
        codeSnippet: "DSA Speed: 92% | System Design: 81% | STAR Comm: 85%",
        score: "Status: Fast-Track Qualified"
      }
    }
  ];

  const recruiterCapabilities = [
    {
      id: 0,
      title: "Assessment-as-a-Service",
      subtitle: "Turn any Job Description (JD) into a calibrated multi-stage loop in 30 seconds",
      icon: FileCheck2,
      color: "from-blue-500 to-indigo-600",
      badge: "JD-to-Pipeline Compiler",
      description: "Paste your raw PDF or text Job Description. Rehyre AI parses tech stack, seniority, and domain challenges to automatically synthesize OA questions, Judge0 DSA coding tests, and custom voice interview rubrics.",
      metrics: [
        { label: "Pipeline Creation Time", value: "< 45s" },
        { label: "Engineering Hours Saved / Hire", value: "38 hrs" },
        { label: "Question Leakage Rate", value: "0% (Dynamic AI Variants)" }
      ]
    },
    {
      id: 1,
      title: "Explainable AI Screening",
      subtitle: "Filter 1,000s of resumes down to top 5% candidates with clear evidence codes",
      icon: Filter,
      color: "from-indigo-500 to-cyan-500",
      badge: "No Hallucination ATS",
      description: "Stop relying on blind keyword search or opaque AI rejections. Rehyre generates transparent audit trails for every application, citing exact proof in candidate GitHub repos, project architectures, and verified scorecards.",
      metrics: [
        { label: "Resume Parsing Speed", value: "1,200 / min" },
        { label: "Audit Trail Explainability", value: "100%" },
        { label: "Candidate Dispute Rate", value: "0.1%" }
      ]
    },
    {
      id: 2,
      title: "Turnkey Campus Drive Automation",
      subtitle: "Conduct massive university placement drives without building custom testing platforms",
      icon: School,
      color: "from-emerald-500 to-teal-500",
      badge: "Scale to 50k Concurrent Test-Takers",
      description: "Universities and Tier-1 enterprises execute end-to-end placement drives on auto-pilot. High-throughput Judge0 compiler clusters, AI-assisted proctoring, synchronized batch leaderboards, and instant placement cell exports.",
      metrics: [
        { label: "Concurrent Candidates", value: "50,000+" },
        { label: "Scorecard Turnaround", value: "Instantaneous" },
        { label: "Proctoring Integrity Score", value: "99.4%" }
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TWO SIDES OF ONE UNIFIED RECRUITMENT LOOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Both Sides of the Interview Desk
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Candidates train in realistic, un-cheatable interview conditions; Recruiters & Universities gain rigorous, unbiased screening without burning engineering bandwidth.
          </p>

          {/* Interactive Dual Audience Switcher Buttons */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 shadow-xl">
            <button
              onClick={() => setActiveTab('candidates')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'candidates'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Candidates & Students</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === 'candidates' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'}`}>
                Prepare
              </span>
            </button>

            <button
              onClick={() => setActiveTab('recruiters')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'recruiters'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Recruiters & Colleges</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === 'recruiters' ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'}`}>
                Screen & Campus
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1 Content: Candidates & Students (Rehyre Prepare) */}
        {activeTab === 'candidates' && (
          <div className="space-y-8 animate-fadeIn">
            {/* 5 Core Preparation Pillars Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidatePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = selectedPillar === idx;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setSelectedPillar(idx)}
                    className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#111827] border-indigo-500 shadow-xl shadow-indigo-500/10'
                        : 'bg-slate-900/60 hover:bg-[#111827]/80 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${pillar.accentBg}`}>
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">{pillar.subtitle}</p>

                    <div className="space-y-2.5 pt-3 border-t border-white/5">
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-indigo-400 group">
                      <span>Explore Sandbox Engine</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}

              {/* Extra Pillar Card for Call To Action */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-[#0B0F17] border border-indigo-500/30 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-indigo-600 text-white w-fit shadow-md mb-4">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to test your genuine readiness?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Stop memorizing LeetCode questions in isolation. Run the complete loop end-to-end and see where you rank before facing actual interviewers.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={onOpenStudentModal}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-500 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Launch 1st Free Mock Loop</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">Zero credit card required. Free tier forever.</p>
                </div>
              </div>
            </div>

            {/* Interactive Pillar Live Console Preview */}
            <div className="rounded-2xl bg-slate-950/90 border border-white/10 p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">SELECTED PILLAR CONSOLE</div>
                    <div className="text-sm font-bold text-white">{candidatePillars[selectedPillar].title}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-slate-400">Sandbox Environment:</span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-400 border border-emerald-500/30">
                    Dockerized Runtime Active
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-400 font-mono">SESSION RUNTIME</div>
                  <div className="text-sm font-semibold text-white font-mono">{candidatePillars[selectedPillar].interactiveDemo.timer}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-400 font-mono">BENCHMARK FEEDBACK</div>
                  <div className="text-sm font-semibold text-cyan-300 font-mono">{candidatePillars[selectedPillar].interactiveDemo.score}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-400 font-mono">EXECUTION RESULT</div>
                  <div className="text-xs text-emerald-400 font-mono truncate">{candidatePillars[selectedPillar].interactiveDemo.codeSnippet}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2 Content: Recruiters & Colleges (Rehyre Screen & Campus) */}
        {activeTab === 'recruiters' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {recruiterCapabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.id}
                    className="rounded-2xl p-7 bg-[#111827] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cap.color} text-white shadow-md`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {cap.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                      <p className="text-xs font-medium text-slate-400 mb-4">{cap.subtitle}</p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-6">{cap.description}</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Key Performance Metrics</div>
                      <div className="grid grid-cols-1 gap-2">
                        {cap.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-white/5">
                            <span className="text-xs text-slate-400">{m.label}</span>
                            <span className="text-xs font-mono font-bold text-emerald-400">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recruiter Enterprise Callout Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-950 border border-cyan-500/30 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <ShieldAlert className="w-4 h-4" />
                  <span>CAMPUS RECRUITMENT & B2B ENTERPRISE SLA</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Need to assess 5,000+ engineers this semester?</h3>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Avoid paying per-seat subscriptions on legacy portals. Rehyre AI provides high-concurrency Judge0 sandboxes, anti-plagiarism heuristics, and automated placement cell reports.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={onOpenRecruiterModal}
                  className="px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Schedule B2B Campus Demo</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
