import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { GithubIcon } from './BrandIcons'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <ArrowUpRight
            size={20}
            className="shrink-0 text-zinc-400 transition-colors group-hover:text-emerald-500"
          />
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 dark:text-zinc-500">
          <GithubIcon size={14} /> view source
        </span>
      </div>
    </a>
  )
}