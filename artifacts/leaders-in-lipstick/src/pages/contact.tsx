import { Layout } from "@/components/layout/Layout";
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
      <section className="pt-32 pb-24 md:pt-40 md:pb-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Connect</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Take Your Seat.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Whether you're inquiring about membership, corporate partnerships, or press—we're ready to start the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Direct Inquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Alexandra Sterling" className="rounded-none border-border bg-card focus-visible:ring-primary" {...field} />
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
                            <Input placeholder="alex@company.com" className="rounded-none border-border bg-card focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase tracking-widest text-xs font-bold text-muted-foreground">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Optional" className="rounded-none border-border bg-card focus-visible:ring-primary" {...field} />
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
                              className="flex h-10 w-full rounded-none border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
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
                            className="min-h-[150px] rounded-none border-border bg-card focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-white px-10">
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-12 md:pl-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">Headquarters</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold font-serif mb-1">New York</h4>
                      <p className="text-muted-foreground font-light">One World Trade Center<br/>Suite 4500<br/>New York, NY 10007</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold font-serif mb-1">London</h4>
                      <p className="text-muted-foreground font-light">Level 39, One Canada Square<br/>Canary Wharf<br/>London E14 5AB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Direct Lines</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:executive@leadersinlipstick.com" className="text-foreground hover:text-primary transition-colors">executive@leadersinlipstick.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+12125550199" className="text-foreground hover:text-primary transition-colors">+1 (212) 555-0199</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
