import { Header } from "./Header";
import { NewsSection } from "./NewsSection";
import { ProjectGrid } from "./ProjectGrid";
import { Footer } from "./Footer";

export function PageList() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container flex-1 px-4 py-8 md:px-6 md:py-12">
        <NewsSection />
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
}