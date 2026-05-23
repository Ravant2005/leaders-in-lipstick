import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export interface InteractiveListItemProps {
  id: string | number;
  title: string;
  subtitle?: string;
  description: string;
  details?: { label: string; value: string }[];
  image?: string;
  link?: string;
  actionText?: string;
}

interface InteractiveListProps {
  items: InteractiveListItemProps[];
}

export function InteractiveList({ items }: InteractiveListProps) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const toggleExpand = (id: string | number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full border-t border-border/30">
      {items.map((item, index) => {
        const isExpanded = expandedId === item.id;

        return (
          <ScrollReveal key={item.id} delay={index * 0.1}>
            <div className="group border-b border-border/30 relative">
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <button
                className="w-full text-left py-8 md:py-12 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex-1 max-w-3xl flex items-center gap-6 md:gap-12">
                  <span className="text-muted-foreground/50 font-mono text-sm">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl md:text-5xl font-bold transition-transform duration-500 group-hover:translate-x-4">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-primary mt-2 font-medium tracking-widest uppercase text-xs transition-transform duration-500 group-hover:translate-x-4">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 ml-12 md:ml-0">
                  <div className="hidden lg:block overflow-hidden w-0 opacity-0 group-hover:w-48 group-hover:opacity-100 transition-all duration-700 ease-out h-24 relative rounded-sm">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover absolute inset-0 grayscale"
                      />
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-8 pb-12 pt-4 ml-12 md:ml-[5.5rem] grid lg:grid-cols-2 gap-12 items-start relative z-10">
                      <div>
                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light mb-8">
                          {item.description}
                        </p>
                        {item.link && (
                          <Button size="lg" className="rounded-none bg-primary hover:bg-secondary hover:text-foreground text-white group/btn">
                            {item.actionText || "Learn More"}
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-2" />
                          </Button>
                        )}
                      </div>

                      {item.details && item.details.length > 0 && (
                        <div className="grid grid-cols-2 gap-8 border-l border-border/30 pl-8">
                          {item.details.map((detail, idx) => (
                            <div key={idx}>
                              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-2">
                                {detail.label}
                              </div>
                              <div className="font-serif text-2xl font-bold">
                                {detail.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
