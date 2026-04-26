import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen bg-hero-bg">
      {/* Ambient Background Effects */}
      <div className="star-field" />
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />

      {/* Navigation */}
      <Navbar />

      {/* Hero — own stacking context */}
      <Hero />

      {/* Content sections — isolated stacking context */}
      <div className="relative z-0 bg-hero-bg">
        <Experience />
        <Projects />

        {/* Contact */}
        <section
          id="contact"
          className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[28px]">
              Get In <span className="teal-gradient">Touch.</span>
            </h2>
            <p className="mt-4 text-secondary text-[15px] max-w-xl leading-[30px]">
              Open to cybersecurity opportunities, research collaborations, and
              security consulting engagements.
            </p>
            <a
              href="mailto:abdurrehman@example.com"
              className="mt-10 px-8 py-4 rounded-xl font-semibold text-[14px] tracking-wider uppercase bg-tertiary border border-accent/30 text-accent transition-all duration-300 hover:scale-105 hover:border-accent/60"
            >
              Say Hello
            </a>
          </div>
        </section>

        <footer className="text-center py-10 border-t border-white/5">
          <p className="text-secondary text-sm opacity-60">
            &copy; 2026 Abdur Rehman. System SECURED.
          </p>
        </footer>
      </div>
    </main>
  );
}