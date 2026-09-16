import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className ?? ''}`}>
      <div className="layout">
        <Reveal>
          <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
            <span aria-hidden="true">~/</span>
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}