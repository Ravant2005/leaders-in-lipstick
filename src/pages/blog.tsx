import { Layout } from "@/components/layout/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">Our Blog</h1>
        <p className="text-xl text-foreground/70 max-w-2xl font-light">
          Insights, leadership stories, and industry perspectives from our global network of women leaders. Coming soon.
        </p>
      </div>
    </Layout>
  );
}
