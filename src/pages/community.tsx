import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/ui/reveal-text";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Search, MapPin, Briefcase } from "lucide-react";
import Globe from "react-globe.gl";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";



// Expanded to 40+ countries/cities to match the "39+ countries" claim
const locationsData = [
  { id: 1, lat: 40.7128, lng: -74.0060, name: "New York, USA", members: 420, events: 12, rev: "$1.2B+" },
  { id: 2, lat: 51.5074, lng: -0.1278, name: "London, UK", members: 380, events: 9, rev: "$950M+" },
  { id: 3, lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan", members: 215, events: 5, rev: "$600M+" },
  { id: 4, lat: -33.8688, lng: 151.2093, name: "Sydney, Australia", members: 150, events: 4, rev: "$320M+" },
  { id: 5, lat: 48.8566, lng: 2.3522, name: "Paris, France", members: 290, events: 8, rev: "$750M+" },
  { id: 6, lat: -23.5505, lng: -46.6333, name: "São Paulo, Brazil", members: 110, events: 3, rev: "$210M+" },
  { id: 7, lat: 1.3521, lng: 103.8198, name: "Singapore", members: 175, events: 6, rev: "$450M+" },
  { id: 8, lat: 25.2048, lng: 55.2708, name: "Dubai, UAE", members: 205, events: 7, rev: "$580M+" },
  { id: 9, lat: 19.0760, lng: 72.8777, name: "Mumbai, India", members: 180, events: 5, rev: "$340M+" },
  { id: 10, lat: 52.5200, lng: 13.4050, name: "Berlin, Germany", members: 160, events: 4, rev: "$410M+" },
  { id: 11, lat: 43.6532, lng: -79.3832, name: "Toronto, Canada", members: 210, events: 6, rev: "$550M+" },
  { id: 12, lat: 37.7749, lng: -122.4194, name: "San Francisco, USA", members: 350, events: 10, rev: "$1.5B+" },
  { id: 13, lat: 31.2304, lng: 121.4737, name: "Shanghai, China", members: 230, events: 7, rev: "$680M+" },
  { id: 14, lat: -26.2041, lng: 28.0473, name: "Johannesburg, SA", members: 95, events: 3, rev: "$150M+" },
  { id: 15, lat: 55.7558, lng: 37.6173, name: "Moscow, Russia", members: 120, events: 4, rev: "$280M+" },
  { id: 16, lat: 19.4326, lng: -99.1332, name: "Mexico City, Mexico", members: 140, events: 5, rev: "$220M+" },
  { id: 17, lat: 37.5665, lng: 126.9780, name: "Seoul, South Korea", members: 190, events: 6, rev: "$520M+" },
  { id: 18, lat: 1.2921, lng: 36.8219, name: "Nairobi, Kenya", members: 60, events: 2, rev: "$80M+" },
  { id: 19, lat: -34.6037, lng: -58.3816, name: "Buenos Aires, Argentina", members: 85, events: 3, rev: "$120M+" },
  { id: 20, lat: 41.9028, lng: 12.4964, name: "Rome, Italy", members: 130, events: 4, rev: "$310M+" },
  { id: 21, lat: 40.4168, lng: -3.7038, name: "Madrid, Spain", members: 155, events: 5, rev: "$390M+" },
  { id: 22, lat: -37.8136, lng: 144.9631, name: "Melbourne, Australia", members: 115, events: 3, rev: "$250M+" },
  { id: 23, lat: 22.3193, lng: 114.1694, name: "Hong Kong", members: 275, events: 8, rev: "$820M+" },
  { id: 24, lat: 3.1390, lng: 101.6869, name: "Kuala Lumpur, Malaysia", members: 90, events: 3, rev: "$190M+" },
  { id: 25, lat: 59.3293, lng: 18.0686, name: "Stockholm, Sweden", members: 105, events: 3, rev: "$270M+" },
  { id: 26, lat: 52.3676, lng: 4.9041, name: "Amsterdam, Netherlands", members: 145, events: 4, rev: "$380M+" },
  { id: 27, lat: 47.3769, lng: 8.5417, name: "Zurich, Switzerland", members: 165, events: 5, rev: "$510M+" },
  { id: 28, lat: 21.0285, lng: 105.8542, name: "Hanoi, Vietnam", members: 50, events: 2, rev: "$90M+" },
  { id: 29, lat: -12.0464, lng: -77.0428, name: "Lima, Peru", members: 70, events: 2, rev: "$110M+" },
  { id: 30, lat: 6.5244, lng: 3.3792, name: "Lagos, Nigeria", members: 85, events: 3, rev: "$140M+" },
  { id: 31, lat: 30.0444, lng: 31.2357, name: "Cairo, Egypt", members: 75, events: 2, rev: "$130M+" },
  { id: 32, lat: 41.0082, lng: 28.9784, name: "Istanbul, Turkey", members: 110, events: 3, rev: "$220M+" },
  { id: 33, lat: 38.9072, lng: -77.0369, name: "Washington DC, USA", members: 220, events: 7, rev: "$610M+" },
  { id: 34, lat: 51.0447, lng: -114.0719, name: "Calgary, Canada", members: 80, events: 2, rev: "$170M+" },
  { id: 35, lat: 39.9042, lng: 116.4074, name: "Beijing, China", members: 195, events: 6, rev: "$540M+" },
  { id: 36, lat: -36.8485, lng: 174.7633, name: "Auckland, New Zealand", members: 65, events: 2, rev: "$140M+" },
  { id: 37, lat: 13.7563, lng: 100.5018, name: "Bangkok, Thailand", members: 125, events: 4, rev: "$260M+" },
  { id: 38, lat: -33.9249, lng: 18.4241, name: "Cape Town, SA", members: 55, events: 2, rev: "$100M+" },
  { id: 39, lat: 55.6761, lng: 12.5683, name: "Copenhagen, Denmark", members: 85, events: 3, rev: "$210M+" },
  { id: 40, lat: 53.3498, lng: -6.2603, name: "Dublin, Ireland", members: 140, events: 4, rev: "$350M+" },
  { id: 41, lat: 14.5995, lng: 120.9842, name: "Manila, Philippines", members: 70, events: 2, rev: "$120M+" }
];

function InteractiveGlobe() {
  const globeEl = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size, setSize] = useState(500);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0) {
          setSize(Math.min(entry.contentRect.width, 560));
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView({ altitude: 2.5 });
    }
  }, [isLoaded]);

  const handlePointHover = useCallback((point: any) => {
    if (point) {
      setSelectedLocation(point);
      if (globeEl.current) globeEl.current.controls().autoRotate = false;
    } else {
      if (globeEl.current) globeEl.current.controls().autoRotate = true;
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex justify-center items-center" style={{ height: size }}>
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
          <div className="w-16 h-16 rounded-full border-4 border-[#D4B06A]/30 border-t-[#D4B06A] animate-spin" />
          <p className="text-sm text-[#1E1A17]/50 tracking-widest uppercase font-medium">Loading Globe…</p>
        </div>
      )}

      <Globe
        ref={globeEl}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#D4B06A"
        atmosphereAltitude={0.15}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        onGlobeReady={() => setIsLoaded(true)}
        pointsData={locationsData}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#7B1728"}
        pointAltitude={0.02}
        pointRadius={2.0}
        pointsMerge={false}
        onPointHover={handlePointHover}
        pointResolution={32}
        ringsData={locationsData}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => "#D4B06A"}
        ringMaxRadius={5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1500}
      />

      {/* Stats Popup Overlay */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#FDFBF9] border border-[#D4B06A]/40 shadow-2xl p-6 w-[280px] sm:min-w-[320px] rounded-sm pointer-events-auto"
          >
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 text-[#1E1A17]/40 hover:text-[#5B0E1A] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-serif text-xl font-bold text-[#5B0E1A] mb-4 pr-6">
              {selectedLocation.name}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#D4B06A]/20 pb-2">
                <span className="text-xs uppercase tracking-widest text-[#1E1A17]/60 font-bold">Members</span>
                <span className="font-serif text-lg text-[#5B0E1A] font-bold">{selectedLocation.members}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#D4B06A]/20 pb-2">
                <span className="text-xs uppercase tracking-widest text-[#1E1A17]/60 font-bold">Annual Events</span>
                <span className="font-serif text-lg text-[#5B0E1A] font-bold">{selectedLocation.events}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-[#1E1A17]/60 font-bold">Network Revenue</span>
                <span className="font-serif text-lg text-[#5B0E1A] font-bold">{selectedLocation.rev}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-[#D4B06A] hover:bg-[#C7A46C] text-[#5B0E1A] py-3 text-sm font-bold uppercase tracking-wider transition-colors">
              View Members
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Community() {
  return (
    <Layout>
      <div className="pt-32 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Interactive Global Presence</h1>
            <p className="text-lg text-foreground/70">
              The site claims "39+ Countries" and "149+ Corporate Partners". Explore our live, interactive globe visualising the reach of Leaders in Lipstick.
            </p>
          </div>

          <div className="bg-card border border-border/20 shadow-sm p-8 md:p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left Side: Controls & Info */}
              <div className="space-y-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">Explore our global mobile network</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-3">Select region</h3>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-primary" /> World
                      </label>
                      <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                        <input type="checkbox" className="accent-primary" /> Latin America
                      </label>
                      <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                        <input type="checkbox" className="accent-primary" /> Asia Pacific
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-3">Select network type</h3>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                        <input type="checkbox" defaultChecked className="accent-primary" /> All
                      </label>
                      <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                        <input type="checkbox" className="accent-primary" /> Members
                      </label>
                      <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                        <input type="checkbox" className="accent-primary" /> Partners
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <div className="bg-primary text-white p-4 flex-1">
                    <p className="text-3xl font-serif font-bold">215</p>
                    <p className="text-xs uppercase tracking-widest mt-1 opacity-80">Countries & Territories</p>
                  </div>
                  <div className="bg-primary text-white p-4 flex-1">
                    <p className="text-3xl font-serif font-bold">579</p>
                    <p className="text-xs uppercase tracking-widest mt-1 opacity-80">Networks</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Globe */}
              <div className="relative flex justify-center items-center">
                <InteractiveGlobe />
              </div>

            </div>
          </div>

          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Directory Preview</h2>
                <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
                  A highly vetted global network of operators. Who you need to know is already here.
                </p>
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search industry or role..."
                    className="w-full bg-card border border-border/50 pl-12 pr-4 h-14 text-base focus:outline-none focus:border-primary transition-colors rounded-none"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Chief Marketing Officer", company: "FinTech Global", loc: "New York", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" },
              { name: "Elena Rostova", role: "Founder & CEO", company: "Aura Health", loc: "London", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800" },
              { name: "Michelle Chang", role: "VP of Engineering", company: "Nexus Systems", loc: "San Francisco", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800" },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden bg-card border border-border/30 hover:border-primary/50 transition-all duration-500 cursor-pointer h-full">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="p-8 flex items-center gap-6 relative z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-transparent group-hover:border-primary/20 transition-all duration-500">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div>
                      <h3 className="font-bold font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                      <div className="text-base text-muted-foreground flex items-center gap-2 mb-2 font-light">
                        <Briefcase className="w-4 h-4" /> {member.role}
                      </div>
                      <div className="text-xs text-primary/80 flex items-center gap-2 uppercase tracking-widest font-bold">
                        <MapPin className="w-4 h-4" /> {member.loc}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
