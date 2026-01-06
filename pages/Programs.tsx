
import React from 'react';
import { MEMBERSHIP_TIERS } from '../constants';
import { Check } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-slate-950 mb-6">Access Built for Every Stage</h1>
          <p className="text-xl text-slate-600">
            Whether you are validating an idea or scaling a venture, our membership tiers meet you where you are—and help you grow forward with wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative flex flex-col p-8 rounded-[32px] transition-all duration-300 ${
                tier.highlight 
                ? 'bg-blue-900 text-white shadow-2xl scale-105 z-10 border-blue-800' 
                : 'bg-white text-slate-900 border border-slate-200 hover:border-blue-200 hover:shadow-xl'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold">{tier.price}</span>
                </div>
                <p className={`text-sm ${tier.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                  {tier.description}
                </p>
              </div>
              
              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-emerald-400' : 'text-blue-600'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlight 
                ? 'bg-white text-blue-900 hover:bg-slate-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-white rounded-[40px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Not sure which path is right?</h2>
            <p className="text-slate-600 text-lg mb-8">Schedule a discovery call with one of our platform advisors to map your growth strategy.</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Book a Strategy Session
            </button>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-4">
            <div className="w-32 h-32 rounded-3xl bg-blue-50 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-2xl font-bold text-blue-600">500+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Startups</span>
            </div>
            <div className="w-32 h-32 rounded-3xl bg-indigo-50 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-2xl font-bold text-indigo-600">40+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Mentors</span>
            </div>
            <div className="w-32 h-32 rounded-3xl bg-emerald-50 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-2xl font-bold text-emerald-600">$1B+</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Network</span>
            </div>
            <div className="w-32 h-32 rounded-3xl bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-2xl font-bold text-slate-600">100%</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
