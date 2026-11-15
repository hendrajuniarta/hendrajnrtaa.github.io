import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Card, Badge, Button } from '../components/common/index.ts'
import { SectionContainer } from '../components/layout/index.ts'
import { useLanguage } from '../context/LanguageContext.tsx'

export default function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {t.projects.items.map((proj, idx) => {
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between p-7 sm:p-9 group">
                <div>
                  {/* Top Bar: Category Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      {proj.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <Badge variant="primary" className="text-xs">
                        {proj.badgeType}
                      </Badge>
                      <Badge variant="primary" className="text-xs">
                        {proj.subCategory}
                      </Badge>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {proj.description}
                  </p>

                  {/* Architecture & Engineering Highlights Bento Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] mb-8 space-y-2.5 shadow-inner">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                      {t.projects.detailsTitle}
                    </p>
                    <ul className="text-xs sm:text-sm text-zinc-300 space-y-2">
                      {proj.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar: Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg bg-zinc-950/80 text-zinc-300 border border-white/[0.06] group-hover:border-white/[0.12] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {proj.liveUrl ? (
                    <Button
                      href={proj.liveUrl}
                      variant="primary"
                      size="md"
                      icon={<ExternalLink size={16} />}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      {t.projects.visitButton}
                    </Button>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950/80 px-4 py-2.5 rounded-xl border border-white/[0.06]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{t.projects.internalBadge}</span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
