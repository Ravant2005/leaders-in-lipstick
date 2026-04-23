import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase } from "lucide-react";

export default function Community() {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-card text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">The Inner Circle</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Your Net Worth is Your Network.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light mb-10">
            Join 5,000+ elite women leaders across 40 countries. Share deals, board seats, strategy, and unapologetic ambition.
          </p>
          <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white px-12">
            Apply for Membership
          </Button>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Member Directory Preview</h2>
              <p className="text-muted-foreground font-light max-w-xl">
                A highly vetted global network of operators. Who you need to know is already here.
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search industry or role..."
                  className="w-full bg-card border border-border pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Jenkins", role: "Chief Marketing Officer", company: "FinTech Global", loc: "New York", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
              { name: "Elena Rostova", role: "Founder & CEO", company: "Aura Health", loc: "London", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800" },
              { name: "Michelle Chang", role: "VP of Engineering", company: "Nexus Systems", loc: "San Francisco", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800" },
              { name: "Amira Patel", role: "Partner", company: "Venture Partners", loc: "Singapore", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800" },
              { name: "Dr. Olivia Vance", role: "Chief Medical Officer", company: "BioGen", loc: "Boston", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800" },
              { name: "Priya Sharma", role: "Managing Director", company: "Global Consulting", loc: "Dubai", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 hover:border-primary/50 transition-colors flex items-center gap-4"
              >
                <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                <div>
                  <h3 className="font-bold font-serif text-lg">{member.name}</h3>
                  <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Briefcase className="w-3 h-3" /> {member.role}
                  </div>
                  <div className="text-xs text-muted-foreground/70 flex items-center gap-1 mt-1 uppercase tracking-wider font-bold">
                    <MapPin className="w-3 h-3" /> {member.loc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-none border-border">View Full Directory (Members Only)</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
