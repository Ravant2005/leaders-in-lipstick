import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  const members = [
    { name: "Sarah Jenkins", role: "CEO Vita Beauty & Officer", location: "New York", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop" },
    { name: "Dina Batista", role: "SVP, Strategy & CEO", location: "London", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" },
    { name: "Michelle Chan", role: "VP GTM Partnerships", location: "San Francisco", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop" },
    { name: "Amelia Patel", role: "Founder & CEO Patel Finance", location: "London", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop" },
    { name: "Dr. Olivia Yuen", role: "Founder Innovater", location: "Sydney", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop" },
    { name: "Phil Simmons", role: "Founder & Co-founder", location: "Sydney", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#FDFBF7] overflow-hidden">
        <div className="absolute inset-0 right-0 z-0 hidden md:block w-[55%] ml-auto">
           <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/40 to-transparent z-10" />
           <img src={`${import.meta.env.BASE_URL}hero-bg.png`} alt="Women Leaders Networking" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col pt-32 pb-20">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground leading-[1.05] mb-8">
                Your Net Worth<br />Is Your Network.
              </h1>
              <div className="w-20 h-[2px] bg-primary/20 mb-8"></div>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 max-w-lg font-light">
                Join a global circle of women leaders across 40+ countries. Share ideas, build influence, and grow without limits.
              </p>
              
              <Button size="lg" className="rounded-none h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transition-all hover:scale-105" asChild>
                <Link href="/community">Apply for Membership</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white border-y border-border/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="font-serif text-2xl text-foreground/60 mb-12">Trusted by 600+ women leaders across 40+ countries</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
            <span className="font-serif font-bold text-4xl">Forbes</span>
            <div className="text-center border-2 border-current px-3 py-1 leading-none">
              <span className="font-serif font-bold text-2xl">HARVARD</span>
              <span className="block text-[8px] font-sans tracking-[0.2em] mt-0.5">UNIVERSITY</span>
            </div>
            <span className="font-sans font-bold text-4xl flex items-center">Linked<span className="bg-current text-white px-1 ml-0.5 rounded-sm">in</span></span>
            <span className="font-sans font-bold text-3xl tracking-tighter border-l-4 border-current pl-2">TechCrunch</span>
            <span className="font-serif font-bold text-4xl tracking-[0.3em]">VOGUE</span>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary leading-tight">Dream. Define. Do.</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed font-light">
                Leaders in Lipstick® is a catalyst for holistic transformation. We leverage individual and collective potential to open up limitless possibilities, delivering end-to-end L&D solutions with measurable business impact.
              </p>
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8" asChild>
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 border border-secondary/30 translate-x-4 translate-y-4" />
              <img src={`${import.meta.env.BASE_URL}diverse-leaders.png`} alt="Diverse Leaders" className="w-full h-auto object-cover relative z-10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Programs</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Elite Development for Modern Leaders.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Leaders in Lipstick®", desc: "Our flagship program to amplify strengths and drive business impact.", img: `${import.meta.env.BASE_URL}workshop.png` },
              { title: "Behavioural Intelligence", desc: "Master soft skills for enhanced team performance and ROI.", img: `${import.meta.env.BASE_URL}corporate.png` },
              { title: "GenAI for Leaders", desc: "Future-proof your leadership with strategic AI implementation.", img: `${import.meta.env.BASE_URL}speaker.png` }
            ].map((program, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group bg-[#FDFBF7] border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-primary">{program.title}</h3>
                  <p className="text-foreground/60 mb-8 text-sm leading-relaxed">{program.desc}</p>
                  <Link href="/programs" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Program <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-24 bg-[#310103] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <img src={`${import.meta.env.BASE_URL}summit.png`} alt="Corporate Summit" className="w-full h-auto shadow-2xl" />
            </div>
            <div className="md:w-1/2">
              <span className="text-secondary uppercase tracking-widest text-sm font-bold mb-4 block">For Organizations</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">Bespoke Training. Quantifiable Results.</h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
                Leveraging our 5D Framework—Diagnose, Dream, Design, Deliver, Deploy—we partner with organizations to build high-performance cultures and resilient leadership pipelines.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2 text-secondary">D&I Strategy</h4>
                  <p className="text-white/50 text-xs">Measurable outcomes for inclusive growth.</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2 text-secondary">AI for Execs</h4>
                  <p className="text-white/50 text-xs">Future-proofing leadership with technology.</p>
                </div>
              </div>
              <Button className="rounded-none bg-secondary text-primary hover:bg-white px-8" asChild>
                <Link href="/corporate-solutions">View Corporate Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Directory Preview Section */}
      <section className="py-24 bg-background pb-32 border-b border-border/10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#5c0a11] mb-3">Member Directory Preview</h2>
              <p className="text-foreground/70 text-sm max-w-lg leading-relaxed">A glimpse of the global powerhouses you could meet in our elite network of women leaders.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search directory names..." className="pl-10 w-full py-2 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-border/50 text-sm focus:outline-none focus:border-secondary transition-colors text-foreground/70" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-5 p-6 bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                style={{ border: '1px solid #EBE4D5' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary/50 group-hover:bg-secondary transition-colors" />
                <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full object-cover shrink-0 filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90" />
                <div>
                  <h3 className="font-serif font-bold text-foreground text-[17px] leading-tight text-primary">{member.name}</h3>
                  <p className="text-[10px] font-bold text-foreground/60 mt-1 mb-2 uppercase tracking-[0.15em]">{member.role}</p>
                  <p className="text-[12px] text-muted-foreground flex items-center gap-1 font-sans">
                    <MapPin className="w-3 h-3 opacity-50" /> {member.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & CTA Dual Section */}
      <section className="bg-primary relative overflow-hidden text-primary-foreground border-b-[20px] border-[#310103]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5c0a11] via-[#48080C] to-[#2E0507] opacity-95 z-0" />
        <img src={`${import.meta.env.BASE_URL}networking.png`} alt="Networking" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Box: Stats */}
            <div className="w-full lg:w-[55%] py-24 lg:py-32 lg:pr-16 lg:border-r lg:border-white/10">
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                The ROI of<br />Investing in Women.
              </h2>
              <p className="text-white/70 mb-16 max-w-md leading-relaxed text-lg font-light">
                Our ecosystem provides measurable growth for women leaders and the organizations that support them.
              </p>

              <div className="space-y-12">
                {[
                  "Companies with female executive leadership are 21% more likely to have average profitability.",
                  "Organizations with gender balanced cultures achieve 41% greater return on equity.",
                  "Our corporate partners see a 40% increase in market share for female client initiatives."
                ].map((stat, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="shrink-0 mt-1 relative">
                      <div className="bg-white/10 border border-white/20 w-8 h-8 flex items-center justify-center rounded-full text-white/60 text-sm group-hover:bg-white/20 transition-colors">
                        ?
                      </div>
                    </div>
                    <p className="text-white/90 font-light text-base md:text-lg leading-relaxed max-w-md">{stat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Floating CTA */}
            <div className="w-full lg:w-[45%] flex items-center justify-center py-20 lg:py-0 lg:pl-16">
              <div className="bg-[#2A0508] p-12 md:p-16 w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] relative border border-white/5">
                <h3 className="font-serif text-4xl font-bold text-white mb-8 text-center">Ready to join forces?</h3>
                <p className="text-white/60 text-base leading-loose mb-12 text-center font-light">
                  Let's redefine business narratives. Level up your circle and ignite your influence.
                </p>
                <Button size="lg" className="w-full rounded-none h-16 bg-[#D4AF37] hover:bg-[#C5A028] text-[#2A0508] font-sans font-bold tracking-widest text-sm uppercase shadow-2xl border-none transition-all hover:scale-[1.02]" asChild>
                  <Link href="/community">Apply for Membership</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
