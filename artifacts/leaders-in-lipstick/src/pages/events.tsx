import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function Events() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/summit.png')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Signature Event</span>
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-6 text-white">Global Leadership Summit 2025.</h1>
          <div className="flex flex-wrap gap-6 mb-10 text-background/80 font-mono text-sm uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> October 12-14, 2025</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> The Plaza, New York</span>
          </div>
          <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white px-10 border-none">
            Secure Early Access
          </Button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
            <h2 className="font-serif text-4xl font-bold">Upcoming Experiences</h2>
            <Button variant="link" className="hidden md:flex text-primary font-bold uppercase tracking-widest text-xs p-0 gap-2">
              View Past Events <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-6">
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
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-card border border-border p-6 md:p-8 hover:border-primary/50 transition-colors group items-center"
              >
                <div className="md:col-span-2">
                  <div className="font-serif text-3xl font-bold text-primary">{event.date.split(' ')[1]}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{event.date.split(' ')[0]}</div>
                </div>
                <div className="md:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{event.type} • {event.loc}</span>
                  <h3 className="font-serif text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground font-light">{event.desc}</p>
                </div>
                <div className="md:col-span-3 text-left md:text-right">
                  <Button variant="outline" className="rounded-none border-foreground hover:bg-foreground hover:text-background w-full md:w-auto">
                    Register
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
