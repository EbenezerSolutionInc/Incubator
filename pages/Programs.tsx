
import React, { useState } from 'react';
import { MEMBERSHIP_TIERS } from '../constants';
import { Check, ArrowRight, HelpCircle, ShieldCheck, Globe, Zap } from 'lucide-react';

const Programs: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3 fill-current" /> Scalable Access
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-950 mb-8 leading-[1.1]">
            Architected for <span className="text-blue-600 italic font-display">Enduring</span> Success
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From visionary exploration to rapid market dominance, our tiers are designed to provide the right mix of wisdom, resources, and capital access at every pivotal stage of your venture.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              onMouseEnter={() => setSelectedTier(tier.id)}
              className={`relative flex flex-col p-8 rounded-[40px] transition-all duration-500 cursor-default border-2 ${
                tier.id === selectedTier || (tier.highlight && !selectedTier)
                ? 'bg-white text-slate-900 shadow-2xl scale-105 z-10 border-blue-600' 
                : 'bg-white text-slate-900 border-slate-100 hover:border-blue-200'
              } ${tier.highlight && !selectedTier ? 'shadow-xl' : ''}`}
            >
              {tier.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/30">
                  Recommended
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-bold mb-3">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.price !== 'Free' && tier.price !== 'Contact Us' && <span className="text-slate-400 font-medium text-sm">/mo</span>}
                </div>
                <p className={`text-sm leading-relaxed ${tier.id === selectedTier ? 'text-slate-600' : 'text-slate-500'}`}>
                  {tier.description}
                </p>
              </div>
              
              <div className="flex-1 space-y-5 mb-10">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                       tier.id === selectedTier ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                    }`}>
                       <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium text-slate-700 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.hash = '#/apply'}
                className={`w-full py-4 rounded-2xl font-bold transition-all transform active:scale-95 ${
                tier.id === selectedTier || (tier.highlight && !selectedTier)
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20' 
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Feature Comparison / Value Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-950 mb-6 leading-tight">Beyond a Subscription— <br/>A Strategic Partnership.</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Joining Lumina isn't just about accessing tools; it's about entering a high-accountability environment where wisdom-based stewardship is the standard.
              </p>
            </div>
            
            <div className="space-y-8">
               {[
                 { title: "National Vetted Network", desc: "Access 200+ service providers across Canada who share our ethos of excellence.", icon: <Globe className="w-6 h-6 text-blue-600" /> },
                 { title: "Institutional Integrity", desc: "Build on foundations that satisfy the highest levels of due diligence and governance.", icon: <ShieldCheck className="w-6 h-6 text-emerald-600" /> }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[48px] border border-slate-100 shadow-sm relative group">
            <div className="absolute top-0 right-0 p-8">
              <HelpCircle className="w-8 h-8 text-slate-100 group-hover:text-blue-100 transition-colors" />
            </div>
            <h2 className="text-3xl font-bold text-slate-950 mb-8">Frequently Asked</h2>
            <div className="space-y-8">
              {[
                { q: "Is there an equity component?", a: "Lumina is fee-based for Discovery, Builder, and Growth. The Scale/Accelerator program involves an equity partnership based on customized investment terms." },
                { q: "Can I switch tiers?", a: "Yes. Our platform allows seamless movement between Discovery, Builder, and Growth as your venture reaches predefined readiness milestones." },
                { q: "What is the 'Wisdom Component'?", a: "It's our framework of stewardship and integrity integrated into every playbook, mentorship session, and governance module." }
              ].map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-4">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6 items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Still have questions?</p>
                <p className="text-sm text-slate-500">Our advisory team is ready to help.</p>
              </div>
              <button onClick={() => window.location.hash = '#/contact'} className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all flex items-center gap-2">
                Talk to Advisor <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
