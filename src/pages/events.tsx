import { Layout } from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function Events() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <ScrollReveal>
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-6 block">Signature Event</span>
          </ScrollReveal>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.1]">
            <RevealText text="Global Leadership" />
            <br />
            <RevealText text="Summit 2025." delay={0.2} />
          </h1>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-8 mb-10 text-background/80 font-mono text-sm md:text-base uppercase tracking-widest">
              <span className="flex items-center gap-3"><Calendar className="w-5 h-5 text-primary" /> October 12-14, 2025</span>
              <span className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> The Plaza, New York</span>
            </div>
            <Button size="lg" className="rounded-none bg-primary hover:bg-white hover:text-foreground text-white h-14 px-12 text-base border-none transition-colors">
              Secure Early Access
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16 border-b border-border/30 pb-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold">Upcoming <span className="text-primary italic">Experiences</span></h2>
              <Button variant="link" className="hidden md:flex text-primary font-bold uppercase tracking-widest text-xs md:text-sm p-0 gap-3 group">
                View Past Events <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                date: "MAR 15",
                type: "Masterclass",
                title: "Negotiating Like a Board Member",
                loc: "Virtual",
                desc: "A 2-hour tactical teardown of high-stakes negotiation.",
              },
              {
                date: "APR 22",
                type: "Networking",
                title: "London Executive Dinner",
                loc: "Mayfair, London",
                desc: "An intimate, curated dinner for 50 senior executives in finance and tech.",
              },
              {
                date: "MAY 10",
                type: "Awards",
                title: "Empower Her Awards Gala",
                loc: "Los Angeles, CA",
                desc: "Celebrating the most disruptive female founders of the year.",
              },
              {
                date: "JUN 05",
                type: "Retreat",
                title: "Founders Strategy Offsite",
                loc: "Lake Como, Italy",
                desc: "A 3-day deep dive into scaling operations and securing Series B.",
              }
            ].map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border/30 group hover:bg-primary/5 transition-colors relative cursor-pointer px-4">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                  
                  <div className="lg:col-span-2">
                    <div className="font-serif text-4xl font-bold text-primary mb-2 transition-transform group-hover:translate-x-2 duration-300">{event.date.split(' ')[1]}</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground transition-transform group-hover:translate-x-2 duration-300">{event.date.split(' ')[0]}</div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block tracking-widest">{event.type} • {event.loc}</span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-lg md:text-xl text-muted-foreground font-light">{event.desc}</p>
                  </div>
                  
                  <div className="lg:col-span-3 flex items-center lg:justify-end mt-6 lg:mt-0">
                    <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:scale-110">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
