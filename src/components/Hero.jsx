import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  FileText, 
  Timer, 
  Code2, 
  Network, 
  Mic2, 
  Award,
  Zap,
  Terminal,
  Server,
  Layers,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Users
} from 'lucide-react';

export default function Hero({ onOpenStudentModal, onOpenRecruiterModal }) {
  const [activeStep, setActiveStep] = useState(2); // default to Judge0 DSA
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedRole, setSelectedRole] = useState('sde');

  const pipelineSteps = [
    {
      id: 0,
      name: 'Resume Screening',
      tag: 'Step 1',
      icon: FileText,
      metric: '0.8s Match Latency',
      status: 'Parsed & Indexed',
      detail: 'Semantic JD alignment with explicit reject/pass codes. Zero keyword hallucination.',
      color: 'from-blue-500 to-indigo-500',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      id: 1,
      name: 'Timed OA',
      tag: 'Step 2',
      icon: Timer,
      metric: '60m Adaptive Test',
      status: 'Aptitude & CS Fundamentals',
      detail: 'Time-pressured algorithmic screening calibrated to Tier-1 product company bars.',
      color: 'from-indigo-500 to-purple-500',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
    },
    {
      id: 2,
      name: 'Judge0 DSA',
      tag: 'Step 3',
      icon: Code2,
      metric: '42/42 Testcases Passed',
      status: 'Isolated Cloud Sandbox',
      detail: 'Multi-language compilation (C++, Python, Java, Go) with strict memory & CPU limits.',
      color: 'from-cyan-500 to-blue-500',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    {
      id: 3,
      name: 'System Design',
      tag: 'Step 4',
      icon: Network,
      metric: 'Distributed Cache & Sharding',
      status: 'Interactive Whiteboard',
      detail: 'Evaluates throughput, database replication, CAP trade-offs, and failure recoveries.',
      color: 'from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    {
      id: 4,
      name: 'AI Voice Interview',
      tag: 'Step 5',
      icon: Mic2,
      metric: 'Neural Real-Time Synthesis',
      status: 'HR + Technical Deep-Dive',
      detail: 'Natural speech interruption handling, STAR framework scoring, live shared code chat.',
      color: 'from-purple-500 to-pink-500',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    },
    {
      id: 5,
      name: 'Verified Scorecard',
      tag: 'Step 6',
      icon: Award,
      metric: '88/100 Readiness Index',
      status: 'Cryptographic Credential',
      detail: 'Recruiter-ready report with deep percentile ranking, code diffs, and audio logs.',
      color: 'from-emerald-500 to-teal-500',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    }
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      setActiveStep(step);
      step++;
      if (step >= pipelineSteps.length) {
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 1200);
      }
    }, 900);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid">
      {/* Background radial glowing ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-glow-hero pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              Introducing <span className="text-white font-semibold">Continuous Loop Engineering</span> for 2026 Campus & Tech Hiring
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
          </div>
        </div>

        {/* Main Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            From Preparation to Hiring.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300">
              One Complete Loop.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            The AI-powered technical hiring ecosystem. Candidates practice full, realistic hiring loops; recruiters gain automated, explainable screening with <span className="text-white font-medium">zero wasted engineering hours</span>.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenStudentModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
              <span>Practice Free Mock Loop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenRecruiterModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 hover:text-white border border-slate-700/80 hover:border-indigo-500/50 shadow-lg shadow-black/40 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Server className="w-4 h-4 text-indigo-400" />
              <span>Request Campus / B2B Demo</span>
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-mono">140,000+</div>
              <div className="text-xs text-slate-400 mt-0.5">Mock Loops Run</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 font-mono">94.8%</div>
              <div className="text-xs text-slate-400 mt-0.5">Recruiter Accuracy Correlation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 font-mono">0 Hrs</div>
              <div className="text-xs text-slate-400 mt-0.5">Dev Engineering Time Wasted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400 font-mono">40+ Langs</div>
              <div className="text-xs text-slate-400 mt-0.5">Judge0 Sandbox Environments</div>
            </div>
          </div>
        </div>

        {/* Interactive Visual Component: Pipeline Builder Preview */}
        <div id="pipeline" className="mt-12 max-w-6xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#111827]/95 to-[#0B0F17] p-1 border border-white/10 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/10 bg-slate-950/60 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-700 mx-1"></div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200">
                    pipeline.orchestration.rehyre.engine
                  </span>
                </div>
              </div>

              {/* Role Preset Selector & Simulation Trigger */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">Role Calibration:</span>
                <div className="flex bg-slate-900 border border-slate-700/60 rounded-lg p-0.5 text-xs font-mono">
                  <button 
                    onClick={() => setSelectedRole('sde')} 
                    className={`px-2.5 py-1 rounded transition-all ${selectedRole === 'sde' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Backend / SDE
                  </button>
                  <button 
                    onClick={() => setSelectedRole('data')} 
                    className={`px-2.5 py-1 rounded transition-all ${selectedRole === 'data' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Data Analyst
                  </button>
                  <button 
                    onClick={() => setSelectedRole('devops')} 
                    className={`px-2.5 py-1 rounded transition-all ${selectedRole === 'devops' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Cloud / DevOps
                  </button>
                </div>

                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-emerald-300' : ''}`} />
                  <span>{isSimulating ? 'Testing Loop...' : 'Simulate Loop'}</span>
                </button>
              </div>
            </div>

            {/* Pipeline Stage Steps Row */}
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    Automated Multi-Stage Pipeline Map
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Click any stage node below to inspect execution telemetry and output payload.</p>
                </div>
                <div className="text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                  Active Node: <span className="font-bold text-white">{pipelineSteps[activeStep].name}</span>
                </div>
              </div>

              {/* Connected Pipeline Node Carousel/Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
                {pipelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`relative rounded-xl p-3.5 cursor-pointer transition-all duration-200 border ${
                        isActive
                          ? 'bg-gradient-to-b from-indigo-950/80 to-slate-900 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-[1.02]'
                          : 'bg-slate-900/60 hover:bg-slate-900/90 border-white/5 hover:border-white/15'
                      }`}
                    >
                      {/* Active indicator dot */}
                      {isActive && (
                        <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#0B0F17] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${step.badgeColor}`}>
                          {step.tag}
                        </span>
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${step.color} text-white shadow-sm`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="text-xs font-bold text-white mb-1 truncate">{step.name}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">{step.status}</div>

                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 truncate">{step.metric}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Step Detailed Live Telemetry Card */}
              <div className="mt-6 rounded-xl bg-slate-950/80 border border-indigo-500/20 p-5 backdrop-blur-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Stage Metadata */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {pipelineSteps[activeStep].tag} RUNTIME INSPECTOR
                      </span>
                      <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Inference
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {pipelineSteps[activeStep].name}: <span className="text-slate-300 font-normal">{pipelineSteps[activeStep].status}</span>
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {pipelineSteps[activeStep].detail}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="bg-slate-900/90 border border-white/5 rounded-lg p-2.5">
                        <div className="text-[10px] text-slate-400 font-mono">SANDBOX TARGET</div>
                        <div className="text-xs font-semibold text-white font-mono mt-0.5">Docker v24.0.7-Judge0</div>
                      </div>
                      <div className="bg-slate-900/90 border border-white/5 rounded-lg p-2.5">
                        <div className="text-[10px] text-slate-400 font-mono">AUDIT VERIFIABILITY</div>
                        <div className="text-xs font-semibold text-emerald-400 font-mono mt-0.5">SHA-256 Signed</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Code/Telemetry Output Panel */}
                  <div className="lg:col-span-7 bg-[#0B0F17] rounded-xl border border-white/10 p-4 font-mono text-xs overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-slate-300">Live Telemetry Stream</span>
                      </div>
                      <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-indigo-300">
                        LATENCY: 18ms
                      </span>
                    </div>

                    {activeStep === 0 && (
                      <div className="space-y-1.5 text-slate-300">
                        <p className="text-indigo-400 font-semibold">[JD Matching Engine] Parsing candidate_resume.pdf...</p>
                        <p className="text-slate-400">&gt; Extracted Experience: 3.5 yrs Distributed Systems & Go</p>
                        <p className="text-emerald-400">&gt; Score: 94.2% match | Reason: &quot;Production Raft consensus & Redis cluster exp.&quot;</p>
                        <p className="text-slate-400">&gt; Verification Hash: <span className="text-cyan-400">0x9c31e7f9a8...</span></p>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="space-y-1.5 text-slate-300">
                        <p className="text-indigo-400 font-semibold">[Timed OA Test Runner] Calibrated for {selectedRole.toUpperCase()}</p>
                        <p className="text-slate-400">&gt; Section 1: Quantitative Logic (20/20 completed in 14m 12s)</p>
                        <p className="text-slate-400">&gt; Section 2: Core CS Operating Systems & Concurrency (98th percentile)</p>
                        <p className="text-emerald-400">&gt; Anti-Cheat Telemetry: Zero focus tab loss, Dual webcam verified.</p>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-1.5 text-slate-300">
                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>Judge0 Execution Output [C++20 - -O3]</span>
                          <span className="text-emerald-400">STATUS: ACCEPTED</span>
                        </div>
                        <div className="bg-slate-900/90 rounded p-2 text-indigo-300 border border-white/5 space-y-1">
                          <p><span className="text-slate-500">1</span> solution.cpp: Executing 42 strict edge test cases...</p>
                          <p><span className="text-slate-500">2</span> <span className="text-emerald-400">Testcase #1-38 PASSED:</span> O(N log N) Heap priority queue</p>
                          <p><span className="text-slate-500">3</span> <span className="text-emerald-400">Testcase #39-42 (Extreme Constraints):</span> PASSED [Memory: 14.2 MB, Time: 0.04s]</p>
                          <p><span className="text-slate-500">4</span> Space Complexity: <span className="text-cyan-300">O(1) Aux Space (Optimal)</span></p>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-1.5 text-slate-300">
                        <p className="text-amber-400 font-semibold">[System Design Whiteboard AI Evaluator]</p>
                        <p className="text-slate-400">&gt; Prompt: &quot;Design a multi-region distributed idempotency cache for payment gateway&quot;</p>
                        <p className="text-cyan-300">&gt; AI Probe: &quot;How will you handle split-brain if the US-East fiber link drops?&quot;</p>
                        <p className="text-emerald-400">&gt; Candidate Answer: &quot;Quorum consensus with Zookeeper lease timeouts + write-ahead logs.&quot; (Score: 92/100)</p>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="space-y-1.5 text-slate-300">
                        <p className="text-purple-400 font-semibold">[Neural Voice Agent • Staff SRE Persona]</p>
                        <div className="flex items-center gap-3 my-1">
                          <div className="flex items-center gap-1 h-5">
                            {[40, 75, 100, 60, 90, 45, 80, 100, 50, 70, 95, 30].map((h, i) => (
                              <span key={i} className="w-1 bg-gradient-to-t from-indigo-500 to-pink-500 rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }} />
                            ))}
                          </div>
                          <span className="text-[11px] text-pink-300">Voice Synthesis Latency: 220ms</span>
                        </div>
                        <p className="text-slate-300">&gt; &quot;Walk me through a situation where your production deploy caused a cascade failure. How did you isolate the blast radius?&quot;</p>
                        <p className="text-emerald-400">&gt; Behavioral Metric: High STAR adherence, Clear ownership, Zero defensive deflection.</p>
                      </div>
                    )}

                    {activeStep === 5 && (
                      <div className="space-y-1.5 text-slate-300">
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-400 font-bold">[Verified Readiness Scorecard]</span>
                          <span className="text-white font-mono bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">OVERALL: 88/100</span>
                        </div>
                        <p className="text-slate-300">&gt; Percentile: <span className="text-emerald-400 font-bold">Top 4.2%</span> of 2026 Batch Candidates</p>
                        <p className="text-slate-400">&gt; Verified by Rehyre AI: Cryptographic Signature 0x7f4a9b...c4</p>
                        <p className="text-cyan-300">&gt; Recruiter Status: <span className="font-semibold text-emerald-300">Fast-Tracked to Final Round</span></p>
                      </div>
                    )}

                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
