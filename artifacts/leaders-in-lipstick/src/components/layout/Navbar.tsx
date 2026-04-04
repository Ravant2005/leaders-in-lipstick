import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/corporate-solutions", label: "Corporate Solutions" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events & Summits" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border/40 shadow-sm"
          : "bg-transparent text-foreground"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-serif font-bold text-2xl tracking-tighter text-primary">
            Leaders in Lipstick
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <Button asChild variant="default" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/community">Join the Community</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden z-50 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 transition-transform duration-300 xl:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-6 text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-serif text-2xl flex items-center justify-between border-b border-border/50 pb-4",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
                <ChevronRight className="w-5 h-5 opacity-50" />
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Button asChild className="w-full rounded-none" size="lg">
              <Link href="/community">Join the Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
