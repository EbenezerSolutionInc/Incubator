
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-slate-950 mb-6">Build With Us</h1>
          <p className="text-xl text-slate-600">
            Join a national platform committed to excellence, innovation, and impact. Whether you're a founder or an ecosystem partner, let's build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@company.ca" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">I am a...</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>Startup Founder</option>
                  <option>Investor</option>
                  <option>Service Provider</option>
                  <option>Other Partner</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="How can we help you build?"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-10 rounded-[40px]">
              <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Email</div>
                    <div className="text-lg">hello@lumina.ca</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Headquarters</div>
                    <div className="text-lg">Toronto, ON, Canada</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 p-10 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-4">Immediate Path</h3>
              <p className="text-blue-100 mb-8">Ready to join the platform today? Start your application directly.</p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Apply as a Startup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
