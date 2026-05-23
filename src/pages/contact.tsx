import { Layout } from "@/components/layout/Layout";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      inquiryType: "membership",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Received",
      description: "Our executive team will be in touch within 24 hours.",
    });
    form.reset();
  }

  return (
    <Layout>
      <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-card border-b border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-primary uppercase tracking-widest text-sm font-bold mb-6 block">Connect</span>
            </ScrollReveal>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
              <RevealText text="Take Your Seat." />
            </h1>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl">
                Whether you're inquiring about membership, corporate partnerships, or press—we're ready to start the conversation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">

            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Direct Inquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Alexandra Sterling" className="rounded-none border-border/50 bg-card h-14 focus-visible:ring-primary focus-visible:border-primary transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="alex@company.com" className="rounded-none border-border/50 bg-card h-14 focus-visible:ring-primary focus-visible:border-primary transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Optional" className="rounded-none border-border/50 bg-card h-14 focus-visible:ring-primary focus-visible:border-primary transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Inquiry Type</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-14 w-full rounded-none border border-border/50 bg-card px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="membership">Membership Application</option>
                              <option value="corporate">Corporate Training Proposal</option>
                              <option value="press">Press & Media</option>
                              <option value="speaking">Speaking Engagement</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="min-h-[180px] rounded-none border-border/50 bg-card p-4 focus-visible:ring-primary focus-visible:border-primary transition-colors resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="rounded-none bg-primary hover:bg-secondary hover:text-foreground text-white px-12 h-14 text-base w-full md:w-auto transition-colors">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-12 md:pl-12 lg:pl-16 mt-12 md:mt-0">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Direct Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <Mail className="w-5 h-5 text-primary transition-transform group-hover:scale-110 duration-300" />
                    <a href="mailto:contact@sijivarghese.com" className="text-base text-foreground hover:text-primary transition-colors">contact@sijivarghese.com</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </Layout>
  );
}
