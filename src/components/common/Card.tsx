import { motion } from 'framer-motion'
import type { CardProps } from '../../types/index.ts'

export default function Card({
  children,
  className = '',
  hoverable = true,
  bordered = true,
  padded = true,
  as: Tag = 'div',
}: CardProps) {
  const baseStyles = [
    'relative rounded-2xl bg-zinc-900/40 backdrop-blur-xl overflow-hidden',
    'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.15] before:to-transparent before:pointer-events-none',
    bordered ? 'border border-white/[0.08]' : '',
    padded ? 'p-6 sm:p-7 lg:p-8' : '',
    hoverable
      ? 'transition-all duration-300 ease-out hover:border-indigo-500/35 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(99,102,241,0.15)] hover:-translate-y-1'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="h-full"
    >
      <Tag className={baseStyles}>{children}</Tag>
    </motion.div>
  )
}
