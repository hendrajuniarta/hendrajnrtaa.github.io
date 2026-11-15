import { motion } from 'framer-motion'
import { Card } from '../components/common/index.ts'
import { SectionContainer } from '../components/layout/index.ts'
import { skills } from '../data/index.ts'
import { useLanguage } from '../context/LanguageContext.tsx'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer
      id="about"
      title={t.about.title}
      subtitle={t.about.subtitle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Narrative Bento Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-7 sm:p-9">
            <div className="flex items-center gap-3.5 mb-6">
              <span className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-xs tracking-wider">
                HJ
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t.hero.fullName}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  {t.about.knownAs} <span className="text-indigo-400 font-semibold">{t.hero.brandName}</span>
                </p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg font-normal">
              {t.about.bioP1}
            </p>

            <p className="mt-4 text-zinc-300 leading-relaxed text-base sm:text-lg font-normal">
              {t.about.bioP2}
            </p>

            {/* Core Highlights - Clean Typographic List */}
            <div className="mt-8 pt-8 border-t border-white/[0.08] space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {t.about.strengthsTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.about.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-white/[0.06] transition-all duration-300 hover:border-indigo-500/30"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Technology Stack Pill Card */}
          <Card className="p-6 sm:p-7">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
              {t.about.techStackTitle}
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-950/70 border border-white/[0.08] text-xs sm:text-sm font-medium text-zinc-200 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300 tracking-wide cursor-default shadow-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Focus Areas Bento Grid (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-5">
          {t.about.categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="relative p-6 sm:p-7 rounded-2xl bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/40 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.15] before:to-transparent">
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <h4 className="font-bold text-white text-base sm:text-lg tracking-tight">
                    {cat.title}
                  </h4>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-0.5 rounded-md bg-zinc-950/80 border border-white/[0.06]">
                    {cat.badge}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-lg bg-zinc-950/70 text-zinc-300 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
