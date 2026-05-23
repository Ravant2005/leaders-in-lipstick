import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, FileText, Users, LogOut, Video, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Portal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Mock data for the dashboard
  const user = { name: "Sarah Jenkins", cohort: "Spring 2026" };

  const sidebarLinks = [
    { label: "My Dashboard", active: true },
    { label: "Resources", active: false },
    { label: "My Cohort", active: false },
    { label: "Community", active: false },
    { label: "Events", active: false },
    { label: "Profile", active: false },
  ];

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-300 flex flex-col md:flex-row font-sans relative overflow-x-hidden">
      
      {/* Mobile Top Navigation Header */}
      <header className="md:hidden w-full bg-[#0A192F] border-b border-slate-800 px-6 py-4 flex items-center justify-between z-30 sticky top-0">
        <Link href="/">
          <span className="font-serif text-lg font-bold text-[#8B1026] tracking-tight cursor-pointer">Leaders in Lipstick</span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-[#8B1026] transition-colors p-1"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Backdrop Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-[#0A192F] border-r border-slate-700 flex flex-col p-6 z-40 transition-transform duration-300 md:translate-x-0 md:static md:h-screen md:sticky md:top-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-12 flex justify-between items-center">
          <Link href="/">
            <span className="font-serif text-xl font-bold text-[#8B1026] tracking-tight cursor-pointer">Leaders in Lipstick</span>
          </Link>
          <button 
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Navigation</p>
          {sidebarLinks.map((link, i) => (
            <a 
              key={i} 
              href="#" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-sm text-sm transition-colors ${
                link.active 
                  ? "bg-[#8B1026] text-white font-medium" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-700">
          <a href="/" className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 bg-[#0A192F]">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl text-white font-serif tracking-tight">Welcome back, {user.name}</h1>
              <p className="text-slate-400 mt-2">Next live session: May 25, 2026</p>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#8B1026]">
              <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user.name}`} alt="Profile" className="w-full h-full object-cover bg-slate-800" />
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Column (Resources & Community stats) */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-[#112240] border border-slate-700 p-8 rounded-sm hover:border-slate-500 transition-colors">
                <h3 className="text-white text-lg font-serif mb-6 flex items-center gap-3">
                  <FileText className="text-[#8B1026] w-5 h-5" /> 
                  Recent Resources
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                    <span className="text-sm">Q2 Leadership Framework Toolkit</span>
                    <span className="text-xs text-[#8B1026] uppercase tracking-widest font-bold">PDF</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                    <span className="text-sm">Negotiation Tactics Workshop Recording</span>
                    <span className="text-xs text-[#8B1026] uppercase tracking-widest font-bold">Video</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                    <span className="text-sm">Executive Presence Checklist</span>
                    <span className="text-xs text-[#8B1026] uppercase tracking-widest font-bold">Doc</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#112240] border border-slate-700 p-6 rounded-sm">
                  <h4 className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-2">Resources</h4>
                  <p className="text-3xl text-white font-serif">24</p>
                  <p className="text-xs text-slate-500 mt-2">Items available</p>
                </div>
                <div className="bg-[#112240] border border-slate-700 p-6 rounded-sm">
                  <h4 className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-2">Community</h4>
                  <p className="text-3xl text-white font-serif">4,985</p>
                  <p className="text-xs text-slate-500 mt-2">Active members</p>
                </div>
              </div>
            </div>

            {/* Right Column (Upcoming Events) */}
            <div className="bg-[#112240] border border-slate-700 p-8 rounded-sm h-full">
              <h3 className="text-white text-lg font-serif mb-6 flex items-center gap-3">
                <Calendar className="text-[#8B1026] w-5 h-5" /> 
                Upcoming Events
              </h3>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-[#8B1026] text-xs font-bold uppercase tracking-widest mb-1">May 25</p>
                  <p className="text-sm text-white group-hover:text-[#8B1026] transition-colors">Global Virtual Summit</p>
                  <p className="text-xs text-slate-500 mt-1">9:00 AM EST • Zoom</p>
                </div>
                
                <div className="group cursor-pointer">
                  <p className="text-[#8B1026] text-xs font-bold uppercase tracking-widest mb-1">Jun 12</p>
                  <p className="text-sm text-white group-hover:text-[#8B1026] transition-colors">Workshop Exec. Presence</p>
                  <p className="text-xs text-slate-500 mt-1">2:00 PM EST • In-person / NYC</p>
                </div>

                <div className="group cursor-pointer">
                  <p className="text-[#8B1026] text-xs font-bold uppercase tracking-widest mb-1">Jun 28</p>
                  <p className="text-sm text-white group-hover:text-[#8B1026] transition-colors">Networking Night</p>
                  <p className="text-xs text-slate-500 mt-1">6:00 PM GMT • London</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <a href="#" className="text-sm text-[#8B1026] hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest font-bold">
                  View full calendar
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
