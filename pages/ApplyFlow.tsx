
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Rocket, Users, ShieldCheck } from 'lucide-react';

const ApplyFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 max-w-2xl mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Application Submitted</h1>
        <p className="text-xl text-slate-600 mb-10">
          Your venture is now being reviewed by our national advisory board. We will reach out within 5-7 business days.
        </p>
        <a href="#/dashboard" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
          Explore Founder Dashboard
        </a>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-slate-900">Startup Application</h1>
            <span className="text-slate-500 font-medium">Step {step} of 3</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Venture Overview</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Venture Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4" placeholder="e.g. Lumina Tech" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">One-Sentence Pitch</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4" placeholder="What problem are you solving?" rows={3}></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Current Stage</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4">
                    <option>Idea / Validation</option>
                    <option>MVP Built</option>
                    <option>Generating Revenue</option>
                    <option>Scaling / Growth</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold">Founder Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Lead Founder Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Founder Experience</label>
                  <textarea className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4" rows={4} placeholder="Tell us about your background and why you're building this."></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold">Capital & Goals</h2>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <p className="text-blue-800 text-sm font-medium italic">
                    "Wisdom builds what innovation alone cannot sustain." – How do you plan to incorporate integrity into your company culture?
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Are you currently raising capital?</label>
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 bg-slate-50 rounded-2xl font-bold hover:bg-blue-100 hover:text-blue-700 transition-all">Yes</button>
                    <button className="flex-1 py-4 bg-slate-50 rounded-2xl font-bold hover:bg-blue-100 hover:text-blue-700 transition-all">No</button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase">Primary Goal for Joining Lumina</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4">
                    <option>Access to Capital</option>
                    <option>Strategic Mentorship</option>
                    <option>Technical Infrastructure</option>
                    <option>Governance & Structure</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-between">
            {step > 1 ? (
              <button onClick={prevStep} className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-950 transition-colors">
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            ) : <div></div>}
            
            {step < 3 ? (
              <button onClick={nextStep} className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button onClick={() => setIsSubmitted(true)} className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyFlow;
