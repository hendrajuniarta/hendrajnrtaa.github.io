import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../../data/index.ts'
import { useLanguage } from '../../context/LanguageContext.tsx'
import { LanguageToggle } from '../common/index.ts'
import faviconImg from '../../assets/img/favicon.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.certifications, href: '#certifications' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent border-b border-transparent'
        }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex h-18 sm:h-20 items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 sm:gap-3 text-xl sm:text-2xl font-black tracking-tight shrink-0"
          >
            <img
              src={faviconImg}
              alt={personalInfo.brandName}
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
              {personalInfo.brandName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md">
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions: Language Switcher & CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-full shadow-[0_0_20px_-3px_rgba(99,102,241,0.5)] border border-indigo-400/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>{t.nav.contactMe}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle showIcon={false} />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900/80 border border-white/[0.08] rounded-xl transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden border-b border-white/[0.08] bg-zinc-950/95 backdrop-blur-2xl px-6 py-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="space-y-2">
              {navItems.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>{t.nav.contactMe}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
