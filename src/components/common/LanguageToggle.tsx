import { Globe } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.tsx'

interface LanguageToggleProps {
  className?: string
  showIcon?: boolean
}

export default function LanguageToggle({ className = '', showIcon = true }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-1 rounded-full bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md ${className}`}
    >
      {showIcon && (
        <span className="pl-2 pr-1 text-zinc-400">
          <Globe size={13} />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]'
            : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('id')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
          language === 'id'
            ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.5)]'
            : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
        }`}
        aria-pressed={language === 'id'}
      >
        ID
      </button>
    </div>
  )
}
