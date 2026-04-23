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
                  To be the catalyst in the Learning & Development space, delivering end-to-end solutions that have a direct and holistic impact on business results, team performances, and individual efficacies.
                </p>
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground">The Vision</h3>
                    <p className="text-sm">Leveraging individual and collective potential to open up limitless possibilities for women globally.</p>
                  </div>
                  <div>
                    <Globe className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground">The 5D Framework</h3>
                    <p className="text-sm">Our unique methodology: Diagnose, Dream, Design, Deliver, and Deploy.</p>
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
              <h2 className="font-serif text-4xl font-bold mb-6">Siji Varghese</h2>
              <p className="text-xl font-serif text-foreground/80 italic mb-8">
                "Why Fit in when you are born to Stand-out. Dream-Define-Do."
              </p>
              <div className="space-y-4 text-muted-foreground font-light mb-8 leading-loose">
                <p>
                  Siji Varghese is a Behavioral Change & ROI Consultant, Global Professional Speaker, and TEDx Speaker. She is a recipient of the prestigious UN Karmaveer Chakra award.
                </p>
                <p>
                  As the Founder of Leaders in Lipstick®, she delivers end-to-end solutions in the L&D space that have a direct and holistic impact on business results. Her highly experiential interventions are powered by strategy and backed by over 14 years of refining the craft.
                </p>
                <p>
                  She specializes in helping businesses turn capability gaps into performance breakthroughs, leveraging individual and collective potential to open up limitless possibilities.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-primary/5 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/10">TEDx Speaker</span>
                <span className="bg-primary/5 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/10">UN Karmaveer Chakra</span>
                <span className="bg-primary/5 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/10">ROI Consultant</span>
              </div>
              <Button asChild className="rounded-none bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Book for Speaking</Link>
              </Button>
            </motion.div>

            <div className="order-first md:order-last">
              <img src={`${import.meta.env.BASE_URL}founder.png`} alt="Siji Varghese" className="w-full h-[700px] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Our 5D Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Designed for people, built for impact. Our framework ensures measurable success.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { title: "Diagnose", desc: "Capability gap analysis." },
              { title: "Dream", desc: "Future state visualization." },
              { title: "Design", desc: "Bespoke solution architecting." },
              { title: "Deliver", desc: "Facilitator-led execution." },
              { title: "Deploy", desc: "Deployment & ROI tracking." }
            ].map((m, i) => (
              <div key={i} className="p-8 border border-border bg-card hover:border-primary/30 transition-all text-center">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full mx-auto mb-6 font-serif font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
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
