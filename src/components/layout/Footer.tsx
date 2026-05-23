import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative w-full font-sans bg-[#5B0E1A] text-[#F6F1EB] grain-overlay overflow-hidden border-t-4 border-[#D4B06A]">
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4 space-y-6">
            <img src="https://static.wixstatic.com/media/da37d0_751ae24fc03c47b5b2a5d3d3656870e9~mv2.png" alt="Siji Varghese Logo" className="h-20 mb-6 mix-blend-screen" />
            <p className="text-[#F6F1EB]/80 text-sm leading-relaxed max-w-sm">
              Empowering individuals and organizations to grow & shine with purpose. We celebrate Women Leaders.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/siji-varghese-leaders-in-lipstick®-a2921b19/" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://twitter.com/SijiVarghese14" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/channel/UCAaSpw0gxT3ujZay7Xu-JxQ" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="mailto:contact@sijivarghese.com" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <p className="text-[#F6F1EB]/80 text-sm mt-4">
              Email: <a href="mailto:contact@sijivarghese.com" className="hover:text-[#D4B06A]">contact@sijivarghese.com</a>
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl font-bold tracking-tight text-[#D4B06A] mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-sm font-light">Home</Link></li>
              <li><Link href="/about" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-sm font-light">About Us</Link></li>
              <li><Link href="/leadersinlipstick" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-sm font-light">Leaders in Lipstick®</Link></li>
              <li><Link href="/roi" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-sm font-light">ROI</Link></li>
              <li><Link href="/programs" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-sm font-light">Training Programs</Link></li>
              <li className="pl-4 border-l border-[#D4B06A]/30"><Link href="/professional-excellence-series" className="text-[#F9F6F0]/60 hover:text-[#D6B38A] transition-colors text-xs font-light">Professional Excellence Series</Link></li>
              <li className="pl-4 border-l border-[#D4B06A]/30"><Link href="/sales-excellence-series" className="text-[#F9F6F0]/60 hover:text-[#D6B38A] transition-colors text-xs font-light">Sales Excellence Series</Link></li>
              <li className="pl-4 border-l border-[#D4B06A]/30"><Link href="/services-excellence-series" className="text-[#F9F6F0]/60 hover:text-[#D6B38A] transition-colors text-xs font-light">Service Excellence Series</Link></li>
            </ul>
          </div>

          {/* YouTube Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl font-bold tracking-tight text-[#D4B06A] mb-6">Featured Videos</h4>
            <ul className="space-y-4">
              <li><a href="https://youtu.be/wZ74HyPqIso" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-xs font-light leading-relaxed block">Siji Varghese | TEDxLNCTBhopalWomen</a></li>
              <li><a href="https://youtu.be/OkROVDMRSXY" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-xs font-light leading-relaxed block">How to change your Partner every seven years</a></li>
              <li><a href="https://youtu.be/_jWkWiXdKNc" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-xs font-light leading-relaxed block">PSAI Talk Show</a></li>
              <li><a href="http://www.youtube.com/c/KalpeshRaichura" target="_blank" rel="noreferrer" className="text-[#F9F6F0]/80 hover:text-[#D6B38A] transition-colors text-xs font-light leading-relaxed block">The First Guru — A daughter and a mother sharing a platform</a></li>
            </ul>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-xl font-bold tracking-tight text-[#D4B06A] mb-6">Get in Touch</h4>
            <form className="space-y-3" action="https://api.web3forms.com/submit" method="POST">
               <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
               <input type="hidden" name="subject" value="New Contact from SijiVarghese.com" />
               <input type="hidden" name="redirect" value="https://web3forms.com/success" />

               <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  required
                  className="w-full bg-[#F6F1EB]/10 text-white px-4 py-2.5 focus:outline-none placeholder:text-white/40 text-sm border border-white/20 focus:border-[#D4B06A] transition-colors"
               />
               <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  className="w-full bg-[#F6F1EB]/10 text-white px-4 py-2.5 focus:outline-none placeholder:text-white/40 text-sm border border-white/20 focus:border-[#D4B06A] transition-colors"
               />
               <textarea 
                  name="message"
                  placeholder="Message" 
                  rows={3}
                  required
                  className="w-full bg-[#F6F1EB]/10 text-white px-4 py-2.5 focus:outline-none placeholder:text-white/40 text-sm border border-white/20 focus:border-[#D4B06A] transition-colors resize-none"
               />
               <Button type="submit" className="w-full bg-[#D4B06A] hover:bg-[#C7A46C] text-[#5B0E1A] rounded-none py-2.5 h-auto font-bold transition-all text-sm">
                  Submit
               </Button>
            </form>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4B06A]/20 pt-8 text-center flex flex-col items-center">
            <p className="text-[#F6F1EB]/60 text-xs font-light">
               &copy; {new Date().getFullYear()}, Siji Varghese. All rights reserved.
            </p>
        </div>

      </div>
    </footer>
  );
}
