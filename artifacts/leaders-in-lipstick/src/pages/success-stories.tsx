import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function SuccessStories() {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-card text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">The Impact</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Proof of Concept.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Read how our members and corporate partners have rewritten the rules of their industries.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-10 border border-border relative"
              >
                <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
                <p className="text-xl font-serif leading-relaxed mb-8 relative z-10 pt-4">"{story.quote}"</p>
                <div>
                  <div className="font-bold font-serif text-lg">{story.name}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold mt-1">{story.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
