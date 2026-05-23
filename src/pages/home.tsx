import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const heroImages = [
  "https://static.wixstatic.com/media/da37d0_ccef306d518849c5820497e3d3602ed1~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_103b4e5ec4aa4da29267c1601721bcbe~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_a421cea350204ba3b1a8cf5178c72a8b~mv2.jpg"
];

const awardImages = [
  "https://static.wixstatic.com/media/da37d0_97e383aefbde4463baf5b6393f0dbfa8~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_3c79fd70514c4118b5a67a622e5a3268~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_9c205af0ffd44b77ac441ab94b4d0874~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_7425a404f61149fa9c0ced03d7ab9510~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_d70db49af92e4ba49edb133af223fd6f~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_e40b27f8691c4948bca0494c96be67f3~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_8ff54ae5b2a04133b9dd3568bf5f6e7d~mv2.jpg",
  "https://static.wixstatic.com/media/da37d0_02d431b0ecb44a9386efea72d2c443ba~mv2.jpg"
];

export default function Home() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F9F6F0] min-h-screen">
        {/* Warm subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F6F0] via-[#F6F1EB] to-[#EDE8E0]" />

        <div className="relative z-10 grid md:grid-cols-2 min-h-screen">

          {/* Left: Logo + Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 pt-36 pb-16">

            {/* Leaders in Lipstick Logo */}
            <img
              src="https://static.wixstatic.com/media/da37d0_469712a6778641248a6a9270537e7304~mv2.png"
              alt="Leaders in Lipstick Logo"
              className="h-20 md:h-24 object-contain object-left mb-8"
            />

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#5B0E1A] leading-[1.05] mb-4">
              SIJI<br/>VARGHESE
            </h1>

            {/* Mobile-only Siji Portrait */}
            <div className="block md:hidden my-6 relative w-full aspect-[4/5] overflow-hidden rounded-sm border border-[#D4B06A]/30 shadow-lg">
              <img
                src="/siji-hero.jpg"
                alt="Siji Varghese"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-transparent opacity-60" />
            </div>

            <div>
              <div className="w-12 h-0.5 bg-[#D4B06A] mb-5" />
              <p className="font-semibold text-[#6E0F1F] text-lg mb-3">Founder – Leaders in Lipstick®</p>
              <ul className="text-[#1E1A17]/70 text-base leading-relaxed space-y-1.5 font-light">
                <li>Behavioral change &amp; ROI consultant</li>
                <li>Global professional speaker</li>
                <li>TEDx speaker</li>
                <li>UN Karmaveer Chakra Awardee</li>
              </ul>
            </div>

            <div className="mt-10">
              <Button size="lg" className="rounded-none h-14 px-10 text-base bg-[#6E0F1F] hover:bg-[#5B0E1A] shadow-xl transition-all" asChild>
                <Link href="/about" className="text-white hover:text-white">START &rarr;</Link>
              </Button>
            </div>
          </div>

          {/* Right: Siji Portrait — fills the full right column */}
          <div className="relative hidden md:block">
            <img
              src="/siji-hero.jpg"
              alt="Siji Varghese"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* subtle left-edge fade to blend with left panel */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F9F6F0] to-transparent" />
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#5B0E1A]">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
             <h2 className="font-serif text-2xl md:text-4xl text-white italic tracking-wide font-light">
               "Why Fit in when you are born to Stand-out"
             </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-white border-b border-[#D4B06A]/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative flex gap-4">
                <img 
                  src="https://static.wixstatic.com/media/da37d0_e527afe8821342e19df4cd8f536b4363~mv2.png" 
                  alt="Siji Varghese" 
                  className="w-2/3 object-cover rounded-sm border border-[#D4B06A]/30"
                />
                 <img 
                  src="https://static.wixstatic.com/media/da37d0_c0b8dbb6afe5407c9a2a7e735d78c0fa~mv2.jpg" 
                  alt="Siji Varghese Side Profile" 
                  className="w-1/3 object-cover rounded-sm mt-12 border border-[#D4B06A]/30 shadow-lg"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-4">Our Promise</p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5B0E1A] mb-6 leading-tight">
                  Quantifiable changes that give the best ROI.
                </h2>
                <p className="text-lg text-[#1E1A17]/70 leading-relaxed mb-6">
                   Our highly experiential interventions result in quantifiable changes that give the best ROI for the organization.
                </p>
                <p className="text-lg text-[#1E1A17]/70 leading-relaxed mb-8">
                  We deliver end to end solutions in the Learning & Development space, that is intended to have a direct and holistic impact on business results, team performances and individual efficacies.
                </p>
                <Button asChild className="rounded-none bg-[#6E0F1F] hover:bg-[#5B0E1A] text-white transition-colors h-14 px-10 text-base">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leaders in Lipstick Teaser */}
      <section className="py-24 bg-[#F6F1EB]">
        <div className="container mx-auto px-4 md:px-8 text-center">
           <ScrollReveal>
              <img src="https://static.wixstatic.com/media/da37d0_469712a6778641248a6a9270537e7304~mv2.png" alt="Leaders in Lipstick Logo" className="h-32 mx-auto mb-8 mix-blend-multiply" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#5B0E1A] mb-4">LEADERS IN LIPSTICK®</h2>
              <p className="text-xl text-[#1E1A17]/70 italic mb-8">Dream – Define – Do</p>
              <p className="font-serif text-2xl text-[#6E0F1F] mb-10">We Celebrate Women Leaders</p>
              
              <div className="flex justify-center gap-6">
                <Button asChild className="rounded-none bg-[#6E0F1F] hover:bg-[#5B0E1A] text-white h-14 px-10">
                  <Link href="/apply">JOIN US</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-[#5B0E1A] text-[#5B0E1A] hover:bg-[#5B0E1A] hover:text-white h-14 px-10">
                  <Link href="/leadersinlipstick">EXPLORE &rarr;</Link>
                </Button>
              </div>
           </ScrollReveal>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-white border-t border-[#D4B06A]/20">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <ScrollReveal>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-4">Featured Blog</p>
                    <h3 className="font-serif text-3xl font-bold text-[#5B0E1A] mb-6">Create an Extra Hour Each Day in which to Transform Your Life</h3>
                    <p className="text-lg text-[#1E1A17]/70 leading-relaxed mb-8">
                      You might think that you're already booked solid, but the truth is that it's not that difficult to find an hour for yourself by stealing a little bit of time from other activities.
                    </p>
                    <Button asChild variant="link" className="text-[#6E0F1F] p-0 font-bold hover:text-[#5B0E1A]">
                       <Link href="/blog">Read Full Article &rarr;</Link>
                    </Button>
                  </div>
               </ScrollReveal>
               <ScrollReveal delay={0.2}>
                  <img src="https://static.wixstatic.com/media/da37d0_20c744baeb514320bf2570b92046ec1e~mv2.jpg" alt="Blog Teaser" className="w-full aspect-video object-cover rounded-sm shadow-md" />
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#5B0E1A] text-white">
         <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
            <ScrollReveal>
               <Quote className="w-12 h-12 text-[#D4B06A] mx-auto mb-8 opacity-50" />
               <p className="font-serif text-xl md:text-2xl leading-relaxed italic mb-10">
                 "Feb 2016: I had the chance to attend your lecture while serving in IDBI BANK as Assistant Manager. Seeing you teach with such passion made me question myself — will I ever be this passionate about my job? You were so full of life. You inspired me to pursue my dream of becoming a civil servant and resume my preparation.<br/><br/>
                 August 2020: Have qualified civil services 2019. AIR 680. It was not possible without your help ma'am. Thank you so much for inspiring this average kid to believe in his dreams. Thank you for showing me that it is okay to dream and chase them."
               </p>
               <p className="text-sm uppercase tracking-widest text-[#D4B06A] font-bold">— Yashlok Kumar Dutt, IRS Officer</p>
            </ScrollReveal>
         </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-24 bg-[#F6F1EB]">
         <div className="container mx-auto px-4 md:px-8">
            <ScrollReveal>
               <div className="text-center mb-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D4B06A] font-bold mb-3">Honors</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5B0E1A] mb-4">Awards & Recognitions</h2>
               </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {awardImages.map((img, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                     <div className="aspect-square overflow-hidden rounded-sm border border-[#D4B06A]/20 bg-white">
                        <img src={img} alt={`Award ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                     </div>
                  </ScrollReveal>
               ))}
            </div>
         </div>
      </section>

    </Layout>
  );
}
