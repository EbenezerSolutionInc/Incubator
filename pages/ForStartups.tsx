
import React from 'react';
import { Rocket, ShieldCheck, Users, TrendingUp, ArrowRight } from 'lucide-react';

const ForStartups: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[48px] bg-blue-900 p-12 md:p-24 text-white overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <img src="https://picsum.photos/seed/startup-hero/1200/1200" alt="Founders collaborating" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Built by Builders, <br/>For Builders.</h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              We equip founders with clarity, structure, and access—so they can focus on building what matters without the friction of a fragmented ecosystem.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2">
              Apply as a Startup
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What You Gain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Reduced Friction",
              desc: "Skip the trial-and-error with our vetted network of legal, finance, and technical service providers.",
              icon: <Rocket className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Trusted Providers",
              desc: "Every partner on the platform is pre-screened for alignment with our values and standards of excellence.",
              icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
            },
            {
              title: "Capital Readiness",
              desc: "Standardized signals and data-driven profiles that make you instantly more attractive to top-tier investors.",
              icon: <TrendingUp className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Community",
              desc: "Join a curated cohort of high-integrity founders committed to building enduring businesses.",
              icon: <Users className="w-8 h-8 text-indigo-600" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForStartups;
