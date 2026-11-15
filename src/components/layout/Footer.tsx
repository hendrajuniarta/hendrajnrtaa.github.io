import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '../../data/index.ts'
import { useLanguage } from '../../context/LanguageContext.tsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="relative border-t border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl">
        {/* Subtle top edge glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Brand Info */}
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <a
                href="#home"
                className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-violet-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)] transition-all tracking-tight"
              >
                {personalInfo.logoInitials}
              </a>
              <span className="hidden sm:inline-block text-zinc-700">|</span>
              <p className="text-xs sm:text-sm text-zinc-400">
                <strong className="text-zinc-200 font-medium">{t.hero.fullName}</strong> &bull; {t.footer.roleTitle}
              </p>
            </div>

            {/* Copyright & Tech */}
            <p className="text-xs sm:text-sm text-zinc-500 flex items-center gap-1.5 text-center sm:text-right">
              &copy; {currentYear} {t.hero.brandName}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-zinc-900/90 hover:bg-indigo-600 border border-white/10 hover:border-indigo-400/50 backdrop-blur-md text-zinc-300 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
            aria-label={t.footer.backToTop}
            title={t.footer.backToTop}
          >
            <ArrowUp className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors duration-300 stroke-[2.25]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
