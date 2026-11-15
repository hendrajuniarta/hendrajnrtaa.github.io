import { motion } from 'framer-motion'
import type { SectionContainerProps } from '../../types/index.ts'

export default function SectionContainer({
  children,
  id,
  title,
  subtitle,
  className = '',
  fullWidth = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-24 sm:py-28 lg:py-32 relative ${className}`}
    >
      <div
        className={
          fullWidth
            ? 'w-full'
            : 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
        }
      >
        {/* Section Header */}
        {(title || subtitle) && (
          <motion.div
            className="mb-14 sm:mb-16 lg:mb-20 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
                {subtitle}
              </p>
            )}
            {/* Subtle decorative glowing accent bar */}
            <div className="mt-6 flex items-center justify-center gap-1.5">
              <span className="h-1 w-2 rounded-full bg-indigo-500/40" />
              <span className="h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
              <span className="h-1 w-2 rounded-full bg-indigo-500/40" />
            </div>
          </motion.div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  )
}
