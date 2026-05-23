import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { InteractiveList } from "@/components/ui/interactive-list";
import { Link } from "wouter";

export default function CorporateSolutions() {
  const solutions = [
    {
      id: "custom",
      title: "Custom Programs",
      subtitle: "Bespoke Capability Journeys",
      description: "End-to-end leadership development journeys tailored to your company's specific strategic goals, cultural context, and talent retention metrics.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
      link: "/contact"
    },
    {
      id: "ai",
      title: "AI for Executives",
      subtitle: "Future-Proofing Leadership",
      description: "Demystifying artificial intelligence for senior women leaders. Strategic implementation, ethics, and high-leverage workflows over technical jargon.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
      link: "/contact"
    },
    {
      id: "diversity",
      title: "D&I Excellence",
      subtitle: "Systemic Change Frameworks",
      description: "Actionable Diversity & Inclusion frameworks that move beyond optics to create systemic change, psychological safety, and measurable retention.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      link: "/contact"
    },
    {
      id: "retreats",
      title: "Executive Retreats",
      subtitle: "Immersive Alignment",
      description: "Immersive, high-end off-site experiences designed to forge deep alignment, vulnerability, and strategic clarity among your senior leadership team.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2869&auto=format&fit=crop",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-card relative overflow-hidden border-b border-border/30">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-10 md:opacity-30 mix-blend-multiply">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop" alt="Corporate training" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl ml-auto md:ml-0">
          <ScrollReveal>
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-6 block">B2B Offerings</span>
          </ScrollReveal>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            <RevealText text="Transform Your" />
            <br className="hidden md:block"/>
            <RevealText text="Leadership Pipeline." delay={0.2} />
          </h1>
          <ScrollReveal delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-10 max-w-2xl">
              We partner with forward-thinking organizations to attract, retain, and elevate their top female talent through bespoke capability programs.
            </p>
            <Button size="lg" className="rounded-none bg-primary hover:bg-secondary hover:text-foreground text-white px-10 h-14 text-base" asChild>
              <Link href="/contact">Request Corporate Proposal</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 px-4 md:px-8">
              <RevealText text="Our Solutions" />
            </h2>
          </ScrollReveal>

          <InteractiveList items={solutions} />
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="font-serif text-4xl font-bold mb-8 leading-tight">The ROI of Investing in <span className="text-primary italic">Women</span>.</h2>
              <ul className="space-y-6 mt-8">
                {[
                  "Companies in the top quartile for gender diversity are 25% more likely to have above-average profitability.",
                  "Organizations with women on boards outperform those without by 53% in return on equity.",
                  "Our corporate partners see a 40% increase in retention of senior female talent within 12 months."
                ].map((stat, i) => (
                  <li key={i} className="flex gap-6 items-start group">
                    <div className="text-primary font-mono text-xl mt-1 transition-transform duration-300 group-hover:scale-110">0{i + 1}.</div>
                    <div className="text-muted-foreground font-light text-xl leading-relaxed">{stat}</div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-foreground text-background p-16 h-full flex flex-col justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="font-serif text-4xl font-bold mb-8 relative z-10">Ready to Partner?</h3>
                <p className="text-background/80 mb-12 font-light text-xl relative z-10">
                  Let's discuss how we can build a custom leadership pipeline for your organization that delivers measurable returns.
                </p>
                <Button size="lg" className="rounded-none bg-primary hover:bg-white hover:text-foreground text-white w-full h-14 text-base relative z-10" asChild>
                  <Link href="/contact">Contact Our Enterprise Team</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
