import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const individualWorkshops = [
  { title: "Presentation Engineering", desc: "A workshop for enhanced presentation design, confidence and delivery and increased audience engagement" },
  { title: "Creating My Executive Presence", desc: "A workshop that helps understand, etch, demonstrate and practice one's executive personality quotient" },
  { title: "Engineering Thyself", desc: "A self-exploratory workshop for personal and people management" },
  { title: "Employees", desc: "A workshop on understanding the behaviors and values that make for an effective committed employee" },
  { title: "Valuable Values", desc: "An experiential and dialoguing workshop on the question of business ethics and personal values — how they align and interplay using the global values cluster framework" },
  { title: "One-On-One Coaching", desc: "Goal setting, entrepreneurial dynamism, enhanced presence, leadership enrichment – personalized approach" },
  { title: "Developing My Personality Quotient", desc: "Using 16 PF tool followed by one-on-one coaching — Understanding one's high and low scores on 16 globally instituted personality factors by Dr. Raymond B. Cattell" },
  { title: "Developing My X Factor", desc: "Strengths Based Psychology — A strengths lab for self-exploration using the Clifton Strengths Finder by Dr Donald Clifton" },
  { title: "Assertive Influencing", desc: "A workshop that explores the need and skills to be assertive and styles and techniques of influencing stakeholders" }
];

const teamWorkshops = [
  { title: "Interpersonal Skills using Transactional Analysis", desc: "A foundation workshop of interpersonal communication using the principles and frameworks of transactional analysis. Use of TA tools for scientific inquiry into one's mental models" },
  { title: "Outbound Workshops - Collaborative", desc: "An outbound workshop that challenges the leadership and team-oriented skills of the individual and collective members towards some critical encompassing themes or aims like customer service, peak performance, initiative" },
  { title: "From Dysfunctional to Functional", desc: "A team-oriented outbound workshop using the 5 Dysfunctions of a team instrument and framework to build result-orientation and accountability within the individuals" },
  { title: "Theatre of the Oppressed", desc: "A workshop that focuses on engagement, dialoguing, interactions, feedback and confrontation of personal and corporate issues using theatre, image theatre, forum theatre, art, dance and movement therapy" },
  { title: "MUTTHI DRISHTI and NISHTHA", desc: "An attitude, skill and knowledge enhancement workshop for the shop floor and field members to enrich" }
];

const businessWorkshops = [
  { title: "Strategic Value Propositioning", desc: "A workshop that focuses on the mindset, competencies and skills of a strategic thinker and the need to present value-based propositions converting ideas to business cases" },
  { title: "Introduction to Project Management", desc: "Understanding the behavioural nuances of a project leader and the psychology of the stakeholders and customers of a project" },
  { title: "Personal Effectiveness Platform (PEP Work)", desc: "A workshop designed to focus on the skills, techniques and mindset of peak performance, personal effectiveness, goal setting and principles of time and mental well-being management" },
  { title: "The Non-Verbal Communicator", desc: "A workshop designed to focus on the effective and conscious use of the body, tonality, gait, and posture to create impact and enhanced interpersonal communication" },
  { title: "Thinking Insight Out", desc: "A workshop that focuses on the principles of creativity, the innovation process, critical thinking skills and conviction and confidence in presenting ideas" },
  { title: "The Strategic Human Resource Professional", desc: "An intensive workshop that focuses on developing capabilities for today's HR Professionals that help be the business enabler, architect and facilitator instead of being a mere executor and follower. Trains them on using Appreciative Inquiry, T-Group processes, Change facilitator and cultural diagnostics and alignment tools" },
  { title: "The Brand DNA", desc: "A workshop that aims at defining the brand essence, the dictionary of the brand, the branding elements of the products, services and culture and the key differentiators and having the leaders practice positioning and aligning to the brand values and essence" }
];

export default function ProfessionalExcellence() {
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
            <img src="https://static.wixstatic.com/media/da37d0_01197f32ad354f5da4475e7cda9f1fb7~mv2.jpg" alt="Professional Excellence Banner" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B0E1A]/40 to-transparent" />
          </motion.div>

          <div className="text-center max-w-4xl mx-auto mb-20">
            <ScrollReveal>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B0E1A] mb-6">
                Professional Excellence Series
              </h1>
            </ScrollReveal>
          </div>

          <div className="space-y-24">
            {/* Individual */}
            <ScrollReveal>
              <div className="grid md:grid-cols-12 gap-8 items-start">
                 <div className="md:col-span-5 md:sticky md:top-24">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20 shadow-md mb-6">
                       <img src="https://static.wixstatic.com/media/0ec44cf35e134f64a430776551d05f3d.jpg" alt="Individual Workshops" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-4">Individual Workshops</h2>
                 </div>
                 <div className="md:col-span-7">
                    <div className="grid gap-6">
                       {individualWorkshops.map((ws, i) => (
                          <div key={i} className="bg-white p-6 border border-[#D4B06A]/20 hover:border-[#5B0E1A]/40 transition-colors">
                             <h3 className="font-bold text-[#5B0E1A] text-lg mb-2">{ws.title}</h3>
                             <p className="text-[#1E1A17]/70 text-sm leading-relaxed">{ws.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </ScrollReveal>

            {/* Team */}
            <ScrollReveal>
               <div className="grid md:grid-cols-12 gap-8 items-start">
                 <div className="md:col-span-5 md:sticky md:top-24 md:order-2">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20 shadow-md mb-6">
                       <img src="https://static.wixstatic.com/media/b3528631d4da4b0ab7a0b03f94ae070c.jpg" alt="Team Workshops" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-4">Team-oriented Workshops</h2>
                 </div>
                 <div className="md:col-span-7 md:order-1">
                    <div className="grid gap-6">
                       {teamWorkshops.map((ws, i) => (
                          <div key={i} className="bg-white p-6 border border-[#D4B06A]/20 hover:border-[#5B0E1A]/40 transition-colors">
                             <h3 className="font-bold text-[#5B0E1A] text-lg mb-2">{ws.title}</h3>
                             <p className="text-[#1E1A17]/70 text-sm leading-relaxed">{ws.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </ScrollReveal>

            {/* Business Impact */}
            <ScrollReveal>
               <div className="grid md:grid-cols-12 gap-8 items-start">
                 <div className="md:col-span-5 md:sticky md:top-24">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden border border-[#D4B06A]/20 shadow-md mb-6">
                       <img src="https://static.wixstatic.com/media/95d9be60e88844eaa92ed30f871d5bae.jpg" alt="Business-Impact Workshops" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-4">Business-Impact Workshops</h2>
                 </div>
                 <div className="md:col-span-7">
                    <div className="grid gap-6">
                       {businessWorkshops.map((ws, i) => (
                          <div key={i} className="bg-white p-6 border border-[#D4B06A]/20 hover:border-[#5B0E1A]/40 transition-colors">
                             <h3 className="font-bold text-[#5B0E1A] text-lg mb-2">{ws.title}</h3>
                             <p className="text-[#1E1A17]/70 text-sm leading-relaxed">{ws.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </Layout>
  );
}
