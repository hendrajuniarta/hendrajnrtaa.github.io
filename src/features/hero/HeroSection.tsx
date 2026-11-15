import { motion } from 'framer-motion'
import { ArrowDown, Mail, Code2 } from 'lucide-react'
import { Button } from '../../components/common/index.ts'
import { SectionContainer } from '../../components/layout/index.ts'
import { useLanguage } from '../../context/LanguageContext.tsx'
import profilePhoto from '../../assets/img/hjimage.png'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center w-full relative z-10">
        {/* Left Column: Typography & CTAs (7 cols on lg) */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Hero Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.08] sm:leading-[1.08]">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              {t.hero.brandName}
            </span>
          </h1>

          {/* Headline Role */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </div>

          {/* Short Bio */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
            {t.hero.shortBio}
          </p>

          {/* Quick Metrics Bento Row */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl">
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.hero.yearsNumber}
              </p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">{t.hero.yearsLabel}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/60">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{t.hero.gpaNumber}</p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">{t.hero.gpaLabel}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:bg-zinc-900/60 col-span-2 sm:col-span-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{t.hero.enterpriseNumber}</p>
              <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">{t.hero.enterpriseLabel}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowDown size={18} />}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {t.hero.exploreProjects}
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              icon={<Mail size={18} />}
              className="w-full sm:w-auto"
            >
              {t.hero.contactMe}
            </Button>
          </div>
        </motion.div>

        {/* Right Column: High-End Geometric Photo Frame (5 cols on lg) */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Radial Ambient Backlight */}
          <div className="absolute -inset-4 sm:-inset-8 rounded-[3rem] bg-gradient-to-tr from-indigo-500/25 via-violet-600/20 to-emerald-500/15 blur-3xl -z-10 animate-pulse-subtle" />

          {/* High-End Geometric Outer Frame */}
          <div className="relative w-full max-w-[290px] sm:max-w-[360px] lg:max-w-[400px] p-2.5 sm:p-3 rounded-[2.25rem] bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-white/[0.02] border border-white/[0.12] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_40px_-10px_rgba(99,102,241,0.25)] backdrop-blur-2xl group">

            {/* Subtle top-right decorative corner bracket */}
            <div className="absolute -top-2 -right-2 w-7 h-7 border-t-2 border-r-2 border-indigo-400/60 rounded-tr-xl pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-7 h-7 border-b-2 border-l-2 border-indigo-400/60 rounded-bl-xl pointer-events-none" />

            {/* Inner Photo Container (3:4 aspect ratio) */}
            <div className="relative w-full aspect-[3/4] rounded-[1.8rem] overflow-hidden bg-zinc-950 border border-white/[0.08] shadow-inner">
              <img
                src={profilePhoto}
                alt={t.hero.fullName}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Floating Glassmorphism Badge */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/[0.12] shadow-[0_16px_36px_rgba(0,0,0,0.65)] flex items-center justify-between gap-3 transition-all duration-300 group-hover:border-indigo-500/40">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 shrink-0">
                    <Code2 size={18} className="text-indigo-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base font-bold text-white truncate leading-tight tracking-tight">
                      {t.hero.fullName}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-indigo-300/90 truncate mt-0.5">
                      {t.hero.developerRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
