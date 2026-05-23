import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Award, Globe, Users, BookOpen, CheckCircle, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Siji Varghese",
    title: "Founder & Lead Facilitator",
    img: "https://static.wixstatic.com/media/da37d0_3ecb050e122a4cdfbb27eff3853be9d9~mv2.jpg",
    bio: "Siji has donned multiple hats as a Corporate Leader, Facilitator, Keynote Speaker, Coach, and as Passion-Preneur in her rich experience spanning 23 years. She is an impact-driven facilitator and has been on the TED Platform twice as a TEDx Speaker. She was awarded the Karmaveer Chakra (United Nations) and the International WEE (Women Excellence Empowerment) Rising Women award.",
  },
  {
    name: "Sriram Iyer",
    title: "Sales Excellence Lead",
    img: "https://static.wixstatic.com/media/da37d0_c7a16e883311450db655ec0f54417c1c~mv2.jpg",
    bio: "With over 25 years of experience in the FMCG business with multinationals like P&G, Unilever & NIVEA, Sriram has trained over 25,000 sales professionals to become passionate sellers and powerful influencers.",
  },
  {
    name: "Deepa Kaur",
    title: "Communication & Service Excellence",
    img: "https://static.wixstatic.com/media/da37d0_8551a9f4659947b7a83d33eed6d584fe~mv2.jpg",
    bio: "Deepa has 14 years of experience in the Learning and Development space. She started her journey in the aviation industry, has worked with brands like Singapore Airline. She is an avid traveler and has seen close to 45+ countries, worked with different nationalities — she perfectly understands the \"Art of Communication\".",
  },
  {
    name: "Vikas Agarwal",
    title: "Mindfulness & NLP Specialist",
    img: "https://static.wixstatic.com/media/da37d0_16641626be1342a1a908282cf8319766~mv2.jpg",
    bio: "Certified Trainer & Teacher, City & Guilds UK, Diploma In Teaching & Training. International Practitioner Certification, IPCCT Canada for Mindful Practices. Installation Specialist for NLP, ANLP USA. Accountability Builder Certified Trainer, Partners In Leadership.",
  },
  {
    name: "Manisha Grover",
    title: "Women Leadership & Coaching",
    img: "https://static.wixstatic.com/media/da37d0_b5c48c6172844a648620b745971e9459~mv2.jpg",
    bio: "Certified NLP practitioner, MBTI Practitioner, Marshal Goldsmith Certified Coach, Positive resilience profile certified with 28 years of experience. She has conducted more than 900 workshops with 60+ clients across the globe.",
  },
  {
    name: "Anil Thomas",
    title: "NLP Master & Gestalt Therapist",
    img: "https://static.wixstatic.com/media/da37d0_7902d241c813429999ecaee64c0c9c46~mv2.jpg",
    bio: "Anil is an internationally certified NLP Master Practitioner and Gestalt Therapist. He owes his therapeutic skills to Dr. Richard (Dick) McHugh; SJ. Ph.D. Anil conducts the 'Global Certification Courses' based on the Classic (original) Code.",
  },
  {
    name: "Dr. Wafaa Haidamous",
    title: "Cross-Industry Consultant",
    img: "https://static.wixstatic.com/media/da37d0_469cab16c6f049f8aff6bae3d4a1fa2f~mv2.jpg",
    bio: "Wafaa is a leading Consultant and Trainer in different industries. Her years of experience have given her a competitive edge and significant approach to her training methodology by updating several training programs in different sectors.",
  },
  {
    name: "Michael Adebiyi",
    title: "Leadership Development",
    img: "https://static.wixstatic.com/media/da37d0_5b25f863d6b0494f9bc2dca86da7309f~mv2.jpg",
    bio: "Seasoned, collaborative, problem-solving leader, business owner and training consultant with more than 20 years in the field of leadership development. Main objective is to impart leadership development and management life skills.",
  },
];

const uspItems = [
  { title: "Global Benchmarking", desc: "Globally certified coaches with global exposure, experience, and researched & benchmarked content.", icon: Globe },
  { title: "Customization", desc: "Personalized end-to-end solutions tailored to meet your unique organizational needs.", icon: BookOpen },
  { title: "Certification", desc: "SERVICE MARK certification upon successful and satisfactory completion, earned by merit.", icon: Award },
  { title: "Individual Report & Analysis", desc: "A personal report for each learner mapping strengths and recommendations.", icon: CheckCircle },
  { title: "Network Membership", desc: "An opportunity to join our network for city-wide or nation-wide events and learning activities.", icon: Users },
];

export default function About() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-[#F6F1EB] min-h-screen">
        <div className="container mx-auto px-4 md:px-8">

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-4"
            >About Us</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-bold text-[#5B0E1A] mb-6"
            >Transforming & Empowering Individuals</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[#1E1A17]/70 leading-relaxed max-w-3xl mx-auto"
            >
              We deliver end-to-end solutions in the Learning & Development space, intended to have a direct and holistic impact on business results, team performances, and individual efficacies.
            </motion.p>
          </div>

          {/* Vision & Approach */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-[#5B0E1A] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />
                <h2 className="font-serif text-3xl font-bold text-white mb-4 relative z-10">Our Philosophy</h2>
                <p className="text-white/80 text-lg leading-relaxed relative z-10 mb-4">
                  We have a unique approach to training that works on much deeper levels. So instead of just learning a few new processes or structures, it will reshape the very foundation of an Individual's thinking.
                </p>
                <p className="text-white/80 text-lg leading-relaxed relative z-10">
                  At the heart of what we do, lies the desire to Transform and Empower Individuals by enabling them with the requisite systems to enhance their existing capacity to higher levels.
                </p>
              </div>
              <div className="bg-white border border-[#D4B06A]/30 p-10 md:p-14 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-4">Performance is Key</h2>
                <p className="text-[#1E1A17]/70 text-lg leading-relaxed">
                  We believe that Training is not what is ultimately important; <span className="font-bold text-[#5B0E1A]">Performance is</span>, so we have embarked on a journey wherein our endeavor is to be actively involved in pre-training assessment, follow-up interventions like interviews, workshops, and coaching to facilitate and review the implementation of the Learning.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 5D Framework */}
          <ScrollReveal>
            <div className="text-center mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Our Methodology</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5B0E1A] mb-4">The 5D Framework</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
              {["Diagnose", "Dream", "Design", "Deliver", "Deploy"].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-[#D4B06A]/30 p-6 text-center hover:border-[#5B0E1A]/40 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#5B0E1A] text-white font-serif text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">{i + 1}</div>
                  <h3 className="font-serif text-lg font-bold text-[#5B0E1A]">{step}</h3>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Team Section */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Our Experts</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5B0E1A] mb-4">Meet The Team</h2>
              <p className="text-[#1E1A17]/60 max-w-2xl mx-auto">
                Highly competent facilitators from across domains, bringing transformative change in individuals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="group bg-white border border-[#D4B06A]/20 overflow-hidden hover:shadow-lg transition-all duration-500 h-full">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#5B0E1A] mb-1">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-[#D4B06A] font-bold mb-3">{member.title}</p>
                    <p className="text-[#1E1A17]/60 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* USP Section */}
          <ScrollReveal>
            <div className="bg-[#5B0E1A] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Why Choose Us</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Our USP</h2>
                  <p className="text-white/70 max-w-2xl mx-auto">
                    The differentiators that make us the right learning partners for you.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {uspItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <item.icon className="w-8 h-8 text-[#D4B06A] mx-auto mb-4" />
                      <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal>
            <div className="mt-20 max-w-3xl mx-auto text-center">
              <Star className="w-8 h-8 text-[#D4B06A] mx-auto mb-6" />
              <blockquote className="font-serif text-xl md:text-2xl text-[#5B0E1A] leading-relaxed italic mb-6">
                "I had the chance to attend your lecture while serving in IDBI Bank. Seeing you teach with such passion made me question myself. You inspired me to pursue my dream of becoming a civil servant. I have now qualified Civil Services 2019 — AIR 680. It was not possible without your help."
              </blockquote>
              <p className="text-sm uppercase tracking-widest text-[#D4B06A] font-bold">— Yashlok Kumar Dutt, IRS Officer</p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </Layout>
  );
}
