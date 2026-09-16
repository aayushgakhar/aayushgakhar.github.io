import { Trophy } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { achievements } from '../data/portfolio'

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="achievements"
      title="Competitive programming & highlights"
      description="I enjoy algorithmic problem solving — it keeps my fundamentals sharp."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <div className="card h-full p-5 transition-colors hover:border-emerald-500/40">
              <Trophy size={18} className="text-emerald-500" />
              <p className="mt-3 font-mono text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {item.label}
              </p>
              <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}