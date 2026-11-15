import { Mail, MapPin, Send } from 'lucide-react'
import { Card, Button } from '../components/common/index.ts'
import { SectionContainer } from '../components/layout/index.ts'
import { personalInfo } from '../data/index.ts'
import { useLanguage } from '../context/LanguageContext.tsx'

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <SectionContainer
      id="contact"
      title={t.contact.title}
      subtitle={t.contact.subtitle}
    >
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 sm:p-12 relative overflow-hidden bg-zinc-900/40 border-white/[0.1]">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left Column: Direct Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  {t.contact.heading}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  {t.contact.description}
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-950/60 border border-white/[0.06] hover:border-indigo-500/40 hover:bg-zinc-950/90 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                      {t.contact.emailLabel}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-zinc-950/60 border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                      {t.contact.locationLabel}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {t.contact.locationValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl bg-zinc-950/80 border border-white/[0.08] text-center shadow-xl relative overflow-hidden">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3 font-semibold">
                {t.contact.directContact}
              </span>
              <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
                {t.contact.sendInquiry}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6 max-w-xs leading-relaxed font-normal">
                {t.contact.ctaDescription}
              </p>
              <Button
                href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20-%20${encodeURIComponent(t.hero.brandName)}`}
                variant="primary"
                size="lg"
                icon={<Send size={16} />}
                iconPosition="right"
                className="w-full"
              >
                {t.contact.sendButton}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  )
}
