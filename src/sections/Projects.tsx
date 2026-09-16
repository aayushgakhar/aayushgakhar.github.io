import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects"
      title="Selected work"
      description="A few things I've built outside of production systems."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/aayushgakhar?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            More on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}