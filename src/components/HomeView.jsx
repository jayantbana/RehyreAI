import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Timer, 
  Code2, 
  Network, 
  Mic2, 
  Award,
  RefreshCw,
  Cpu,
  Layers,
  ChevronRight,
  Database,
  Terminal,
  Activity,
  ArrowUpRight
} from 'lucide-react';

export default function HomeView({ setActiveTab, onOpenStudentModal, onOpenRecruiterModal }) {
  const [selectedRole, setSelectedRole] = useState('swe');
  const [flywheelActiveNode, setFlywheelActiveNode] = useState('scorecard');

  const rolePipelines = {
    swe: {
      name: "Software Engineer / Platform Lead",
      tagline: "Algorithmic asymptotic analysis, concurrency, and multi-tier systems.",
      nodes: [
        { title: "Semantic Resume Screening", time: "0.8s", detail: "Validates production Git commits & distributed systems experience" },
        { title: "Timed OA Assessment", time: "45m", detail: "Thread scheduling, OS primitives, and memory constraints" },
        { title: "Judge0 DSA Sandbox", time: "42/42 Tests", detail: "Segment trees, DP state transitions in C++20 / Go" },
        { title: "System Design Whiteboard", time: "Interactive", detail: "Distributed cache invalidation, sharded write topologies" },
        { title: "Staff AI Voice Interview", time: "25m", detail: "STAR behavioral deep-dives & synchronous code review" }
      ]
    },
    data: {
      name: "Data Analyst & Analytics Engineer",
      tagline: "Complex SQL window queries, Bayesian statistics, and business retention cases.",
      nodes: [
        { title: "Portfolio Model Audit", time: "1.2s", detail: "Audits dbt DAGs, BigQuery/Snowflake models & ETL pipelines" },
        { title: "Statistical Reasoning", time: "30m", detail: "Hypothesis testing, confidence intervals & cohort analysis" },
        { title: "SQL Execution Engine", time: "35/35 Tests", detail: "Recursive CTEs, dense ranking & temporal aggregations" },
        { title: "Funnel Case Simulation", time: "Live Data", detail: "Diagnoses a 24% checkout dropoff across payment gateways" },
        { title: "Stakeholder Voice Debrief", time: "20m", detail: "Explains technical insights to executive non-engineers" }
      ]
    },
    devops: {
      name: "Cloud DevOps & Site Reliability Engineer",
      tagline: "Live terminal crash forensics, Kubernetes orchestration, and post-mortems.",
      nodes: [
        { title: "Infrastructure Code Screen", time: "0.9s", detail: "Parses Terraform HCL modules, Helm charts, and IAM roles" },
        { title: "Linux Sandbox Terminal", time: "Live Bash", detail: "Isolates memory leaks and orphaned processes in containers" },
        { title: "K8s Debugging Cluster", time: "99.8% Pass", detail: "Remediates CrashLoopBackOff & ingress TLS configuration" },
        { title: "Fault-Tolerance Design", time: "Multi-Region", detail: "Architects zero-downtime failover with active-active DNS" },
        { title: "Incident Retrospective Oral", time: "20m", detail: "AI Staff SRE probes containment velocity and MTTR reduction" }
      ]
    }
  };

  const activePipeline = rolePipelines[selectedRole];

  return (
    <div className="space-y-24 py-12 md:py-20 animate-fadeIn">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Monograph Issue Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F0EA] border border-[#E6E2DA] text-[#525866] text-xs font-mono mb-8 shadow-warm-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C25E00]"></span>
            <span>ISSUE NO. 04 • THE ARCHITECTURE OF TECHNICAL EVALUATION</span>
          </div>

          {/* Headline in Instrument Serif */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1C1E21] leading-[1.05] tracking-tight">
            From Preparation to Hiring.{' '}
            <span className="italic font-serif text-[#1E3A8A] block sm:inline">
              One Complete Loop.
            </span>
          </h1>

          {/* Subheadline in Plus Jakarta Sans */}
          <p className="mt-8 text-lg sm:text-xl text-[#525866] font-normal leading-relaxed max-w-3xl mx-auto">
            The AI-powered technical hiring ecosystem. Candidates practice realistic company loops; recruiters gain automated, explainable screening with <span className="text-[#1C1E21] font-semibold">zero engineering hours wasted</span>.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenStudentModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-warm-md hover:shadow-warm-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Practice Free Mock Loop</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRecruiterModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-[#1C1E21] bg-white hover:bg-[#F4F0EA] border border-[#E6E2DA] shadow-warm-sm transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Request Campus / B2B Demo</span>
              <ArrowUpRight className="w-4 h-4 text-[#525866]" />
            </button>
          </div>

          {/* Editorial Trust Figures */}
          <div className="mt-16 pt-10 border-t border-[#E6E2DA] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-[#1C1E21]">140,000+</div>
              <div className="text-xs text-[#525866] uppercase font-mono tracking-wider mt-1">Full Mock Loops Run</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-[#0D5C3A]">94.8%</div>
              <div className="text-xs text-[#525866] uppercase font-mono tracking-wider mt-1">Recruiter Correlation</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-[#1E3A8A]">38 Hours</div>
              <div className="text-xs text-[#525866] uppercase font-mono tracking-wider mt-1">Saved Per Successful Hire</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-[#C25E00]">40+ Langs</div>
              <div className="text-xs text-[#525866] uppercase font-mono tracking-wider mt-1">Isolated Sandbox Environments</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive SVG Visual: "The Ecosystem Flywheel" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E6E2DA] p-8 sm:p-12 shadow-warm-md">
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C25E00] font-bold">
              The Architectural Blueprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E21] mt-2">
              The Ecosystem Flywheel
            </h2>
            <p className="text-sm text-[#525866] mt-2 leading-relaxed">
              Candidate preparation directly feeds verified talent pipelines. Recruiter hiring criteria directly shapes realistic practice rubrics.
            </p>
          </div>

          {/* Custom Inline SVG Vector Diagram */}
          <div className="relative max-w-4xl mx-auto bg-[#FAFAF7] rounded-2xl border border-[#E6E2DA] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Left Wing: Candidate Preparation */}
              <div 
                onClick={() => setFlywheelActiveNode('candidate')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  flywheelActiveNode === 'candidate'
                    ? 'bg-white border-[#1E3A8A] shadow-warm-md ring-1 ring-[#1E3A8A]'
                    : 'bg-white/80 border-[#E6E2DA] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4F0EA] text-[#1E3A8A] font-bold">
                    SIDE A • ASPIRANTS
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]"></div>
                </div>
                <h3 className="font-serif text-2xl text-[#1C1E21] font-normal mb-1">Rehyre Prepare</h3>
                <p className="text-xs text-[#525866] leading-relaxed mb-4">
                  Candidates train across realistic timed OAs, Judge0 compilers, and Staff Engineer voice interviews.
                </p>
                <ul className="text-xs space-y-1.5 text-[#1C1E21] font-medium">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                    <span>Timed OA Assessments</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                    <span>Judge0 Algorithmic Compilers</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                    <span>AI Voice & System Design Canvas</span>
                  </li>
                </ul>
              </div>

              {/* Center Hub: Cryptographic Verified Scorecard */}
              <div 
                onClick={() => setFlywheelActiveNode('scorecard')}
                className={`p-6 rounded-2xl border text-center transition-all cursor-pointer ${
                  flywheelActiveNode === 'scorecard'
                    ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-warm-lg scale-105'
                    : 'bg-[#1C1E21] text-white border-[#1C1E21] hover:bg-[#1E3A8A]'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-[#FAFAF7]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4F0EA] bg-white/10 px-2 py-0.5 rounded-full">
                  THE VERIFICATION CORE
                </span>
                <h4 className="font-serif text-2xl text-white font-normal mt-2 mb-1">
                  Verified Readiness Scorecard
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Tamper-proof SHA-256 evidence certificate proving genuine execution proficiency.
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FAFAF7] bg-white/10 px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-[#0D5C3A]" />
                  <span>Audit Code: 0x7f4a...9b12</span>
                </div>
              </div>

              {/* Right Wing: Enterprise Screening */}
              <div 
                onClick={() => setFlywheelActiveNode('enterprise')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  flywheelActiveNode === 'enterprise'
                    ? 'bg-white border-[#C25E00] shadow-warm-md ring-1 ring-[#C25E00]'
                    : 'bg-white/80 border-[#E6E2DA] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4F0EA] text-[#C25E00] font-bold">
                    SIDE B • EMPLOYERS
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C25E00]"></div>
                </div>
                <h3 className="font-serif text-2xl text-[#1C1E21] font-normal mb-1">Rehyre Screen</h3>
                <p className="text-xs text-[#525866] leading-relaxed mb-4">
                  Recruiters convert JDs into pipelines, evaluate 50k candidates, and read clear rejection reasons.
                </p>
                <ul className="text-xs space-y-1.5 text-[#1C1E21] font-medium">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                    <span>Assessment-as-a-Service (JD to Loop)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                    <span>Explainable AI Reason Codes</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                    <span>Turnkey Campus Drive Automation</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Flywheel Caption */}
            <div className="mt-8 pt-6 border-t border-[#E6E2DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#525866]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0D5C3A]"></span>
                <span>Active Flywheel Connection: Prepare ⇄ Scorecard ⇄ Screen</span>
              </div>
              <button 
                onClick={() => setActiveTab('scorecard')}
                className="text-[#1E3A8A] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Inspect an authentic Verified Scorecard</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Pipeline Preview Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4F0EA] rounded-3xl border border-[#E6E2DA] p-8 sm:p-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E6E2DA]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A] font-bold">
                DYNAMIC PIPELINE TOPOLOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1E21] mt-2">
                Componentized Hiring Pipelines
              </h2>
              <p className="text-sm text-[#525866] mt-1 max-w-xl">
                Roles shouldn't share generic multiple-choice tests. Rehyre compiles specific assessment modules calibrated to real day-one responsibilities.
              </p>
            </div>

            {/* Role Selectors */}
            <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-[#E6E2DA] shadow-warm-sm">
              <button
                onClick={() => setSelectedRole('swe')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === 'swe'
                    ? 'bg-[#1E3A8A] text-white shadow-warm-sm'
                    : 'text-[#525866] hover:text-[#1C1E21]'
                }`}
              >
                Software Engineer
              </button>
              <button
                onClick={() => setSelectedRole('data')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === 'data'
                    ? 'bg-[#1E3A8A] text-white shadow-warm-sm'
                    : 'text-[#525866] hover:text-[#1C1E21]'
                }`}
              >
                Data Analyst
              </button>
              <button
                onClick={() => setSelectedRole('devops')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedRole === 'devops'
                    ? 'bg-[#1E3A8A] text-white shadow-warm-sm'
                    : 'text-[#525866] hover:text-[#1C1E21]'
                }`}
              >
                Cloud / DevOps
              </button>
            </div>
          </div>

          {/* Sequential Stage Vector Blocks */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#525866]">
              <span>CALIBRATED FOR: <strong className="text-[#1C1E21]">{activePipeline.name}</strong></span>
              <span>{activePipeline.nodes.length} SEQUENCED NODES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {activePipeline.nodes.map((node, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#E6E2DA] shadow-warm-sm hover:shadow-warm-md hover:border-[#1E3A8A]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F0EA] text-[#525866]">
                        Stage 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#0D5C3A]">
                        {node.time}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-[#1C1E21] font-normal mb-1.5 leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-xs text-[#525866] leading-relaxed">
                      {node.detail}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E6E2DA] flex items-center justify-between text-[11px] font-mono text-[#1E3A8A]">
                    <span>Standardized Bar</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C3A]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-10 pt-6 border-t border-[#E6E2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#525866]">
              Looking to deploy this pipeline across 5,000 campus graduates?
            </div>
            <button
              onClick={() => setActiveTab('enterprise')}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-[#1E3A8A] bg-white border border-[#E6E2DA] hover:bg-[#FAFAF7] shadow-warm-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Enterprise Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
