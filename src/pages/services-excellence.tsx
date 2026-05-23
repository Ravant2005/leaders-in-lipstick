import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const workshops = [
  { title: "Being the Double Bagger", desc: "A workshop that redefines attitude, accountability, and abilities to serve the customers" },
  { title: "The Spirit of Service", desc: "A workshop that focuses on key global RATER factors of customer delight and engagement" },
  { title: "Strengths-Based Service Excellence", desc: "A workshop for Service Leaders to understand their innate talents and put them to use for their customers and teams" },
  { title: "Branded Customer Service", desc: "A brand lab that helps define the Service DNA, competitive advantage, service value propositioning, service vision, Must-Win-Battles, and On-Brand behaviors" },
  { title: "Each Link Matters", desc: "A workshop that facilitates collaboration, communication, and de-siloing for presenting a unified face to the end customers" },
  { title: "Complaint Is A Gift", desc: "A workshop that focuses on the science, the art, and the craft behind managing complaints and customer feedback and assessing one's own capabilities to do so" },
  { title: "The Customer Eccentric Leader", desc: "A workshop that certifies managers on critical service skills and looking at creating a customer-centric culture within their teams through discussions, coaching, training, and leading by examples" },
  { title: "Leaving A Brand Impact", desc: "A Train The Trainer workshop series with content designing and preparation of Line, HR and Service managers and Internal Trainers on the content for training the respective teams for sustained Service Excellence and Engagement" }
];

export default function ServicesExcellence() {
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
            <img src="https://static.wixstatic.com/media/657d93c686e44e2d9b543a6e1e42cbca.jpg" alt="Service Excellence Banner" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E1A]/40 to-transparent" />
          </motion.div>

          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B0E1A] mb-8 uppercase tracking-tight">
                Service Excellence Series
              </h1>
              <Button asChild variant="outline" className="rounded-none border-[#5B0E1A] text-[#5B0E1A] hover:bg-[#5B0E1A] hover:text-white h-12 px-8">
                  <Link href="/programs">OUR METHODOLOGY &rarr;</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Workshops */}
          <div className="grid md:grid-cols-12 gap-12 items-start mb-24">
             <div className="md:col-span-5 md:sticky md:top-24">
                <ScrollReveal>
                   <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20 shadow-md mb-6">
                      <img src="https://static.wixstatic.com/media/da37d0_795425e447494e6c837d32bb36fd1079~mv2.jpg" alt="Service Excellence Workshops" className="w-full h-full object-cover" />
                   </div>
                   <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Training</p>
                   <h2 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-4">Service Excellence Workshops</h2>
                </ScrollReveal>
             </div>
             <div className="md:col-span-7">
                <div className="grid gap-6">
                   {workshops.map((ws, i) => (
                      <ScrollReveal key={i} delay={i * 0.05}>
                         <div className="bg-white p-6 border border-[#D4B06A]/20 hover:border-[#5B0E1A]/40 transition-colors">
                            <h3 className="font-bold text-[#5B0E1A] text-lg mb-2">{ws.title}</h3>
                            <p className="text-[#1E1A17]/70 text-sm leading-relaxed">{ws.desc}</p>
                         </div>
                      </ScrollReveal>
                   ))}
                </div>
             </div>
          </div>

          {/* Interventions */}
          <ScrollReveal>
             <div className="bg-[#5B0E1A] text-white rounded-sm overflow-hidden border border-[#D4B06A]/30">
                <div className="grid md:grid-cols-2">
                   <div className="p-10 md:p-14 relative flex flex-col justify-center">
                      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />
                      <div className="relative z-10">
                         <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Strategic</p>
                         <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10">Service Excellence Interventions</h2>
                         
                         <div className="space-y-8">
                            <div>
                               <h3 className="font-bold text-[#D4B06A] text-xl mb-3 border-b border-[#D4B06A]/30 pb-2">SERVICE AUDITS AND BENCHMARKING</h3>
                               <p className="text-white/80 leading-relaxed text-sm">
                                  This encompasses an intervention to measure the levels of existing service standards and systems, their efficacy, the VOC and redefining and evaluating the standards on a monthly basis with improvement projects, coaching, boardroom discussions and customer rendez-vous.
                               </p>
                            </div>
                            <div>
                               <h3 className="font-bold text-[#D4B06A] text-xl mb-3 border-b border-[#D4B06A]/30 pb-2">SERVICE VISIONING</h3>
                               <p className="text-white/80 leading-relaxed text-sm">
                                  This includes a diagnostics, engagement survey, customer pulse maps and a strategic alignment workshop followed by engagement activities and workshops across the organization to create a defined service culture.
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="aspect-square md:aspect-auto">
                      <img src="https://static.wixstatic.com/media/1d48d8c57a7449499b2cecf09ceda9c1.jpg" alt="Service Interventions" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </Layout>
  );
}
