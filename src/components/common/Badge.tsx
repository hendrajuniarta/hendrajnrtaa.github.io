import type { BadgeProps } from '../../types/index.ts'

const variantStyles: Record<string, string> = {
  default: 'bg-zinc-800/80 text-zinc-300 border-white/[0.08]',
  primary: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30 shadow-[0_0_12px_-2px_rgba(99,102,241,0.25)]',
  success: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 shadow-[0_0_12px_-2px_rgba(16,185,129,0.25)]',
  warning: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  info: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md transition-all duration-200 tracking-wide whitespace-nowrap shrink-0 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
