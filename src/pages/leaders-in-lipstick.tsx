import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

const workshopImages = [
  "https://static.wixstatic.com/media/da37d0_e5d26eacc6a146efbda88921bd0f54f8~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_e996a60d7b6f491c8a17a2f8d6718bd1~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_9e1da3d56aa9472697fdb18c6cd92a41~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_16496f29bac049be903c4b8eef36e81f~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_f762a73f2879473eb4c8e3aed302f5c2~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_dc72d46a94f542ea97a45fd7cffce020~mv2.jpg"
];

const outcomes1 = [
  "Examine differences in communication styles between men and women in the workplace",
  "Understand the attitudes, values, and beliefs of others in order to communicate more effectively",
  "Identify what constitutes positive and negative communication and learn how to interpret the signals you give and receive",
  "Learn which of your behaviors leads to positive outcomes and why",
  "Goal setting – motivation to change",
  "Discover your unique communication style in a team environment, recognize your strengths and weaknesses and how they affect others"
];

const outcomes2 = [
  "Identify the communication style of others, and adapt your approach to improve working relationships",
  "Understand team dynamics to create a positive team working environment",
  "Develop an effective style – matching it with team member needs",
  "Understand the differences between assertive, aggressive and passive behaviours and their impact",
  "Develop strategies to manage aggressive or passive responses",
  "Develop techniques which will help you to project confidence",
  "Overcome a passive style and command respect from former peers, younger or older employees",
  "Techniques to avoid being manipulated while conducting yourself professionally"
];

const outcomes3 = [
  "How to avoid being bullied and retain your self-respect",
  "Define conflict and why it is needed within the workplace",
  "Explore gender conflict",
  "Recognize your personal conflict management strategies and those employed by others",
  "Understand how to 'map' a conflict by identifying the issues, the parties, the needs",
  "Determine the most appropriate conflict management resolution strategy to adopt",
  "Overcoming self-limiting patterns as a female negotiator",
  "Observing gender differences with negotiation tactics",
  "Developing assertive behaviors to strengthen your negotiating position",
  "How to handle 'dirty tricks' and gender issues",
  "Discover the impact of your own communication style and how to adapt it for positive outcomes"
];

const outcomes4 = [
  "Managing the predictable, the unexpected and the potential",
  "Take charge of your future",
  "Devise your own career action plan",
  "Develop a Personal Action Plan based on course topics, including how to monitor progress and how to measure success",
  "Recognise your responsibilities as an employee relating to sexual harassment",
  "Identify actions to avoid so that you don't engage in unacceptable or unwelcome behaviour",
  "Respond appropriately if you are confronted with sexually harassing behaviour"
];

export default function LeadersInLipstick() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-[#F6F1EB] min-h-screen">
        <div className="container mx-auto px-4 md:px-8">

          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[21/9] md:aspect-[3/1] rounded-sm overflow-hidden mb-16 relative"
          >
            <img src="https://static.wixstatic.com/media/da37d0_aed7090f0bad4967a3cf0bda0ab011e0~mv2.jpg" alt="Header banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E1A]/40 to-transparent" />
          </motion.div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-20">
             <ScrollReveal>
                <img src="https://static.wixstatic.com/media/da37d0_469712a6778641248a6a9270537e7304~mv2.png" alt="Leaders in Lipstick Logo" className="h-32 mx-auto mb-6 mix-blend-multiply" />
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#5B0E1A] mb-4">LEADERS IN LIPSTICK®</h1>
                <p className="text-lg md:text-xl text-[#1E1A17]/70 italic mb-4">Dream – Define – Do</p>
                <p className="text-lg md:text-xl font-bold tracking-widest text-[#D4B06A] uppercase mb-10">Celebrating Women Leaders</p>
                
                <h2 className="font-serif text-2xl md:text-3xl text-[#5B0E1A] font-bold mb-6">Empower Your Women Leaders with our Leaders in Lipstick® Leadership Development Program</h2>
                <p className="text-[#1E1A17]/80 text-lg leading-relaxed max-w-3xl mx-auto border-l-4 border-[#D4B06A] pl-6 italic">
                  A boutique offering of Immersive Experiential Learning Journey – A suggested Leadership intervention for Women who are meant to Lead.
                </p>
             </ScrollReveal>
          </div>

          <ScrollReveal>
             <div className="w-full aspect-video rounded-sm overflow-hidden shadow-xl mb-24">
                 <img src="https://static.wixstatic.com/media/da37d0_3fbfa27ec044426f936364e20444fe6f~mv2.jpg" alt="Event Group Photo" className="w-full h-full object-cover" />
             </div>
          </ScrollReveal>

          {/* Program Learning Outcomes */}
          <div className="mb-20 text-center">
              <ScrollReveal>
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Curriculum</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5B0E1A]">Program Learning Outcomes</h2>
              </ScrollReveal>
          </div>

          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <ScrollReveal>
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20">
                   <img src={workshopImages[0]} alt="Workshop 1" className="w-full h-full object-cover" />
                </div>
             </ScrollReveal>
             <ScrollReveal delay={0.2}>
                <ul className="space-y-4">
                   {outcomes1.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="w-2 h-2 rounded-full bg-[#D4B06A] shrink-0 mt-2" />
                         <p className="text-[#1E1A17]/80 leading-relaxed text-sm">{item}</p>
                      </li>
                   ))}
                </ul>
             </ScrollReveal>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <ScrollReveal delay={0.2} className="order-2 md:order-1">
                <ul className="space-y-4">
                   {outcomes2.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="w-2 h-2 rounded-full bg-[#D4B06A] shrink-0 mt-2" />
                         <p className="text-[#1E1A17]/80 leading-relaxed text-sm">{item}</p>
                      </li>
                   ))}
                </ul>
             </ScrollReveal>
             <ScrollReveal className="order-1 md:order-2">
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square rounded-sm overflow-hidden border border-[#D4B06A]/20">
                      <img src={workshopImages[1]} alt="Workshop 2" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-square rounded-sm overflow-hidden border border-[#D4B06A]/20 translate-y-8">
                      <img src={workshopImages[2]} alt="Workshop 3" className="w-full h-full object-cover" />
                   </div>
                </div>
             </ScrollReveal>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <ScrollReveal>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square rounded-sm overflow-hidden border border-[#D4B06A]/20">
                      <img src={workshopImages[3]} alt="Workshop 4" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-square rounded-sm overflow-hidden border border-[#D4B06A]/20 -translate-y-8">
                      <img src={workshopImages[4]} alt="Workshop 5" className="w-full h-full object-cover" />
                   </div>
                </div>
             </ScrollReveal>
             <ScrollReveal delay={0.2}>
                <ul className="space-y-4">
                   {outcomes3.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="w-2 h-2 rounded-full bg-[#D4B06A] shrink-0 mt-2" />
                         <p className="text-[#1E1A17]/80 leading-relaxed text-sm">{item}</p>
                      </li>
                   ))}
                </ul>
             </ScrollReveal>
          </div>

          {/* Section 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
             <ScrollReveal delay={0.2} className="order-2 md:order-1">
                <ul className="space-y-4">
                   {outcomes4.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="w-2 h-2 rounded-full bg-[#D4B06A] shrink-0 mt-2" />
                         <p className="text-[#1E1A17]/80 leading-relaxed text-sm">{item}</p>
                      </li>
                   ))}
                </ul>
             </ScrollReveal>
             <ScrollReveal className="order-1 md:order-2">
                <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20">
                   <img src={workshopImages[5]} alt="Workshop 6" className="w-full h-full object-cover" />
                </div>
             </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button asChild className="rounded-none bg-[#6E0F1F] hover:bg-[#5B0E1A] text-[#D4B06A] hover:text-[#D4B06A] font-bold h-14 px-12 text-base shadow-xl">
                <Link href="/apply" className="text-[#D4B06A] hover:text-[#D4B06A]">Apply for Membership</Link>
              </Button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Layout>
  );
}
