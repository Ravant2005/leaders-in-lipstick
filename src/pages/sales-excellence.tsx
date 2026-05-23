import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const workshops = [
  { title: "The 212 Sales Professional", desc: "A workshop that focuses on building basic sales capabilities and paradigms and assess one self on some critical competencies" },
  { title: "Consultative Selling", desc: "Selling keeping in mind the needs and aspirations of the customer" },
  { title: "NegoInfluencing Skills", desc: "A workshop that focuses primary on the psychology and skills of negotiations using your influencing styles, skills and strategy" },
  { title: "The Adaptable Sales Professional", desc: "A workshop that helps explore one's communication and relational capabilities and how could a sales professional adapt to win more customers" },
  { title: "Selling beyond The Sky", desc: "Insight Out selling focusing on creativity and innovation of creating products and services that anticipate future needs and help create a blueprint around it. It is more about creating the concept rather than selling the concept" },
  { title: "The Winning Sales Proposition", desc: "Creating, designing, packaging, delivering and positioning one's brand portfolio in the right light and with the right tone of confidence and partnership" },
  { title: "The DISC Sales Profiler", desc: "Selling by understanding your sales personality, natural strengths and limitation areas and your sales competency map benchmarked against successful sales professional attributes globally" }
];

const interventions = [
  { title: "Sales Audits", desc: "An intervention to observe, map and patternize the interactions between your sales professionals and customers and recommend brand behaviors that would resonate with your customers positive impressions about you" },
  { title: "EKLAVYA", desc: "A Train The Trainer workshop for Sales Leaders that focuses on building sales and teamworking abilities in your teams through training, engagement, inspiration and coaching" }
];

export default function SalesExcellence() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-[#F6F1EB] min-h-screen">
        <div className="container mx-auto px-4 md:px-8">

           {/* Header Banner */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[21/9] md:aspect-[4/1] rounded-sm overflow-hidden mb-16 relative"
          >
            <img src="https://static.wixstatic.com/media/95d9be60e88844eaa92ed30f871d5bae.jpg" alt="Sales Excellence Banner" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E1A]/40 to-transparent" />
          </motion.div>

          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B0E1A] mb-8">
                Sales Excellence
              </h1>
              <Button asChild variant="outline" className="rounded-none border-[#5B0E1A] text-[#5B0E1A] hover:bg-[#5B0E1A] hover:text-white h-12 px-8">
                  <Link href="/programs">OUR METHODOLOGY &rarr;</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Workshops */}
          <ScrollReveal>
             <div className="mb-20">
                <div className="text-center mb-12">
                   <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Training</p>
                   <h2 className="font-serif text-3xl font-bold text-[#5B0E1A]">Sales Excellence Workshops</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   {workshops.map((ws, i) => (
                      <div key={i} className="bg-white p-8 border border-[#D4B06A]/20 hover:border-[#5B0E1A]/40 transition-colors">
                         <h3 className="font-bold text-[#5B0E1A] text-xl mb-3">{ws.title}</h3>
                         <p className="text-[#1E1A17]/70 leading-relaxed">{ws.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

          {/* Interventions */}
          <ScrollReveal>
             <div className="bg-[#5B0E1A] p-10 md:p-16 mb-24 relative overflow-hidden text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />
                <div className="relative z-10">
                   <div className="text-center mb-12">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Strategic</p>
                      <h2 className="font-serif text-3xl font-bold text-white">Sales Excellence Interventions</h2>
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      {interventions.map((inv, i) => (
                         <div key={i}>
                            <h3 className="font-bold text-[#D4B06A] text-xl mb-3 border-b border-[#D4B06A]/30 pb-3">{inv.title}</h3>
                            <p className="text-white/80 leading-relaxed">{inv.desc}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </ScrollReveal>

          {/* Client Logos */}
          <ScrollReveal>
             <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Partners</p>
                <h2 className="font-serif text-3xl font-bold text-[#5B0E1A]">Our Esteemed Clients</h2>
             </div>
             <div className="space-y-6">
                <img src="https://static.wixstatic.com/media/da37d0_9739da2ca5f0420d93e5f6a45a21d6db~mv2.jpg" alt="Client Logos 1" className="w-full object-contain bg-white rounded-sm border border-[#D4B06A]/20 p-4" />
                <img src="https://static.wixstatic.com/media/da37d0_655e91e84b1d43b99c6331e5752530d5~mv2.jpg" alt="Client Logos 2" className="w-full object-contain bg-white rounded-sm border border-[#D4B06A]/20 p-4" />
             </div>
          </ScrollReveal>

        </div>
      </div>
    </Layout>
  );
}
