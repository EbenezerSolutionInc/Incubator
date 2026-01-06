
import React from 'react';
import { LayoutDashboard, TrendingUp, Users, ShieldCheck, Zap, Briefcase, Bell, Search, Settings } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 bg-white border-r border-slate-200 p-6 flex-col">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xl">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white text-sm">L</div>
            LUMINA
          </div>
        </div>
        
        <nav className="space-y-2 flex-1">
          {[
            { icon: <LayoutDashboard className="w-5 h-5" />, label: "Overview", active: true },
            { icon: <Briefcase className="w-5 h-5" />, label: "Venture Profile" },
            { icon: <Users className="w-5 h-5" />, label: "Mentors" },
            { icon: <TrendingUp className="w-5 h-5" />, label: "Capital Center" },
            { icon: <Zap className="w-5 h-5" />, label: "Service Marketplace" },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              item.active ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}>
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-slate-950 rounded-2xl text-white">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Membership</p>
          <p className="text-sm font-bold mb-3">Growth Tier</p>
          <button className="text-[10px] bg-white/10 w-full py-2 rounded-lg hover:bg-white/20 transition-all">Upgrade Plan</button>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Founder</h1>
            <p className="text-slate-500">Your venture "Everest AI" is trending in the ecosystem.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white border border-slate-200 rounded-xl relative">
              <Bell className="w-5 h-5 text-slate-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 border-2 border-white shadow-sm">JD</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Trust Score", value: "92/100", trend: "+5%", icon: <ShieldCheck className="w-6 h-6 text-emerald-600" /> },
            { label: "Investor Views", value: "48", trend: "+12%", icon: <Users className="w-6 h-6 text-blue-600" /> },
            { label: "Readiness", value: "Ready", trend: "Series A", icon: <TrendingUp className="w-6 h-6 text-indigo-600" /> },
            { label: "Pending Tasks", value: "3", trend: "High Priority", icon: <Zap className="w-6 h-6 text-amber-600" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-2xl">{stat.icon}</div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.trend}</span>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Venture Profile Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
               <h2 className="text-2xl font-bold mb-6">Venture Signaling</h2>
               <div className="space-y-6">
                 <div className="flex flex-col md:flex-row gap-6">
                   <div className="flex-1 p-6 bg-slate-50 rounded-3xl">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Raising Status</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="font-bold text-slate-900">Actively Raising</span>
                      </div>
                      <p className="text-sm text-slate-600">Target: $1.5M CAD</p>
                   </div>
                   <div className="flex-1 p-6 bg-slate-50 rounded-3xl">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Trust Markers</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">Vetted Team</span>
                        <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-bold">Revenue Proved</span>
                        <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-1 rounded font-bold">IP Registered</span>
                      </div>
                   </div>
                 </div>
                 <button className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all">
                   Manage Investment Signaling
                 </button>
               </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
               <h2 className="text-2xl font-bold mb-6">Service Requests</h2>
               <div className="space-y-4">
                 {[
                   { type: "Legal", desc: "Convert SAFE to Equity Agreement", status: "In Progress" },
                   { type: "Accounting", desc: "Q4 Tax Compliance Filing", status: "Pending" },
                   { type: "Marketing", desc: "National Expansion Launch Deck", status: "New" }
                 ].map((req, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-blue-600 text-xs shadow-sm">{req.type[0]}</div>
                        <div>
                           <p className="text-sm font-bold text-slate-900">{req.type}</p>
                           <p className="text-xs text-slate-500">{req.desc}</p>
                        </div>
                     </div>
                     <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                       req.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'
                     }`}>{req.status}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Sidebar - Ecosystem Feed */}
          <div className="space-y-8">
            <div className="bg-slate-950 text-white rounded-[40px] p-8">
              <h2 className="text-xl font-bold mb-6">Ecosystem Feed</h2>
              <div className="space-y-6">
                {[
                  "New Angel Network joined the platform.",
                  "Toronto Founder Group meeting tomorrow.",
                  "Wisdom Module: New legal templates available.",
                  "Founder Spotlight: Sarah from BioGen Canada."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 border-l-2 border-white/10 pl-4">
                    <div className="text-sm text-white/70">{item}</div>
                  </div>
                ))}
              </div>
              <button className="mt-8 text-blue-400 text-sm font-bold hover:text-blue-300 transition-colors">View All Activities</button>
            </div>

            <div className="bg-blue-600 text-white rounded-[40px] p-8 text-center">
               <Zap className="w-10 h-10 mx-auto mb-4" />
               <h3 className="text-xl font-bold mb-2">Accelerator Ready?</h3>
               <p className="text-blue-100 text-sm mb-6">You've hit 90% of your current milestones. Apply for the Scale program.</p>
               <button className="bg-white text-blue-600 w-full py-4 rounded-2xl font-bold text-sm shadow-xl shadow-blue-900/20">Apply to Accelerator</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
