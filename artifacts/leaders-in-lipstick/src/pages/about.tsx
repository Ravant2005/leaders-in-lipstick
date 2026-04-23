import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Globe, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)` }}></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Redefining What Power Looks Like.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              We are a collective of visionaries, operators, and disruptors. We believe that when women lead authentically, industries transform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-primary/20 -translate-x-4 -translate-y-4" />
              <img src={`${import.meta.env.BASE_URL}diverse-leaders.png`} alt="Diverse women leaders" className="w-full h-auto object-cover relative z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-bold mb-8">The Mission</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  To accelerate the ascent of women into the highest echelons of leadership globally by providing elite strategy, untethered networks, and unapologetic advocacy.
                </p>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground">The Vision</h3>
                    <p className="text-sm">A global economy where the boardroom perfectly reflects the world it serves.</p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground">The Scale</h3>
                    <p className="text-sm">Impacting 100,000 executive careers by 2030 across all major industries.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">The Founder</span>
              <h2 className="font-serif text-4xl font-bold mb-6">Alexandra Sterling</h2>
              <p className="text-xl font-serif text-foreground/80 italic mb-8">
                "We don't need another lean-in seminar. We need a takeover strategy."
              </p>
              <div className="space-y-4 text-muted-foreground font-light mb-8">
                <p>
                  After 15 years navigating the sharpest corners of Fortune 500 boardrooms, Alexandra realized the missing link wasn't capability—it was capital-P Power.
                </p>
                <p>
                  She founded Leaders in Lipstick to bridge the gap between being excellent at your job and commanding the room. Today, she advises global CEOs and architects leadership frameworks for top-tier enterprises.
                </p>
              </div>
              <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Book for Speaking</Link>
              </Button>
            </motion.div>

            <div className="order-first md:order-last">
              <img src={`${import.meta.env.BASE_URL}founder.png`} alt="Alexandra Sterling" className="w-full h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Media & Partners */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-muted-foreground uppercase tracking-widest text-sm font-bold mb-12 block">Recognized By</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-serif font-bold">FORBES</div>
            <div className="text-2xl font-serif font-bold">WSJ</div>
            <div className="text-2xl font-serif font-bold">BLOOMBERG</div>
            <div className="text-2xl font-serif font-bold">FAST COMPANY</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
