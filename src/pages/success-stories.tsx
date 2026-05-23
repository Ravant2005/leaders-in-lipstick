import { Layout } from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Quote } from "lucide-react";

export default function SuccessStories() {
  return (
    <Layout>
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-card text-center relative overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <ScrollReveal>
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-6 block">The Impact</span>
          </ScrollReveal>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            <RevealText text="Proof of Concept." />
          </h1>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-10">
              Read how our members and corporate partners have rewritten the rules of their industries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="space-y-32">
            {[
              {
                quote: "Before the Boardroom Mentorship program, I was waiting to be noticed. After 6 months, I negotiated a Chief Strategy Officer role with a 40% compensation increase.",
                name: "Diana T.",
                role: "Chief Strategy Officer, Global Retail",
              },
              {
                quote: "The Leaders in Lipstick network is unparalleled. I met my co-founder at the London dinner, and within a year we secured $5M in seed funding.",
                name: "Maria S.",
                role: "Co-Founder, HealthTech AI",
              },
              {
                quote: "We brought their custom capability program to our female VP cohort. In one year, our retention of senior women increased by 60%, and three were promoted to the C-Suite.",
                name: "James L.",
                role: "CEO, Enterprise Software Co.",
              },
              {
                quote: "This isn't just inspiration—it's tactical execution. The negotiation masterclass alone generated an immediate 7-figure return for my agency's contracts.",
                name: "Sarah W.",
                role: "Founder, Creative Agency",
              }
            ].map((story, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div className="relative border-l-2 border-primary/30 pl-6 md:pl-12 py-4 group hover:border-primary transition-colors duration-500">
                  <Quote className="w-12 h-12 text-primary/10 absolute -left-6 -top-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-primary/20" />
                  <p className="text-2xl md:text-4xl font-serif leading-relaxed md:leading-tight mb-8 relative z-10 text-foreground/90">"{story.quote}"</p>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-1 bg-primary/30 group-hover:bg-primary group-hover:w-20 transition-all duration-500"></div>
                    <div>
                      <div className="font-bold font-serif text-xl">{story.name}</div>
                      <div className="text-xs text-primary uppercase tracking-widest font-bold mt-1">{story.role}</div>
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
