import { Layout } from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, PlayCircle, FileText, Headphones } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-card border-b border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary uppercase tracking-widest text-sm font-bold mb-6 block">Insights</span>
            </ScrollReveal>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              <RevealText text="The Boardroom" />
              <br className="hidden md:block" />
              <RevealText text="Brief." delay={0.2} />
            </h1>
            <ScrollReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
                Executive strategy, industry analysis, and leadership frameworks delivered straight from the operators who build them.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Featured Article */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                  <FileText className="w-8 h-8 text-primary" /> Latest Article
                </h2>
                <div className="group cursor-pointer">
                  <div className="aspect-[16/9] bg-muted mb-8 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Workshop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest">
                      Strategy
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">The End of the Apology Email: Communication Frameworks for the C-Suite</h3>
                  <p className="text-lg md:text-xl text-muted-foreground font-light mb-6 leading-relaxed">Stop diluting your directives with softening language. Here is the exact framework our members use to communicate with unshakeable authority and exact precision.</p>
                  <div className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar - Podcast & Whitepapers */}
            <div className="lg:col-span-4 space-y-16 pt-8 lg:pt-0">
              <ScrollReveal delay={0.2}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                  <Headphones className="w-6 h-6 text-primary" /> The Podcast
                </h2>
                <div className="bg-card border border-border/50 p-6 group hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Ep. 42</span>
                      <PlayCircle className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="font-serif font-bold text-xl mb-3 leading-snug">Navigating the Series B Cliff with Sarah Jenkins</h4>
                    <p className="text-sm text-muted-foreground font-light uppercase tracking-widest">45 min listen</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                  <FileText className="w-6 h-6 text-primary" /> Whitepapers
                </h2>
                <div className="space-y-6">
                  {[
                    "The 2025 Women in Tech Leadership Report",
                    "Structuring D&I for Bottom-Line Impact",
                    "Compensation Negotiation Data & Benchmarks"
                  ].map((title, i) => (
                    <div key={i} className="group cursor-pointer border-b border-border/30 pb-6 last:border-0 relative">
                      <h4 className="font-serif font-bold text-xl group-hover:text-primary transition-colors leading-snug pr-8">{title}</h4>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                        Download PDF <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
