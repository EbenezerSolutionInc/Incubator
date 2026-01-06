
import React from 'react';
import { Target, Eye, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold text-slate-950 mb-6">An Institution Built for Builders</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are a Canadian incubator and accelerator founded by three co-founders committed to strengthening businesses, communities, and the national innovation ecosystem. Our work is guided by wisdom, evidence, and a belief that enduring enterprises require both vision and structure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Why This Platform Matters</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Canada has world-class talent, yet founders often face fragmented support systems, unclear pathways to capital, and limited access to trusted mentorship. We exist to remove friction, centralise opportunity, and build an ecosystem where startups can grow with confidence and clarity.
            </p>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                <Heart className="w-6 h-6 text-blue-600" />
                Our Core Values
              </h3>
              <ul className="space-y-4">
                {[
                  { t: "Wisdom", d: "Applying timeless principles to modern market challenges." },
                  { t: "Stewardship", d: "Responsible management of innovation and capital." },
                  { t: "Integrity", d: "Building businesses that stand on ethical foundations." },
                  { t: "Impact", d: "Focusing on enduring value for the community and nation." }
                ].map((val, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></div>
                    <p><span className="font-bold text-slate-900">{val.t}:</span> <span className="text-slate-600">{val.d}</span></p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[40px] overflow-hidden shadow-2xl h-full min-h-[400px]">
               <img src="https://picsum.photos/seed/founders/1000/1200" alt="Founders" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-10 rounded-[40px] shadow-xl max-w-sm hidden md:block">
                <p className="italic text-lg mb-4">"Building something that lasts requires more than just capital—it requires deep-rooted wisdom and a structure that fosters integrity."</p>
                <p className="font-bold">— Lumina Co-Founders</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 border-t border-slate-200">
           <div className="bg-slate-50 p-12 rounded-[40px]">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8">
                 <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                To make Canada the most effective place in the world to build startups that endure—where innovation meets stewardship to drive national prosperity.
              </p>
           </div>
           <div className="bg-slate-950 p-12 rounded-[40px] text-white">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-8">
                 <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                To connect founders to the services, mentorship, data, and investment they need to build profitable, sustainable, ethical, and scalable companies.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
