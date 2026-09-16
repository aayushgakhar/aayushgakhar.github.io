import { GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { education, profile } from '../data/portfolio'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Backend systems, in production"
      description="A quick introduction to how I work and what I optimize for."
    >
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5">
          {profile.summary.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              {paragraph}
            </p>
          ))}

          <dl className="grid gap-3 pt-2 sm:grid-cols-2">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="card px-4 py-3">
                <dt className="font-mono text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="flex items-center gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400">
            <GraduationCap size={16} /> education
          </h3>
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <div key={item.school} className="card p-5">
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.school}
                </p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {item.degree}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  <span>{item.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.location}</span>
                  <span className="ml-auto rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-medium text-emerald-700 dark:text-emerald-300">
                    {item.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}