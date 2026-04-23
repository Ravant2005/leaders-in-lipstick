import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#310103] text-white pt-24 pb-12 border-t-[1px] border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="col-span-1 md:col-span-4">
            <Link href="/" className="block mb-8">
              <span className="font-serif font-bold text-3xl tracking-tighter text-white">
                Leaders in Lipstick
              </span>
            </Link>
            <p className="text-white/60 text-base leading-loose mb-10 font-light">
              A bold, unapologetic community for high-achieving women leaders, executives, and entrepreneurs who are done shrinking themselves.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-serif font-bold text-xl mb-8">Explore</h4>
            <ul className="space-y-5">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm font-light">Our Story</Link></li>
              <li><Link href="/programs" className="text-white/60 hover:text-white transition-colors text-sm font-light">Programs</Link></li>
              <li><Link href="/events" className="text-white/60 hover:text-white transition-colors text-sm font-light">Summits & Events</Link></li>
              <li><Link href="/success-stories" className="text-white/60 hover:text-white transition-colors text-sm font-light">Success Stories</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-serif font-bold text-xl mb-8">Solutions</h4>
            <ul className="space-y-5">
              <li><Link href="/corporate-solutions" className="text-white/60 hover:text-white transition-colors text-sm font-light">Corporate Training</Link></li>
              <li><Link href="/community" className="text-white/60 hover:text-white transition-colors text-sm font-light">Membership</Link></li>
              <li><Link href="/resources" className="text-white/60 hover:text-white transition-colors text-sm font-light">Insights & Resources</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm font-light">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h4 className="font-serif font-bold text-xl mb-8">The Boardroom Brief</h4>
            <p className="text-white/60 text-sm mb-6 font-light leading-relaxed">
              Subscribe for exclusive executive insights and early access to events.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-secondary w-full text-white"
              />
              <Button className="rounded-none bg-[#D4AF37] text-[#310103] hover:bg-white transition-all font-bold px-6">Join</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Leaders in Lipstick. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
