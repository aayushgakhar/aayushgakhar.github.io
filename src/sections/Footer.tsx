import { ArrowUp } from 'lucide-react'
import { SocialIcon } from '../components/SocialIcon'
import { profile, socials } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-white/5">
      <div className="layout flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 font-mono text-xs font-bold text-zinc-950">
            AG
          </span>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
            © {year} {profile.name} · built with React & Vite
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <SocialIcon key={social.label} social={social} />
          ))}
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
        >
          back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}