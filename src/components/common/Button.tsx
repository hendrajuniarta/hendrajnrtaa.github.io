import { motion } from 'framer-motion'
import type { ButtonProps } from '../../types/index.ts'

const variantStyles: Record<string, string> = {
  primary:
    'relative overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 bg-[length:200%_auto] hover:bg-right text-white shadow-[0_0_24px_-4px_rgba(99,102,241,0.45)] hover:shadow-[0_0_32px_-2px_rgba(99,102,241,0.6)] border border-indigo-400/40 font-semibold',
  secondary:
    'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/[0.1] hover:border-white/[0.2] backdrop-blur-md shadow-sm',
  outline:
    'border border-zinc-700/80 hover:border-indigo-400/60 bg-zinc-900/40 hover:bg-indigo-500/10 text-zinc-300 hover:text-white backdrop-blur-md',
  ghost:
    'text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-button',
}

const sizeStyles: Record<string, string> = {
  sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-lg',
  md: 'px-5 py-2.5 text-sm gap-2 rounded-xl',
  lg: 'px-6 py-3 text-base gap-2.5 rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = [
    'inline-flex items-center justify-center',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
    'cursor-pointer select-none tracking-wide',
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`group ${baseStyles}`}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseStyles}`}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
