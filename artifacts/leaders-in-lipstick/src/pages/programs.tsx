import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Star, Crown, TrendingUp, Zap, Users, Brain, Target } from "lucide-react";

const programs = [
  {
    category: "Executive Leadership Mastery",
    icon: <Crown className="w-6 h-6 text-primary" />,
    items: [
      {
        title: "Leaders in Lipstick® Program",
        desc: "Our flagship 'Dream-Define-Do' program for women leaders. Amplify strengths and address skill gaps.",
        duration: "12 Weeks",
        format: "Hybrid Cohort"
      },
      {
        title: "Leadership Agility",
        desc: "Enhance capacity to lead effectively in various situations through self-management and team collaboration.",
        duration: "8 Weeks",
        format: "Online Intensive"
      }
    ]
  },
  {
    category: "Behavioural Intelligence & Soft Skills",
    icon: <Brain className="w-6 h-6 text-primary" />,
    items: [
      {
        title: "Behavioural ROI Consulting",
        desc: "Experiential interventions resulting in quantifiable changes for individual and team efficacy.",
        duration: "Custom",
        format: "Consulting/Workshop"
      },
      {
        title: "Personal Effectiveness",
        desc: "Master the art of soft skills to enhance intra-personal and inter-personal interactions.",
        duration: "4 Weeks",
        format: "Blended Learning"
      }
    ]
  },
  {
    category: "GenAI & Technical Training",
    icon: <Zap className="w-6 h-6 text-primary" />,
    items: [
      {
        title: "Strategic GenAI for Leaders",
        desc: "Step into the future with ChatGPT, Gemini, and Co-pilot. Practical prompt engineering for executives.",
        duration: "2 Days",
        format: "Virtual Masterclass"
      },
      {
        title: "Enterprise-Wide GenAI Orientation",
        desc: "Achieve more with solutions designed for growth and impact across your entire organization.",
        duration: "Custom",
        format: "Corporate Rollout"
      }
    ]
  },
  {
    category: "Functional Excellence & Sales",
    icon: <Target className="w-6 h-6 text-primary" />,
    items: [
      {
        title: "Sales Mastery",
        desc: "Stay ahead with innovative selling techniques while unlearning outdated practices.",
        duration: "6 Weeks",
        format: "Mastermind"
      },
      {
        title: "Business Enablement",
        desc: "Invest in professional growth with tailored programs to expand knowledge and stay relevant.",
        duration: "Custom",
        format: "Digital Library"
      }
    ]
  },
  {
    category: "Digital Content & LMS",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    items: [
      {
        title: "Customised Digital Content",
        desc: "E-learning, Animation, and Live Action Shoot solutions in 100+ languages.",
        duration: "On-Demand",
        format: "Digital Assets"
      },
      {
        title: "LMS/LXP Solutions",
        desc: "Future-ready Learning Management Systems with role-based skill mapping and 360-degree learning.",
        duration: "Ongoing",
        format: "Platform"
      }
    ]
  }
];

export default function Programs() {
  return (
    <Layout>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FDFBF7] border-b border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.png)` }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">The Curriculum</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-primary">Sharpen Your Edge.</h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-2xl">
              Elite curriculum designed by operators, for operators. No fluff. Just tactical, high-leverage frameworks to scale your impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {programs.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-12 border-b border-border pb-4">
                  {category.icon}
                  <h2 className="font-serif text-3xl font-bold">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((program, pIdx) => (
                    <div key={pIdx} className="bg-card border border-border p-8 hover:border-primary/50 transition-colors group">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="font-serif text-2xl font-bold max-w-[80%]">{program.title}</h3>
                        <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-muted-foreground mb-8 font-light min-h-[4rem]">{program.desc}</p>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          <span>{program.duration}</span>
                          <span>•</span>
                          <span>{program.format}</span>
                        </div>
                        <Button variant="ghost" className="rounded-none group-hover:bg-primary group-hover:text-white transition-all h-10 w-10 p-0">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#310103] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}networking.png)` }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Not sure where to start?</h2>
          <p className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto">
            Book a complimentary strategy call with our advisors to map out your executive development plan.
          </p>
          <Button size="lg" className="rounded-none bg-secondary text-primary hover:bg-white px-12 h-14 font-bold uppercase tracking-widest text-sm">
            Book Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
}
