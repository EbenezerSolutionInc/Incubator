
import React, { useState } from 'react';
import { Search, LineChart, Users, Sparkles, ArrowRight, Filter, Globe, ShieldCheck } from 'lucide-react';

const ForInvestors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockStartups = [
    { name: "Everest AI", sector: "Enterprise", stage: "Seed", readiness: "High" },
    { name: "Lumina Bio", sector: "Healthcare", stage: "Series A", readiness: "Investment-Ready" },
    { name: "NorthStar Energy", sector: "Cleantech", stage: "Seed", readiness: "Growing" },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Quality Deal Flow</span>
            <h1 className="text-5xl font-bold text-slate-950 mb-8 leading-tight">Discover Investment-Ready Startups</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We curate credible founders, structured data, and transparent capital signals—reducing noise and increasing confidence for family offices, VCs, and angel investors.
            </p>
            <div className="space-y-6">
              {[
                "High-signal, low-noise deal flow",
                "Verified financial and legal readiness",
                "Deep transparency into startup operations",
                "Founders trained in governance and execution"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-900 font-semibold">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="bg-slate-900 rounded-[48px] p-8 md:p-12 shadow-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-white">Ecosystem Intelligence</h3>
                  <Filter className="w-5 h-5 text-slate-500" />
                </div>
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search by sector or stage..." 
                    className="w-full bg-slate-800 border-none rounded-2xl py-4 pl-12 text-white focus:ring-2 focus:ring-blue-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="space-y-3">
                  {mockStartups.map((s, i) => (
                    <div key={i} className="bg-slate-800/50 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-800 transition-all">
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-blue-400">{s.name}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.sector} • {s.stage}</p>
                      </div>
                      <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">{s.readiness}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 bg-blue-600 py-4 rounded-2xl font-bold text-white hover:bg-blue-700 transition-all">
                  Access Full Deal Flow
                </button>
             </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-12">Partner Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Mentorship & Advisory",
              desc: "Shape the next generation of Canadian icons by offering strategic guidance to elite founders.",
              icon: <Users className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Deal Flow Access",
              desc: "Get priority visibility into high-growth startups before they reach the wider market.",
              icon: <Search className="w-8 h-8 text-indigo-600" />
            },
            {
              title: "Brand Leadership",
              desc: "Position your firm as a leader in Canadian innovation and ethical stewardship.",
              icon: <LineChart className="w-8 h-8 text-slate-900" />
            }
          ].map((opp, i) => (
            <div key={i} className="p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all cursor-default">
              <div className="mb-6">{opp.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{opp.title}</h3>
              <p className="text-slate-600 leading-relaxed">{opp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForInvestors;
