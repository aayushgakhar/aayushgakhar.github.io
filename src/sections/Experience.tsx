import { ChevronRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { experience } from '../data/portfolio'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I've built things"
      description="Roles where I've shipped and operated backend systems at scale."
    >
      <ol className="relative space-y-12 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-white/10">
        {experience.map((job, index) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-50 bg-emerald-500 sm:-left-[38px] dark:border-[#09090b]" />
            <Reveal delay={index * 0.05}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {job.role}{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    @ {job.company}
                  </span>
                </h3>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {job.location} — {job.summary}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <ChevronRight
                      size={16}
                      className="mt-1 shrink-0 text-emerald-500"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}