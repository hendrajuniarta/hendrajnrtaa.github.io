import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Card } from '../components/common/index.ts'
import { SectionContainer } from '../components/layout/index.ts'
import { useLanguage } from '../context/LanguageContext.tsx'

export default function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer
      id="experience"
      title={t.experience.title}
      subtitle={t.experience.subtitle}
    >
      <div className="max-w-4xl mx-auto space-y-10 relative">
        {/* Decorative illuminated timeline spine for desktop */}
        <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500 via-indigo-600/40 to-transparent" />

        {t.experience.items.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative md:pl-20"
          >
            {/* Timeline Node (desktop) */}
            <div className="hidden md:flex absolute left-5 -translate-x-1/2 top-8 h-7 w-7 rounded-full bg-zinc-950 border-2 border-indigo-500/80 items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.5)] z-10">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
            </div>

            <Card className="p-7 sm:p-9 group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="mb-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3.5 text-sm text-zinc-400">
                    <span className="font-semibold text-indigo-300">
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1.5 text-zinc-400 text-xs sm:text-sm">
                        <MapPin size={13} className="text-zinc-500" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Date Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 self-start shadow-inner">
                  <Calendar size={13} className="text-indigo-400" />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Responsibilities list - Clean Typographic Bullets */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  {t.experience.responsibilitiesTitle}
                </p>
                <div className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                      <span className="leading-relaxed font-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
