import React, { useState } from 'react';
import { 
  GitBranch, 
  Cpu, 
  Workflow, 
  ArrowRight, 
  FileText, 
  Timer, 
  Code2, 
  Network, 
  Database, 
  Terminal, 
  Brain, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  HelpCircle,
  FileCheck,
  ShieldCheck,
  ArrowDown
} from 'lucide-react';

export default function ArchitectureShowcase() {
  const [selectedRole, setSelectedRole] = useState('swe');

  const rolePipelines = {
    swe: {
      title: "Full-Stack / Software Engineer (SWE)",
      description: "Optimized for core CS fundamentals, asymptotic runtime efficiency, and distributed system trade-offs.",
      stages: [
        { name: "Resume Screening", desc: "Verifies production Git history, repo commits & tech-stack depth", icon: FileText, color: "from-blue-500 to-indigo-500" },
        { name: "Timed OA", desc: "Aptitude, OS threads, memory management & networking basics", icon: Timer, color: "from-indigo-500 to-purple-500" },
        { name: "Judge0 DSA Execution", desc: "40+ test cases, space complexity & time bounds in C++/Java/Python", icon: Code2, color: "from-cyan-500 to-blue-500" },
        { name: "System Design Whiteboard", desc: "Microservices, DB sharding, caching strategies & CAP trade-offs", icon: Network, color: "from-emerald-500 to-teal-500" }
      ],
      sampleFeedback: {
        candidate: "Candidate: Harsh Vardhan (SDE Track)",
        status: "APPROVED FOR ONSITE (88/100)",
        positive: "Optimal segment tree query implementation; identified cache stampede vulnerability during design phase.",
        delta: "Could enhance database indexing with composite B-Trees for range queries instead of full table scans."
      }
    },
    data: {
      title: "Data Analyst & Analytics Engineer",
      description: "Replaces traditional DSA with heavy SQL window functions, statistical models, and business case debriefs.",
      stages: [
        { name: "Resume Screening", desc: "Screens real dbt models, Snowflake/BigQuery pipelines, Tableau dashboards", icon: FileText, color: "from-blue-500 to-indigo-500" },
        { name: "Aptitude & Probability", desc: "Bayesian probability, hypothesis testing & cohort retention analytics", icon: Brain, color: "from-purple-500 to-pink-500" },
        { name: "SQL Execution Sandbox", desc: "Live Postgres execution for recursive CTEs, window functions & aggregations", icon: Database, color: "from-amber-500 to-orange-500" },
        { name: "Case Study Simulation", desc: "Interactive business scenario: Diagnose a 24% churn spike in checkout funnel", icon: Workflow, color: "from-emerald-500 to-cyan-500" }
      ],
      sampleFeedback: {
        candidate: "Candidate: Priya Nair (Analytics Track)",
        status: "APPROVED FOR ONSITE (91/100)",
        positive: "Flawless partition windowing query; isolated checkout drop-off to 3DS authentication gateway timeout.",
        delta: "Consider recommending automated anomaly detection triggers on daily ARR variance."
      }
    },
    devops: {
      title: "Cloud DevOps & Site Reliability Engineer (SRE)",
      description: "Replaces abstract algorithm puzzles with real terminal sandboxes, Kubernetes cluster debugging, and root-cause post-mortems.",
      stages: [
        { name: "Resume Screening", desc: "Audits Terraform modules, AWS/GCP architectures & CI/CD configs", icon: FileText, color: "from-blue-500 to-indigo-500" },
        { name: "Linux Sandbox Terminal", desc: "Live bash challenge: Troubleshoot memory leak & zombie processes in container", icon: Terminal, color: "from-cyan-500 to-blue-600" },
        { name: "K8s Cluster Debugging", desc: "Fix crashlooping pods, ingress SSL certificate misconfiguration & RBAC", icon: Network, color: "from-indigo-500 to-purple-600" },
        { name: "Post-Mortem Oral Probe", desc: "AI Staff SRE probes root-cause containment & zero-downtime rollback strategy", icon: Brain, color: "from-emerald-500 to-teal-500" }
      ],
      sampleFeedback: {
        candidate: "Candidate: Marcus Vance (SRE Track)",
        status: "APPROVED FOR ONSITE (94/100)",
        positive: "Identified K8s OOMKilled trigger under 90 seconds; applied horizontal pod autoscaling metric with jitter.",
        delta: "Add rate-limiting annotations on nginx ingress to prevent HTTP flood cascades."
      }
    }
  };

  const activePipeline = rolePipelines[selectedRole];

  return (
    <section id="architecture" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMPONENTIZED HIRING ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Pipelines that Reshuffle per Role
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            One size does not fit all. Rehyre AI disassembles evaluation building blocks and dynamically sequences them based on actual engineering responsibilities.
          </p>

          {/* Role Switching Selector */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 max-w-xl mx-auto">
            <button
              onClick={() => setSelectedRole('swe')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedRole === 'swe'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Role: Software Engineer
            </button>
            <button
              onClick={() => setSelectedRole('data')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedRole === 'data'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Role: Data Analyst
            </button>
            <button
              onClick={() => setSelectedRole('devops')}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedRole === 'devops'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Role: Cloud / SRE
            </button>
          </div>
        </div>

        {/* Dynamic Pipeline Visualization Grid */}
        <div className="rounded-2xl bg-[#111827]/90 border border-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Dynamic Topology Active</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">{activePipeline.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{activePipeline.description}</p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
              Pipeline Stages: <span className="text-indigo-400 font-bold">{activePipeline.stages.length} Connected Nodes</span>
            </div>
          </div>

          {/* Sequential Stage Flow Nodes */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {activePipeline.stages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div key={idx} className="relative group">
                    <div className="h-full rounded-xl bg-slate-900/90 border border-white/10 p-5 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                            Stage 0{idx + 1}
                          </span>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${stage.color} text-white shadow-md`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1.5">{stage.name}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                        <span>Status: Calibrated</span>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Connecting arrow for desktop */}
                    {idx < activePipeline.stages.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 items-center justify-center text-slate-300">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlight: "No Blind Rejections" Feedback Debrief Banner */}
          <div className="mt-4 rounded-xl bg-slate-950 border border-emerald-500/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-full bg-emerald-500/5 pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-mono">
                The &quot;No Blind Rejections&quot; Feedback Engine
              </h4>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 max-w-3xl">
              Traditional recruitment leaves candidates with silence or robotic rejections like <em>&quot;We decided to move forward with other candidates.&quot;</em> Rehyre AI automatically generates structured, auditable feedback after every single run.
            </p>

            {/* Mock Feedback Box */}
            <div className="rounded-lg bg-slate-900 border border-white/10 p-4 font-mono text-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                <span className="text-slate-300 font-semibold">{activePipeline.sampleFeedback.candidate}</span>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                  {activePipeline.sampleFeedback.status}
                </span>
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400 font-semibold">[VERIFIED STRENGTH]: </span>
                {activePipeline.sampleFeedback.positive}
              </div>
              <div className="text-slate-400">
                <span className="text-amber-400 font-semibold">[TARGETED DELTA]: </span>
                {activePipeline.sampleFeedback.delta}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
