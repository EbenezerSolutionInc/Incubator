
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  Briefcase, 
  Bell, 
  Search, 
  Settings,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  // Fix: Added Globe to the imported icons from lucide-react
  Globe
} from 'lucide-react';
import { getBuilderAdvice } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const [wisdom, setWisdom] = useState<string>("Loading daily strategic wisdom...");
  const [isRaising, setIsRaising] = useState(true);

  useEffect(() => {
    const fetchWisdom = async () => {
      const advice = await getBuilderAdvice("Give me a 'Wisdom of the Day' for a startup founder. Keep it short, strategic, and based on Proverbs 24:3-4. One sentence only.");
      setWisdom(advice);
    };
    fetchWisdom();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 p-6 flex-col sticky top-24 h-[calc(100vh-6rem)]">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xl">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white text-sm">L</div>
            LUMINA
          </div>
        </div>
        
        <nav className="space-y-2 flex-1">
          {[
            { icon: <LayoutDashboard className="w-5 h-5" />, label: "Overview", active: true },
            { icon: <Briefcase className="w-5 h-5" />, label: "Venture Profile", href: "#/startups" },
            { icon: <Users className="w-5 h-5" />, label: "Mentors" },
            { icon: <TrendingUp className="w-5 h-5" />, label: "Capital Center", href: "#/investors" },
            { icon: <Zap className="w-5 h-5" />, label: "Marketplace", href: "#/platform" },
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href || "#/dashboard"}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                item.active ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto p-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[24px] text-white shadow-xl">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Membership</p>
          <p className="text-sm font-bold mb-3 flex items-center gap-2">
            Growth Tier <ShieldCheck className="w-4 h-4 text-blue-400" />
          </p>
          <div className="w-full bg-white/10 h-1.5 rounded-full mb-4">
            <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
          </div>
          <button className="text-[10px] bg-white text-slate-950 w-full py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-all">
            Upgrade Plan
          </button>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Shalom, Founder</h1>
            <p className="text-slate-500 mt-1">"Everest AI" traction is currently in the top 5% of its cohort.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <button className="p-3 hover:bg-slate-50 rounded-xl relative transition-colors group">
              <Bell className="w-5 h-5 text-slate-500 group-hover:text-blue-600" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3 pr-2 pl-1 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center font-bold text-blue-700 transition-transform group-hover:scale-105">JD</div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Jean Dupont</p>
                <p className="text-[10px] text-slate-500">Everest AI</p>
              </div>
            </div>
          </div>
        </header>

        {/* Wisdom of the Day Banner */}
        <div className="mb-10 bg-white border border-blue-100 rounded-[32px] p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:rotate-6 transition-transform">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Wisdom for Building</h3>
            <p className="text-lg text-slate-800 font-medium italic">"{wisdom}"</p>
          </div>
          <button className="ml-auto bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap hover:bg-blue-700 transition-colors">
            Ask AI Advisor
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Trust Score", value: "92/100", trend: "+5%", icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />, color: "emerald" },
            { label: "Investor Views", value: "48", trend: "+12%", icon: <Users className="w-6 h-6 text-blue-600" />, color: "blue" },
            { label: "Readiness", value: "Seed+", trend: "Series A", icon: <TrendingUp className="w-6 h-6 text-indigo-600" />, color: "indigo" },
            { label: "Vetted Tasks", value: "03", trend: "High Priority", icon: <Zap className="w-6 h-6 text-amber-600" />, color: "amber" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 bg-slate-50 rounded-2xl`}>{stat.icon}</div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                  stat.color === 'emerald' ? 'text-emerald-600 bg-emerald-50' : 
                  stat.color === 'blue' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 bg-slate-50'
                }`}>{stat.trend}</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Venture Profile Card */}
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Venture Signaling Hub</h2>
                    <Settings className="w-5 h-5 text-slate-400 cursor-pointer hover:rotate-90 transition-transform" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-100 transition-all">
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Raising Status</p>
                       <div className="flex items-center gap-3 mb-4">
                         <div className={`w-3 h-3 rounded-full ${isRaising ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                         <span className="font-bold text-slate-900">{isRaising ? 'Actively Raising' : 'Paused'}</span>
                       </div>
                       <div className="space-y-2">
                          <p className="text-sm text-slate-600 flex justify-between"><span>Target:</span> <span className="font-bold">$1.5M CAD</span></p>
                          <p className="text-sm text-slate-600 flex justify-between"><span>Committed:</span> <span className="font-bold text-blue-600">$450k</span></p>
                       </div>
                       <div className="mt-4 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full w-[30%]"></div>
                       </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-100 transition-all">
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Active Signals</p>
                       <div className="flex flex-wrap gap-2 mb-4">
                         <span className="text-[10px] bg-blue-100 text-blue-700 px-3 py-1.5 rounded-xl font-bold">Product-Market Fit</span>
                         <span className="text-[10px] bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-xl font-bold">Unit Economics +</span>
                         <span className="text-[10px] bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-xl font-bold">Governance Vetted</span>
                       </div>
                       <p className="text-[11px] text-slate-500 leading-relaxed italic">
                         "Your Trust Score is visible to 12 family offices in the national network."
                       </p>
                    </div>
                  </div>
                  <button className="w-full bg-slate-950 text-white py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-lg shadow-slate-900/20">
                    Update Signaling Data
                  </button>
               </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
               <div className="flex justify-between items-center mb-8">
                 <h2 className="text-2xl font-bold">Platform Marketplace</h2>
                 <button className="text-sm font-bold text-blue-600 hover:text-blue-700">View Catalog</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { type: "Legal", desc: "Convert SAFE to Equity Agreement", status: "Active", partner: "Osler Legal" },
                   { type: "Finance", desc: "Q4 Fractional CFO Audit", status: "Scheduled", partner: "Blueprint Finance" },
                   { type: "Talent", desc: "CTO Recruiting Support", status: "In Progress", partner: "Lumina HR" },
                   { type: "Cloud", desc: "Infrastructure Credits Activation", status: "Complete", partner: "AWS Canada" }
                 ].map((req, i) => (
                   <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-[24px] hover:bg-white border border-transparent hover:border-slate-200 transition-all group">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-bold text-blue-600 text-sm shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">{req.type[0]}</div>
                        <div>
                           <p className="text-sm font-bold text-slate-900">{req.type}</p>
                           <p className="text-[11px] text-slate-500">{req.desc}</p>
                           <p className="text-[10px] text-blue-600 font-medium mt-1">Partner: {req.partner}</p>
                        </div>
                     </div>
                     <span className={`text-[9px] font-bold px-3 py-1 rounded-full ${
                       req.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                       req.status === 'Complete' ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-700'
                     }`}>{req.status}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Sidebar - Ecosystem Feed */}
          <div className="space-y-8">
            <div className="bg-slate-950 text-white rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                National Pulse
              </h2>
              <div className="space-y-8">
                {[
                  { time: "2h ago", text: "New Angel Network from Vancouver joined." },
                  { time: "5h ago", text: "Toronto Founder Group meetup announced for Oct 15." },
                  { time: "1d ago", text: "Wisdom Module: Updated IP protection templates released." },
                  { time: "2d ago", text: "Founder Spotlight: Sarah at BioGen secured Seed round." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className="w-px bg-white/10 absolute left-0 top-6 bottom-[-2rem]"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 z-10"></div>
                    <div>
                      <p className="text-xs text-white/40 font-bold mb-1">{item.time}</p>
                      <p className="text-sm text-white/90 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-12 w-full py-4 rounded-2xl border border-white/10 text-sm font-bold hover:bg-white/5 transition-all">
                Access Ecosystem Hub
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-[40px] p-8 text-center shadow-xl shadow-blue-600/20 group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] opacity-20"></div>
               <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[24px] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Accelerator Path</h3>
                  <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                    "Everest AI" has cleared 8/10 readiness milestones. You are eligible for the Q4 Scale cohort.
                  </p>
                  <button className="bg-white text-blue-600 w-full py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:translate-y-[-2px] transition-all">
                    Apply to Scale Program
                  </button>
               </div>
            </div>
            
            <div className="bg-white border border-slate-100 rounded-[32px] p-6 text-center">
               <MessageSquare className="w-6 h-6 text-slate-300 mx-auto mb-4" />
               <p className="text-sm font-bold text-slate-900 mb-1">Need Strategic Advice?</p>
               <p className="text-xs text-slate-500 mb-4 leading-relaxed">Chat with your Wisdom Assistant for founder-specific guidance.</p>
               <button onClick={() => window.location.hash = '#/dashboard'} className="text-blue-600 text-xs font-bold hover:underline">Open Builder Assistant</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
