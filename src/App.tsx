import { LanguageProvider } from './context/LanguageContext.tsx'
import { Navbar, Footer } from './components/layout/index.ts'
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  CertificationsSection,
  ContactSection,
} from './features/index.ts'

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
        {/* Background Ambient Spotlights & Atmosphere */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Top Center Indigo Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]" />

          {/* Mid Right Soft Violet Glow */}
          <div className="absolute top-[35%] -right-48 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

          {/* Lower Left Subtle Emerald Glow */}
          <div className="absolute top-[65%] -left-48 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_70%)]" />

          {/* Subtle Architectural Dot/Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
        </div>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 overflow-hidden">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  )
}
