import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, FileText, Headphones } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pt-40 md:pb-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Insights</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">The Boardroom Brief.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Executive strategy, industry analysis, and leadership frameworks delivered straight from the operators who build them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Featured Article */}
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" /> Latest Article
              </h2>
              <div className="group cursor-pointer">
                <div className="aspect-video bg-muted mb-6 overflow-hidden relative">
                  <img src="/workshop.png" alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    Strategy
                  </div>
                </div>
                <h3 className="font-serif text-4xl font-bold mb-4 group-hover:text-primary transition-colors">The End of the Apology Email: Communication Frameworks for the C-Suite</h3>
                <p className="text-lg text-muted-foreground font-light mb-6">Stop diluting your directives with softening language. Here is the exact framework our members use to communicate with unshakeable authority.</p>
                <div className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Sidebar - Podcast & Whitepapers */}
            <div className="md:col-span-4 space-y-12">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-primary" /> The Podcast
                </h2>
                <div className="bg-card border border-border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ep. 42</span>
                    <PlayCircle className="w-8 h-8 text-primary hover:text-primary/80 cursor-pointer" />
                  </div>
                  <h4 className="font-serif font-bold text-lg mb-2">Navigating the Series B Cliff with Sarah Jenkins</h4>
                  <p className="text-sm text-muted-foreground font-light">45 min listen</p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" /> Whitepapers
                </h2>
                <div className="space-y-4">
                  {[
                    "The 2025 Women in Tech Leadership Report",
                    "Structuring D&I for Bottom-Line Impact",
                    "Compensation Negotiation Data & Benchmarks"
                  ].map((title, i) => (
                    <div key={i} className="group cursor-pointer border-b border-border pb-4 last:border-0">
                      <h4 className="font-serif font-bold group-hover:text-primary transition-colors">{title}</h4>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                        Download PDF <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
