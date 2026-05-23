import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Briefcase, Building, HeartHandshake } from "lucide-react";

export default function Programs() {
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
            <img src="https://static.wixstatic.com/media/da37d0_19d3a20bf14242709cc2db36f15adb6f~mv2.jpg" alt="Training Programs" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E1A]/40 to-transparent" />
          </motion.div>

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-4"
            >
              Holistic Learning Solutions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B0E1A] mb-6"
            >
              Training Programs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#1E1A17]/70 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              High impact virtual engagements. Offers customized solutions for the training needs of the organization as valued learning partners.
            </motion.p>
          </div>

          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {/* Professional Excellence */}
              <div className="bg-white border border-[#D4B06A]/20 hover:border-[#5B0E1A] transition-all duration-300 p-8 flex flex-col items-center text-center group">
                <Briefcase className="w-12 h-12 text-[#5B0E1A] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-2xl font-bold text-[#5B0E1A] mb-4">Professional Excellence</h3>
                <p className="text-[#1E1A17]/60 mb-8 flex-grow">
                  Impactful Leadership Development Labs designed for individual growth, team cohesion, and measurable business impact.
                </p>
                <Button asChild className="w-full rounded-none bg-transparent border border-[#5B0E1A] text-[#5B0E1A] hover:bg-[#5B0E1A] hover:text-white transition-colors">
                  <Link href="/professional-excellence-series">Explore Series</Link>
                </Button>
              </div>

              {/* Sales Excellence */}
              <div className="bg-[#5B0E1A] p-8 flex flex-col items-center text-center group relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />
                <Building className="w-12 h-12 text-[#D4B06A] mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <h3 className="font-serif text-2xl font-bold text-white mb-4 relative z-10">Sales Excellence</h3>
                <p className="text-white/80 mb-8 flex-grow relative z-10">
                  Our unique sales training approach enables your team to do selling differently. Build basic capabilities and paradigms.
                </p>
                <Button asChild className="w-full rounded-none bg-[#D4B06A] text-[#5B0E1A] hover:bg-white transition-colors relative z-10 font-bold">
                  <Link href="/sales-excellence-series">Explore Series</Link>
                </Button>
              </div>

              {/* Services Excellence */}
              <div className="bg-white border border-[#D4B06A]/20 hover:border-[#5B0E1A] transition-all duration-300 p-8 flex flex-col items-center text-center group">
                <HeartHandshake className="w-12 h-12 text-[#5B0E1A] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif text-2xl font-bold text-[#5B0E1A] mb-4">Service Excellence</h3>
                <p className="text-[#1E1A17]/60 mb-8 flex-grow">
                  Guiding team to put the customer first and at the center of the business to deliver a positive customer experience.
                </p>
                <Button asChild className="w-full rounded-none bg-transparent border border-[#5B0E1A] text-[#5B0E1A] hover:bg-[#5B0E1A] hover:text-white transition-colors">
                  <Link href="/services-excellence-series">Explore Series</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Methodology */}
          <ScrollReveal>
             <div className="bg-white border border-[#D4B06A]/30 p-10 md:p-14 mb-20">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-4">Our Methodology</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-[#5B0E1A] mb-2 border-b border-[#D4B06A]/30 pb-2">Pre work and diagnostics</h4>
                        <ul className="text-sm text-[#1E1A17]/70 space-y-2 list-disc pl-4">
                            <li>To understand the industry and business specifics, the challenges, the needs, the aspirations</li>
                            <li>Map the audience demographics and thus decide and design the learning objectives and flow</li>
                            <li>Situations and cases to be customized as per the industry</li>
                            <li>Use of the same parlance and understanding as internal to the brand</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#5B0E1A] mb-2 border-b border-[#D4B06A]/30 pb-2">Workshop Delivery</h4>
                        <ul className="text-sm text-[#1E1A17]/70 space-y-2 list-disc pl-4">
                             <li>Actual delivery using the 3 E’s approach – Evolve, Enable, Empower</li>
                             <li>Respect for individual pace and style</li>
                             <li>Discussion and activity-oriented</li>
                             <li>Reflection, feedback and probing driven</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-[#5B0E1A] mb-2 border-b border-[#D4B06A]/30 pb-2">Post Workshop</h4>
                        <ul className="text-sm text-[#1E1A17]/70 space-y-2 list-disc pl-4">
                             <li>Consultative report highlighting the workshop highlights, the audience strengths and limitations, key observations and salient recommendations</li>
                             <li>A learning docket with some self-learning modules and a pdf of all the key workshop slides for retrieval and self-reference</li>
                             <li>Pre and post learning behavioural mapping</li>
                        </ul>
                    </div>
                </div>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </Layout>
  );
}
