
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MessageSquare } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import GeminiAssistant from './GeminiAssistant';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>LUMINA</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#/apply" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Apply Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t mt-3 p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 border-b pb-2"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#/apply" 
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-bold"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">L</div>
              <span className="text-xl font-bold">LUMINA</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Making Canada the most effective and faith-aligned environment in the world for building enduring startups.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#/platform" className="hover:text-blue-400">Services</a></li>
              <li><a href="#/programs" className="hover:text-blue-400">Accelerator</a></li>
              <li><a href="#/investors" className="hover:text-blue-400">For Investors</a></li>
              <li><a href="#/startups" className="hover:text-blue-400">For Founders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#/faith" className="hover:text-blue-400">Our Ethos</a></li>
              <li><a href="#/resources" className="hover:text-blue-400">Resources</a></li>
              <li><a href="#/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our national innovation newsletter.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:border-blue-500" />
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>&copy; 2024 Lumina Innovation Platform. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="pt-0">
        {children}
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
};
