import { motion } from 'motion/react'
import { ArrowRight, Terminal } from 'lucide-react'
import { Terminal as WTerminal } from '@wterm/react'
import { SocialIcon } from '../components/SocialIcon'
import { profile, socials } from '../data/portfolio'
import { useTerminalShell } from '../hooks/useTerminalShell'

const stats = [
  { value: '250M+', label: 'users scaled to' },
  { value: '1M+', label: 'gameplays / day' },
  { value: '99.8%', label: 'platform uptime' },
  { value: '30+', label: 'microservices' },
]

export function Hero() {
  const { onReady, onData } = useTerminalShell()

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 text-zinc-900 grid-bg opacity-[0.35] dark:text-white dark:opacity-30" />
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl animate-blob dark:bg-emerald-500/20" />
      <div className="pointer-events-none absolute -right-16 top-40 -z-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:4s] dark:bg-cyan-500/10" />

      <div className="layout grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            backend engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="caret mt-3 font-mono text-lg text-emerald-600 sm:text-xl dark:text-emerald-400"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn btn-primary">
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Download résumé
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-5">
            {socials.slice(0, 4).map((social) => (
              <SocialIcon key={social.label} social={social} size={20} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card overflow-hidden p-0"
        >
          <div className="flex items-center gap-2 border-b border-zinc-200/70 px-4 py-3 dark:border-white/5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-zinc-500">
              <Terminal size={13} /> aayush — zsh
            </span>
          </div>
          <div className="hero-terminal h-[288px] sm:h-[300px]">
            <WTerminal
              theme="portfolio"
              autoResize
              cursorBlink
              className="h-full w-full"
              aria-label="Interactive terminal. Type help and press enter."
              onData={onData}
              onReady={onReady}
            />
          </div>
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="layout mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card px-5 py-4 transition-colors hover:border-emerald-500/40"
          >
            <dt className="font-mono text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
              {stat.value}
            </dt>
            <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}