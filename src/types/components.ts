// ===== Common Component Types =====

import type { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  bordered?: boolean
  padded?: boolean
  as?: 'div' | 'article' | 'section'
}

export interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info'
  className?: string
}

export interface SectionContainerProps {
  children: ReactNode
  id?: string
  title?: string
  subtitle?: string
  className?: string
  fullWidth?: boolean
}
