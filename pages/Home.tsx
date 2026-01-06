
import React from 'react';
import { ArrowRight, ChevronRight, Globe, ShieldCheck, Zap, Target, BookOpen, MessageSquare, Quote } from 'lucide-react';
import { VALUE_PROPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Now Scaling Nationally across Canada
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-950 mb-6 leading-[1.1]">
              Building Canada’s Future— <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">One Startup at a Time.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              A national incubator and accelerator platform connecting startups to services, mentorship, and capital—designed to fire up innovation across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#/apply" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group">
                Join the Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#/platform" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                Explore Ecosystem
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://picsum.photos/seed/canada-office/1200/1000" alt="Innovation Hub" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-bold text-slate-900">Accelerated Growth</span>
              </div>
              <p className="text-xs text-slate-500">Helping startups achieve 3x faster time-to-market through our vetted service network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">Strategic Innovation for an Enduring Economy</h2>
            <p className="text-slate-600 text-lg">We provide the structural foundations that allow visionary founders to build scalable, high-impact businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPS.map((prop, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-950 mb-10">How It Works</h2>
              <div className="space-y-8">
                {[
                  { title: "Create Your Startup Profile", desc: "Showcase what you’re building, your stage, traction, and goals in a founder-controlled environment." },
                  { title: "Access Support", desc: "Request services from vetted providers (legal, finance, HR, AI) and connect with expert mentors." },
                  { title: "Signal Investment Readiness", desc: "Indicate whether you are raising capital, how much you need, and exactly how it will be used." },
                  { title: "Grow with Structure", desc: "Progress through milestones with accountability and the governance needed to build companies that endure." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[40px] p-10 text-white relative z-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-300" />
                  National Ecosystem Impact
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <div className="text-3xl font-extrabold mb-1">200+</div>
                    <div className="text-blue-200 text-sm">Vetted Service Providers</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <div className="text-3xl font-extrabold mb-1">85%</div>
                    <div className="text-blue-200 text-sm">Founder Success Rate at Series A</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <div className="text-3xl font-extrabold mb-1">$450M+</div>
                    <div className="text-blue-200 text-sm">Capital Signaled on Platform</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethos Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Quote className="w-16 h-16 text-blue-100 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-display italic text-slate-900 mb-8 leading-tight">
            “Wise people are builders—they build families, businesses, communities. And through intelligence and insight their enterprises are established and endure.”
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-blue-600 mb-4"></div>
            <p className="text-xl font-bold text-slate-950 uppercase tracking-widest">Proverbs 24:3–4 (TPT)</p>
            <p className="text-slate-500 mt-4 text-lg">We believe wisdom builds what innovation alone cannot sustain.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
