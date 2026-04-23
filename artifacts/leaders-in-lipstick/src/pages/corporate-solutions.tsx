import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, BrainCircuit, Users, Tent } from "lucide-react";

export default function CorporateSolutions() {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-card relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img src="/corporate.png" alt="Corporate training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl ml-0">
          <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">B2B Offerings</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Transform Your Leadership Pipeline.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            We partner with forward-thinking organizations to attract, retain, and elevate their top female talent through bespoke capability programs.
          </p>
          <div className="mt-10">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white px-8">
              Request Corporate Proposal
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Our Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Custom Capability Programs",
                desc: "End-to-end leadership development journeys tailored to your company's specific strategic goals and cultural context."
              },
              {
                icon: <BrainCircuit className="w-8 h-8" />,
                title: "AI for Executives",
                desc: "Demystifying artificial intelligence for senior women leaders. Strategic implementation over technical jargon."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Diversity & Inclusion Excellence",
                desc: "Actionable D&I frameworks that move beyond optics to create systemic change and measurable retention."
              },
              {
                icon: <Tent className="w-8 h-8" />,
                title: "Executive Retreats",
                desc: "Immersive off-site experiences designed to forge deep alignment among your senior leadership team."
              }
            ].map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-card border border-border group hover:border-primary/50 transition-all"
              >
                <div className="text-primary mb-6 bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  {sol.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{sol.title}</h3>
                <p className="text-muted-foreground font-light mb-8">{sol.desc}</p>
                <Button variant="link" className="p-0 text-foreground font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-primary">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">The ROI of Investing in Women.</h2>
              <ul className="space-y-6 mt-8">
                {[
                  "Companies in the top quartile for gender diversity are 25% more likely to have above-average profitability.",
                  "Organizations with women on boards outperform those without by 53% in return on equity.",
                  "Our corporate partners see a 40% increase in retention of senior female talent within 12 months."
                ].map((stat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="text-primary font-bold mt-1">0{i + 1}.</div>
                    <div className="text-muted-foreground font-light text-lg">{stat}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-foreground text-background p-12 text-center">
              <h3 className="font-serif text-3xl font-bold mb-6">Ready to partner?</h3>
              <p className="text-background/80 mb-8 font-light">
                Let's discuss how we can build a custom leadership pipeline for your organization.
              </p>
              <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white w-full">
                Contact Our Enterprise Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
