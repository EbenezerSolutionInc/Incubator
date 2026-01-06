
import React from 'react';
import { Network, LineChart, Database, CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

const Platform: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Engineered for Excellence</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-950 mb-8 leading-tight">
            More Than an Accelerator— <br/>
            <span className="text-slate-400">A National Innovation Platform</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our platform integrates incubation, acceleration, and ecosystem intelligence into one scalable digital environment, removing the friction that stops great ideas from becoming enduring companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Ecosystem Infrastructure",
              desc: "Vetted service providers, institutional partners, and trusted legal/financial frameworks tailored for Canadian startups.",
              icon: <Network className="w-8 h-8" />,
              color: "bg-blue-600"
            },
            {
              title: "Founder Acceleration",
              desc: "Milestone-based growth paths, high-stakes mentorship, and disciplined execution modules inspired by YC.",
              icon: <Zap className="w-8 h-8" />,
              color: "bg-indigo-600"
            },
            {
              title: "Data & Visibility",
              desc: "Founder-controlled profiles and transparent investment signaling providing market intelligence to partners.",
              icon: <Database className="w-8 h-8" />,
              color: "bg-slate-900"
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-white border border-slate-100 p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all">
              <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-950 rounded-[48px] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <img src="https://picsum.photos/seed/tech-platform/1000/1000" alt="Platform Dashboard" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
          </div>
          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-10">Platform Capabilities</h2>
            <div className="space-y-6">
              {[
                "Unified Startup Dashboards for metric tracking",
                "Automated Service Requests (Legal, Finance, Tech)",
                "Smart Mentorship Matching via AI profiling",
                "Dynamic Investment Signaling to curated investors",
                "Resource Knowledge Hub with 500+ templates",
                "Compliance & Governance Benchmarking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 group">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
              See the Platform in Action
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function ChevronRight({ className }: { className?: string }) { return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>; }

export default Platform;
