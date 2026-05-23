import { LUXURY_PALETTE, getContrastRatio, isAACompliant } from "@/lib/color-system";
import { Card } from "@/components/ui/card";

export default function DesignSystem() {
  const colorPairs = [
    { fg: LUXURY_PALETTE.ivory, bg: LUXURY_PALETTE.burgundy, label: "Ivory on Burgundy" },
    { fg: LUXURY_PALETTE.luxuryGold, bg: LUXURY_PALETTE.oxblood, label: "Gold on Oxblood" },
    { fg: LUXURY_PALETTE.burgundy, bg: LUXURY_PALETTE.champagne, label: "Burgundy on Champagne" },
    { fg: LUXURY_PALETTE.oxblood, bg: LUXURY_PALETTE.ivory, label: "Oxblood on Ivory" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-24 grain-texture">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <section className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif text-primary">Luxury Design System</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl text-foreground/80">
            A comprehensive visual language built for elegance, power, and prestige. 
            Combining deep wine tones with champagne accents and classic typography.
          </p>
        </section>

        {/* Color Palette */}
        <section className="space-y-12">
          <h2 className="text-4xl font-serif border-b border-border pb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {Object.entries(LUXURY_PALETTE).map(([name, hex]) => (
              <div key={name} className="space-y-3">
                <div 
                  className="h-32 w-full rounded-sm shadow-lg border border-border/20 transition-transform hover:scale-105" 
                  style={{ backgroundColor: hex }}
                />
                <div className="space-y-1">
                  <p className="font-bold text-sm capitalize">{name.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="font-mono text-xs opacity-60 uppercase">{hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-12">
          <h2 className="text-4xl font-serif border-b border-border pb-4">Typography Pairings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">Display Serif</p>
                <h3 className="text-5xl font-serif">Playfair Display</h3>
                <p className="font-serif italic text-2xl">The ROI of Investing in Women.</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">Secondary Serif</p>
                <h3 className="text-5xl font-cormorant" style={{ fontFamily: 'var(--font-cormorant)' }}>Cormorant Garamond</h3>
                <p className="text-2xl italic" style={{ fontFamily: 'var(--font-cormorant)' }}>Redefining business archetypes.</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">Modern Serif</p>
                <h3 className="text-5xl font-bodoni" style={{ fontFamily: 'var(--font-bodoni)' }}>Bodoni Moda</h3>
                <p className="text-2xl tracking-tighter" style={{ fontFamily: 'var(--font-bodoni)' }}>ELITE NETWORK OF LEADERS.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">Body Sans</p>
                <h3 className="text-5xl font-sans">Inter</h3>
                <p className="text-lg leading-relaxed max-w-md">
                  A glimpse of the global powerhouses you could meet in our elite network of women leaders. 
                  Focused on clarity and modern professionalism.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-secondary font-bold">Secondary Sans</p>
                <h3 className="text-5xl" style={{ fontFamily: 'var(--font-manrope)' }}>Manrope</h3>
                <p className="text-lg leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Bold, geometric, and highly readable across all digital interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="space-y-12">
          <h2 className="text-4xl font-serif border-b border-border pb-4">Accessibility (WCAG 2.1 AA)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {colorPairs.map((pair, idx) => {
              const ratio = getContrastRatio(pair.fg, pair.bg);
              const compliant = isAACompliant(pair.fg, pair.bg);
              return (
                <div 
                  key={idx}
                  className="p-12 rounded-lg flex flex-col justify-between space-y-8 soft-shadow-overlay"
                  style={{ backgroundColor: pair.bg, color: pair.fg }}
                >
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-widest opacity-80">{pair.label}</p>
                    <h4 className="text-4xl font-serif">Luxury Standards</h4>
                  </div>
                  <div className="flex items-end justify-between border-t border-current/20 pt-6">
                    <div>
                      <p className="text-3xl font-bold">{ratio.toFixed(2)}:1</p>
                      <p className="text-xs opacity-60 uppercase">Contrast Ratio</p>
                    </div>
                    <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${compliant ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {compliant ? 'AA Compliant' : 'Below Standard'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visual Effects */}
        <section className="space-y-12 pb-24">
          <h2 className="text-4xl font-serif border-b border-border pb-4">Visual Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="h-64 glass-card-red rounded-xl flex items-center justify-center border border-luxuryGold/20">
                <span className="text-ivory font-serif text-xl">Glassmorphism</span>
              </div>
              <p className="text-sm text-foreground/60 italic text-center">Blur: 12px | Opacity: 70% | Border: Gold 20%</p>
            </div>
            <div className="space-y-4">
              <div className="h-64 bg-burgundy rounded-xl vignette flex items-center justify-center">
                <span className="text-ivory font-serif text-xl">Vignette Overlay</span>
              </div>
              <p className="text-sm text-foreground/60 italic text-center">Inner Shadow: 100px | Black 40%</p>
            </div>
            <div className="space-y-4">
              <div className="h-64 bg-oxblood rounded-xl grain-texture flex items-center justify-center overflow-hidden">
                <span className="text-ivory font-serif text-xl">Grain Texture</span>
              </div>
              <p className="text-sm text-foreground/60 italic text-center">Stardust Pattern | Opacity: 3%</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
