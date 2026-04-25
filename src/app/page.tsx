import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative z-0 bg-[#0b0b1a] min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <Experience />
      <footer className="text-center py-12 border-t border-[#1d1836] text-[#aaa6c3] text-sm">
        <p>&copy; 2026 Abdur Rehman. System SECURED.</p>
      </footer>
    </main>
  );
}