import { Layout } from "@/components/layout/Layout";

export default function Retreats() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">Inner Circle Retreats</h1>
        <p className="text-xl text-foreground/70 max-w-2xl font-light">
          Exclusive, high-impact gatherings designed to foster deep connections and transformative leadership growth. Retreat schedule coming soon.
        </p>
      </div>
    </Layout>
  );
}
