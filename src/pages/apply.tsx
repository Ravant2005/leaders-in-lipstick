import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Apply() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: To make this work, go to https://web3forms.com/
    // Enter siji143@gmail.com and get your free Access Key.
    // Replace "YOUR_ACCESS_KEY_HERE" with your actual key below.
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FDFBF9] pt-32 pb-24 flex justify-center">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#E8DDD2] overflow-hidden">
            {/* Top Red Banner */}
            <div className="bg-[#A31621] py-4 px-8">
              <h1 className="text-white font-sans text-sm font-medium tracking-wide">
                Apply for Membership | Leaders in Lipstick
              </h1>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-[#A31621]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#A31621]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif font-medium text-[#A31621] mb-2">Application Submitted</h2>
                  <p className="text-[#1E1A17]/70">Thank you. We will review your profile and get back to you soon.</p>
                  <Button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-[#A31621] hover:bg-[#8A1523] text-white rounded-none px-8"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  <h2 className="text-[#A31621] font-sans text-sm md:text-base font-medium tracking-wide mb-8">
                    Step 2 of 4 | Your Professional Profile
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1E1A17]/80 block">Full Name</label>
                      <input 
                        type="text" 
                        name="Full Name"
                        placeholder="Field"
                        className="w-full border border-[#D4B06A]/40 rounded-sm py-3 px-4 bg-white focus:outline-none focus:border-[#A31621] text-sm text-[#1E1A17] placeholder:text-[#1E1A17]/30 transition-colors"
                        required
                      />
                    </div>

                    {/* Job Title */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1E1A17]/80 block">Job Title</label>
                      <input 
                        type="text" 
                        name="Job Title"
                        placeholder="Field"
                        className="w-full border border-[#D4B06A]/40 rounded-sm py-3 px-4 bg-white focus:outline-none focus:border-[#A31621] text-sm text-[#1E1A17] placeholder:text-[#1E1A17]/30 transition-colors"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1E1A17]/80 block">Company</label>
                      <input 
                        type="text" 
                        name="Company"
                        placeholder="Field"
                        className="w-full border border-[#D4B06A]/40 rounded-sm py-3 px-4 bg-white focus:outline-none focus:border-[#A31621] text-sm text-[#1E1A17] placeholder:text-[#1E1A17]/30 transition-colors"
                        required
                      />
                    </div>

                    {/* Industry */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1E1A17]/80 block">Industry</label>
                      <input 
                        type="text" 
                        name="Industry"
                        placeholder="Field"
                        className="w-full border border-[#D4B06A]/40 rounded-sm py-3 px-4 bg-white focus:outline-none focus:border-[#A31621] text-sm text-[#1E1A17] placeholder:text-[#1E1A17]/30 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Leadership Goals */}
                  <div className="space-y-2 pt-2">
                    <label className="text-sm font-medium text-[#1E1A17]/80 block">What are your leadership goals?</label>
                    <textarea 
                      name="Leadership Goals"
                      rows={4}
                      placeholder="Field"
                      className="w-full border border-[#D4B06A]/40 rounded-sm py-3 px-4 bg-white focus:outline-none focus:border-[#A31621] text-sm text-[#1E1A17] placeholder:text-[#1E1A17]/30 resize-none transition-colors"
                      required
                    ></textarea>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-2 flex flex-col md:flex-row items-end justify-between gap-6">
                    <div className="space-y-2 w-full md:max-w-md">
                      <label className="text-sm font-medium text-[#1E1A17]/80 block">How did you hear about us?</label>
                      <input 
                        type="text" 
                        name="How did you hear about us"
                        placeholder="Field"
                        className="w-full border border-[#D4B06A]/40 rounded-sm py-3 px-4 bg-white focus:outline-none focus:border-[#A31621] text-sm text-[#1E1A17] placeholder:text-[#1E1A17]/30 transition-colors"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full md:w-auto bg-[#A31621] hover:bg-[#8A1523] text-white rounded-none px-10 py-6 h-auto font-medium text-base transition-all disabled:opacity-70"
                    >
                      {status === "submitting" ? "Sending..." : "Next Step >"}
                    </Button>
                  </div>
                  
                  {status === "error" && (
                    <div className="text-red-500 text-sm mt-4">
                      There was an error sending your application. Please check your Access Key.
                    </div>
                  )}

                </form>
              )}

              {/* Subtext */}
              <div className="mt-12 text-[#1E1A17]/40 text-xs tracking-wide">
                Multi-step premium application with confirmation flow
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
