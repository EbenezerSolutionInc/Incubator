
import React from 'react';
import { BookOpen, FileText, Download, Play, ChevronRight } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-slate-950 mb-6">Knowledge Hub</h1>
          <p className="text-xl text-slate-600">
            Curated tools, templates, and insights designed for founders who value excellence, sustainability, and wisdom-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50 p-10 rounded-[40px] flex flex-col justify-between">
            <div>
              <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <FileText className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-slate-950 mb-4">Founder Playbooks</h2>
              <p className="text-slate-600 text-lg mb-8">Comprehensive guides on governance, fundraising, and operational discipline in Canada.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-700 font-bold hover:gap-4 transition-all">
              Browse Playbooks <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="bg-slate-900 p-10 rounded-[40px] text-white flex flex-col justify-between">
            <div>
              <div className="bg-slate-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Download className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Templates & Tools</h2>
              <p className="text-slate-300 text-lg mb-8">Download vetted legal documents, financial models, and hiring frameworks.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all">
              View Downloads <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8">Featured Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "The Integrity Charter", type: "Framework", time: "15 min read" },
            { title: "Series A Readiness Checklist", type: "Tool", time: "10 min" },
            { title: "Scaling Culture with Wisdom", type: "Workshop", time: "45 min video" }
          ].map((res, i) => (
            <div key={i} className="group bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{res.type}</span>
                <BookOpen className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{res.title}</h4>
              <p className="text-slate-500 text-sm mb-6">{res.time}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                Access Now <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function ArrowRight({ className }: { className?: string }) { return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>; }

export default Resources;
