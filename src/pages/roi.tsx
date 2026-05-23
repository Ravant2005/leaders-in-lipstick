import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

const roiCertImages = [
  "https://static.wixstatic.com/media/da37d0_ccce70a9ec3d41f48b1e837a5a7d441d~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_429f29238fad44cc811d09ac42190912~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_6f09fd6e346e465da4ad86ab7a373d74~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_6ec941444252468fb5af23ee7e823e21~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_8d13a0956889486599cc21986195b479~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_e2ed2fe364064660938479b30b1482b7~mv2.jpg"
];

const modules = [
  {
    title: "MODULE 1 — SETTING THE STAGE",
    desc: "Select appropriate strategies, measurement tools, and evaluation design. Identify stakeholder expectations and determine organizational readiness for measurement and evaluation. Anyone who needs the skills to measure the impact of learning and performance improvement programs. Individuals who need to demonstrate the ROI and business impact of other initiatives such as human resources, quality, process improvement, organizational change, and technology implementation will also benefit.",
    items: [],
    img: "https://static.wixstatic.com/media/da37d0_57fbe84f5bc44f6c9f45035f1a10576d~mv2.jpg"
  },
  {
    title: "MODULE 2 — MEASURING REACTION & PLANNED ACTION",
    desc: "",
    items: ["Measuring Reaction", "Collecting Reaction Data", "Using Reaction Data"],
    img: "https://static.wixstatic.com/media/da37d0_54c5476208aa4cb884f8ceef91feabc9~mv2.jpg"
  },
  {
    title: "MODULE 3 — MEASURING LEARNING",
    desc: "",
    items: ["Measuring Learning", "Using Level 2 Data to Forecast ROI", "Collecting Learning Data", "Response Scale Critique", "Question Stem Critique", "Sampling", "Using Learning Data"],
    img: "https://static.wixstatic.com/media/314a5b273a49670b391ac67bd76b3629.jpg"
  },
  {
    title: "MODULE 4 — MEASURING APPLICATION AND BEHAVIOR CHANGE",
    desc: "",
    items: ["Measuring Application and Behavior Change", "Collecting Application Data", "Applications of Data Collection Instruments", "ROI at Level 3", "Transferring Learning", "Learning and Performance"],
    img: null
  },
  {
    title: "MODULE 5 — MEASURING BUSINESS IMPACT",
    desc: "",
    items: ["Measuring Business Impact", "Collecting Business Impact Data", "Isolating the Effects of Learning", "Selecting Isolation Techniques"],
    img: "https://static.wixstatic.com/media/da37d0_e0f89dbcf22e4f14bf52b8172646ab57~mv2.jpg"
  },
  {
    title: "MODULE 6 — CALCULATING RETURN ON INVESTMENT",
    desc: "Take this opportunity to master shifting from activity-based to results-based learning, evaluation design basics, the five-level evaluation framework, and the process and standards that ensure evaluation works.",
    items: ["Calculating ROI", "Converting Data to Monetary Value", "Tabulating Costs", "Identifying Intangible Benefits", "Effective Meetings"],
    img: "https://static.wixstatic.com/media/da37d0_a9a9e0aac8f94186baa6a949a5aa2abc~mv2.jpg"
  },
  {
    title: "MODULE 7 — COMMUNICATING RESULTS",
    desc: "This program is for anyone who needs the skills to measure the impact of human resources, learning, and performance improvement programs. Individuals who need to demonstrate the business impact and ROI of other initiatives such as quality, process improvement, organizational change, and technology implementation will also benefit.",
    items: ["Organising Data", "Communicating Results", "Using Evaluation Data"],
    img: null
  }
];

export default function ROI() {
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
            <img src="https://static.wixstatic.com/media/7ebd13c2f23446cb81c699b9e6559d63.jpg" alt="ROI Master Class Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E1A]/40 to-transparent" />
          </motion.div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-20">
             <ScrollReveal>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#5B0E1A] mb-6 tracking-tight">ROI MASTER CLASS</h1>
                
                <p className="text-[#1E1A17]/80 text-lg leading-relaxed max-w-3xl mx-auto italic mb-8">
                  Develop a solid foundation in all aspects of measuring learning impact and evaluating learning and performance solutions. This comprehensive program offers small group interactions, application exercises, and a running case study. Gain new skills to assess your learning programs' impact and to develop and implement your organization's evaluation strategy.
                </p>

                <Button asChild className="rounded-none bg-[#6E0F1F] hover:bg-[#5B0E1A] h-14 px-12 text-base shadow-xl">
                  <Link href="/programs" className="text-white hover:text-white">EXPLORE &rarr;</Link>
                </Button>
             </ScrollReveal>
          </div>

          {/* Modules */}
          <div className="space-y-16 mb-24">
             {modules.map((mod, i) => (
                <ScrollReveal key={i}>
                   <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={i % 2 !== 0 ? 'order-2 md:order-1' : ''}>
                         <h2 className="font-serif text-2xl font-bold text-[#5B0E1A] mb-4">{mod.title}</h2>
                         {mod.desc && <p className="text-[#1E1A17]/80 leading-relaxed mb-6">{mod.desc}</p>}
                         {mod.items.length > 0 && (
                            <ul className="space-y-3">
                               {mod.items.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                     <div className="w-2 h-2 rounded-full bg-[#D4B06A] shrink-0 mt-2" />
                                     <p className="text-[#1E1A17]/80 text-sm">{item}</p>
                                  </li>
                               ))}
                            </ul>
                         )}
                      </div>
                      {mod.img && (
                         <div className={i % 2 !== 0 ? 'order-1 md:order-2' : ''}>
                            <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20 shadow-md">
                               <img src={mod.img} alt={mod.title} className="w-full h-full object-cover" />
                            </div>
                         </div>
                      )}
                   </div>
                </ScrollReveal>
             ))}
          </div>

          {/* ROI Certification Gallery */}
          <ScrollReveal>
             <div className="bg-white border border-[#D4B06A]/20 p-8 md:p-12">
                <div className="text-center mb-10">
                   <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Gallery</p>
                   <h2 className="font-serif text-3xl font-bold text-[#5B0E1A]">ROI Certification — Alabama, USA</h2>
                   <p className="text-[#1E1A17]/60 mt-2 italic">With Dr. Jack Phillips</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {roiCertImages.map((img, i) => (
                      <div key={i} className="aspect-square overflow-hidden rounded-sm border border-[#D4B06A]/20 bg-white">
                         <img src={img} alt={`ROI Certification ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

        </div>
      </div>
    </Layout>
  );
}
