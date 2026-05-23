import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SocialSidebar } from "@/components/ui/social-sidebar";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <SocialSidebar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
