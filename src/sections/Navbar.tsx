import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'activity', label: 'Activity' },
  { id: 'contact', label: 'Contact' },
] as const

const NAV_IDS = NAV.map((item) => item.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_IDS)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#09090b]/80">
      <nav className="layout flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 font-mono text-sm font-bold text-zinc-950">
            AG
          </span>
          <span className="hidden font-mono text-sm text-zinc-600 sm:block dark:text-zinc-300">
            {profile.name.toLowerCase().replace(' ', '_')}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === item.id
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              <span className="font-mono text-emerald-600 dark:text-emerald-400">
                0{NAV.indexOf(item) + 1}.
              </span>{' '}
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost hidden px-4 py-2 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 md:hidden dark:border-white/10 dark:text-zinc-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-zinc-200/70 bg-zinc-50 md:hidden dark:border-white/5 dark:bg-[#09090b]"
          >
            <div className="layout flex flex-col py-3">
              {NAV.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5"
                >
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">
                    0{index + 1}.
                  </span>{' '}
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-2"
              >
                Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}