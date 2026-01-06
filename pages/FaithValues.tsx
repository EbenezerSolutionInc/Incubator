
import React from 'react';
import { Quote, Book, Anchor, Shield } from 'lucide-react';

const FaithValues: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-slate-950 mb-8">Wisdom Is Not Optional</h1>
        <p className="text-2xl text-slate-600 leading-relaxed mb-16">
          Our platform is grounded in the belief that wisdom, stewardship, and integrity are essential to building enterprises that endure—economically and ethically.
        </p>

        <div className="bg-white p-12 md:p-20 rounded-[48px] shadow-sm border border-slate-100 text-left relative overflow-hidden mb-16">
          <Quote className="absolute top-10 right-10 w-20 h-20 text-slate-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-display italic text-blue-900 mb-8 leading-snug">
              “Wise people are builders—they build families, businesses, communities. And through intelligence and insight their enterprises are established and endure.”
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-blue-600"></div>
              <span className="font-bold text-slate-900 uppercase tracking-widest">Proverbs 24:3–4 (TPT)</span>
            </div>
            <div className="mt-12 space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                This principle shapes not only what we build, but how we build: with wisdom, structure, accountability, and a long-term view of impact. We believe that innovation without wisdom is fleeting, but insight combined with stewardship creates enduring value.
              </p>
              <p>
                Lumina exists to integrate these timeless principles into the high-paced world of technology and venture capital, ensuring that Canadian startups are not just fast, but firm.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Stewardship", desc: "Managing resources with excellence for the good of the community.", icon: <Anchor className="w-8 h-8" /> },
            { title: "Integrity", desc: "Consistency in values, decisions, and results.", icon: <Shield className="w-8 h-8" /> },
            { title: "Insight", desc: "Seeing beyond the immediate to build for the next generation.", icon: <Book className="w-8 h-8" /> }
          ].map((val, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100">
               <div className="text-blue-600 mb-6 flex justify-center">{val.icon}</div>
               <h3 className="text-xl font-bold text-slate-950 mb-4">{val.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaithValues;
