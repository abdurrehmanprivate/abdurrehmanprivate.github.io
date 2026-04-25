import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <Achievements />
      <footer className="text-center py-12 border-t border-[#111] cyber-text text-sm">
        <p>&copy; 2026 Abdur Rehman. System SECURED.</p>
      </footer>
    </main>
  );
}