import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SkillBadge } from '../components/SkillBadge'
import { skillGroups } from '../data/portfolio'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Tools I reach for"
      description="Technologies I use to design, build and operate backend services."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <div className="card h-full p-6 transition-colors hover:border-emerald-500/30">
              <h3 className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item.name} name={item.name} icon={item.icon} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}