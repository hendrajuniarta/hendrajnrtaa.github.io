import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Card } from '../components/common/index.ts'
import { SectionContainer } from '../components/layout/index.ts'
import { useLanguage } from '../context/LanguageContext.tsx'

export default function EducationSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer
      id="education"
      title={t.education.title}
      subtitle={t.education.subtitle}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-7 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-2 block">
                  {t.education.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {t.education.institution}
                </h3>
                <p className="text-indigo-300 font-semibold mt-1 text-base sm:text-lg">
                  {t.education.degree}
                </p>
                <div className="flex items-center gap-2 mt-2.5 text-xs sm:text-sm font-mono text-zinc-400">
                  <Calendar size={13} className="text-indigo-400" />
                  <span>{t.education.startDate} – {t.education.endDate}</span>
                </div>
              </div>

              {/* GPA Badge Highlight */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-indigo-500/30 flex flex-col justify-center shrink-0 shadow-[0_0_25px_-5px_rgba(99,102,241,0.25)] min-w-[140px]">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                  {t.education.gpaLabel}
                </p>
                <p className="text-2xl font-black text-white tracking-tight mt-0.5">
                  {t.education.gpaValue}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              {t.education.description}
            </p>

            {/* Core Academic Competencies - Clean Typographic List */}
            <div className="mt-8 pt-8 border-t border-white/[0.08]">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                {t.education.highlightsTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.education.highlights.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950/50 border border-white/[0.05] text-xs sm:text-sm text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                    <span className="leading-relaxed font-normal">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
