import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Card, Badge } from '../components/common/index.ts'
import { SectionContainer } from '../components/layout/index.ts'
import { useLanguage } from '../context/LanguageContext.tsx'
import bnspImg from '../assets/img/sertif-bnsp.jpeg'
import cybersecurityImg from '../assets/img/cybersecurity.jpg'

export default function CertificationsSection() {
  const { t } = useLanguage()
  const [activeCertId, setActiveCertId] = useState<string>('cybersecurity-essentials')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Map certificate image assets
  const certImages: Record<string, { src: string; aspect: string }> = {
    'cybersecurity-essentials': {
      src: cybersecurityImg,
      aspect: 'aspect-[1754/1241]',
    },
    'bnsp-web': {
      src: bnspImg,
      aspect: 'aspect-[1000/1409]',
    },
  }

  // Active certificate item
  const activeCert =
    t.certifications.items.find((item) => item.id === activeCertId) ||
    t.certifications.items[0]

  const currentImageData = certImages[activeCert.id] || certImages['cybersecurity-essentials']

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <SectionContainer
      id="certifications"
      title={t.certifications.title}
      subtitle={t.certifications.subtitle}
    >
      {/* Certificate Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {t.certifications.items.map((cert) => {
          const isActive = cert.id === activeCert.id
          return (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActiveCertId(cert.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_20px_-3px_rgba(99,102,241,0.5)] border border-indigo-400/40 scale-[1.02]'
                : 'bg-zinc-900/60 border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-zinc-800/80 backdrop-blur-md'
                }`}
            >
              <span>{cert.title}</span>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Certificate Preview Frame */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] bg-zinc-900/40 backdrop-blur-xl shadow-2xl p-4 sm:p-6 group before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.2] before:to-transparent">
            {/* Top Bar Indicator */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                {t.certifications.credentialDoc}
              </span>
              <Badge variant="success" className="text-xs font-mono">
                {t.certifications.verifiedBadge}
              </Badge>
            </div>

            {/* Clickable Certificate Container with Zoom Preview */}
            <div
              onClick={() => setIsModalOpen(true)}
              className={`relative w-full ${currentImageData.aspect} rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.08] flex items-center justify-center p-1 sm:p-2 shadow-inner group/img cursor-zoom-in transition-all duration-300`}
              role="button"
              tabIndex={0}
              aria-label={t.certifications.clickToEnlarge}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsModalOpen(true)
                }
              }}
            >
              <img
                src={currentImageData.src}
                alt={`${activeCert.title} - ${t.hero.brandName}`}
                className="w-full h-full object-contain rounded-xl transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
              />

              {/* Hover Zoom Pill Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-950/90 border border-white/20 text-white text-xs font-semibold shadow-xl">
                  <ZoomIn size={14} className="text-indigo-400" />
                  <span>{t.certifications.clickToEnlarge}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Active Certificate Credentials & Topics */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            key={activeCert.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="p-7 sm:p-9">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-1 block">
                    {activeCert.categoryBadge}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeCert.title}
                  </h4>
                  <p className="text-sm font-semibold text-zinc-400 mt-1">
                    {activeCert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {activeCert.description}
              </p>

              {/* Core Domains - Typographic List */}
              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                  {t.certifications.domainsTitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCert.domains.map((domain, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-zinc-950/40 border border-white/[0.05] text-xs text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal rendered via Portal to escape all stacking contexts */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm cursor-zoom-out"
              >
                {/* Modal Container */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative flex items-center justify-center cursor-default max-w-[88vw] sm:max-w-xl md:max-w-2xl max-h-[82vh]"
                >
                  {/* Close X Icon at the top-right corner of the certificate (Subtle, semi-transparent & sleek) */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:scale-105 active:scale-95 transition-all z-30 cursor-pointer shadow-lg focus:outline-none"
                    aria-label="Close certificate preview"
                  >
                    <X size={16} className="stroke-[1.75]" />
                  </button>

                  {/* Certificate Image */}
                  <img
                    src={currentImageData.src}
                    alt={`${activeCert.title} - ${t.hero.brandName}`}
                    className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] border border-white/10"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </SectionContainer>
  )
}
