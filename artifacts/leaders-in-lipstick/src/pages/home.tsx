import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Briefcase, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 md:bg-background/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img 
            src="/hero-bg.png" 
            alt="Women executives in boardroom" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 border border-primary/30 text-primary uppercase tracking-widest text-xs font-bold mb-6 bg-background/50 backdrop-blur-sm">
                For Women Who Lead
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Own Your <span className="text-primary italic">Power.</span><br/>
                Rule Your Space.
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl font-light">
                A bold, unapologetic community for high-achieving women leaders, executives, and entrepreneurs who are done shrinking themselves.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-none h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/community">Join the Community</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-base border-foreground/20 hover:bg-foreground/5 bg-background/50 backdrop-blur-sm" asChild>
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">The Boardroom is <span className="text-primary italic">Ours</span>.</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
                <p>
                  We don't wait for a seat at the table. We build our own table, and we design the room around it.
                </p>
                <p>
                  Leaders in Lipstick is not a generic networking group. It is an elite accelerator for women who have already broken glass ceilings and are now architecting skyscrapers. 
                </p>
                <p>
                  Whether you're scaling a startup, directing corporate strategy, or pivoting your personal brand, this is where you sharpen your edge among peers who understand the altitude you operate at.
                </p>
              </div>
              <div className="mt-10">
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-bold uppercase tracking-widest text-sm flex items-center gap-2" asChild>
                  <Link href="/about">Read Our Story <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4" />
              <img 
                src="/founder.png" 
                alt="Founder portrait" 
                className="w-full h-auto object-cover relative z-10 aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">The Platform</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Elevate Every Aspect of Your Leadership</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-primary mb-6" />,
                title: "Executive Programs",
                desc: "Intensive masterclasses on negotiation, boardroom influence, and strategic thinking.",
                link: "/programs"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-primary mb-6" />,
                title: "Corporate Solutions",
                desc: "Transform your organization's leadership pipeline with our bespoke diversity and capability training.",
                link: "/corporate-solutions"
              },
              {
                icon: <Users className="w-8 h-8 text-primary mb-6" />,
                title: "Global Community",
                desc: "An exclusive network of 5,000+ top-tier women leaders across 40 countries.",
                link: "/community"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-10 bg-card border border-border hover:border-primary/50 transition-colors"
              >
                {item.icon}
                <h3 className="font-serif text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3">{item.desc}</p>
                <Link href={item.link} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border">
            {[
              { num: "5,000+", label: "Global Members" },
              { num: "$2B+", label: "Member Revenue" },
              { num: "40+", label: "Countries" },
              { num: "150+", label: "Corporate Partners" }
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940')] bg-cover bg-center" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">Ready to Take Your Seat?</h2>
          <p className="text-xl text-background/80 mb-12 font-light">
            Applications for our next cohort are now open. Join the most powerful network of women leaders globally.
          </p>
          <Button size="lg" className="rounded-none h-14 px-10 text-base bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="/community">Apply for Membership</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
