import { CalendarDays, Flame, TrendingUp, Zap } from 'lucide-react'
import type { ComponentType } from 'react'
import { useEffect, useState } from 'react'
import { GithubIcon } from '../components/BrandIcons'
import { CommitGraph } from '../components/CommitGraph'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { githubActivity } from '../data/portfolio'
import type { ContributionDay, ContributionsResponse } from '../types'

interface Stat {
  icon: ComponentType<{ size?: number | string; className?: string }>
  value: string
  label: string
}

function computeStats(days: ContributionDay[]) {
  let activeDays = 0
  let longestStreak = 0
  let run = 0
  let bestDay = 0

  for (const day of days) {
    if (day.count > 0) {
      activeDays += 1
      run += 1
      if (run > longestStreak) longestStreak = run
    } else {
      run = 0
    }
    if (day.count > bestDay) bestDay = day.count
  }

  return { activeDays, longestStreak, bestDay }
}

function ReadyContent({ days, total }: { days: ContributionDay[]; total: number }) {
  const { activeDays, longestStreak, bestDay } = computeStats(days)

  const stats: Stat[] = [
    { icon: TrendingUp, value: total.toLocaleString(), label: 'contributions' },
    { icon: CalendarDays, value: String(activeDays), label: 'active days' },
    { icon: Flame, value: String(longestStreak), label: 'longest streak' },
    { icon: Zap, value: String(bestDay), label: 'best day' },
  ]

  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <stat.icon size={16} className="text-emerald-500" />
            <p className="mt-2 font-mono text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {stat.value}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <CommitGraph days={days} />

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-200/70 pt-4 dark:border-white/5">
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          @{githubActivity.username}
        </span>
        <a
          href={githubActivity.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
        >
          <GithubIcon size={14} />
          view profile
        </a>
      </div>
    </>
  )
}

type State =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; days: ContributionDay[]; total: number }

export function GitHubActivity() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    fetch(githubActivity.apiUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
        return response.json() as Promise<ContributionsResponse>
      })
      .then((data) =>
        setState({
          status: 'ready',
          days: data.contributions,
          total: data.total.lastYear ?? 0,
        }),
      )
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setState({ status: 'error' })
      })

    return () => controller.abort()
  }, [])

  return (
    <Section
      id="activity"
      eyebrow="github"
      title="Commit activity"
      description="Contributions over the last year on my work GitHub account."
    >
      <Reveal>
        <div className="card p-6">
          {state.status === 'loading' ? (
            <div className="h-40 animate-pulse rounded-lg bg-zinc-200/60 dark:bg-white/5" />
          ) : null}

          {state.status === 'error' ? (
            <div className="flex flex-col items-start gap-3 py-6">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Couldn&apos;t load live contribution data right now.
              </p>
              <a
                href={githubActivity.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <GithubIcon size={16} />
                View contributions on GitHub
              </a>
            </div>
          ) : null}

          {state.status === 'ready' ? (
            <ReadyContent days={state.days} total={state.total} />
          ) : null}
        </div>
      </Reveal>
    </Section>
  )
}