import type { ContributionDay } from '../types'

const CELL = 12
const GAP = 4
const PITCH = CELL + GAP

const levelClasses = [
  'bg-zinc-200/80 dark:bg-white/[0.06]',
  'bg-emerald-200 dark:bg-emerald-900',
  'bg-emerald-300 dark:bg-emerald-700',
  'bg-emerald-400 dark:bg-emerald-500',
  'bg-emerald-500 dark:bg-emerald-300',
]

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const WEEKDAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

type Cell = ContributionDay | null

function toWeeks(days: ContributionDay[]): Cell[][] {
  const weeks: Cell[][] = []
  let week: Cell[] = []

  days.forEach((day, index) => {
    const weekday = new Date(`${day.date}T00:00:00`).getDay()

    if (index === 0) {
      for (let pad = 0; pad < weekday; pad += 1) week.push(null)
    }

    week.push(day)

    if (weekday === 6) {
      weeks.push(week)
      week = []
    }
  })

  if (week.length > 0) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }

  return weeks
}

function monthGroups(weeks: Cell[][]) {
  const groups: { label: string; weeks: number }[] = []

  weeks.forEach((week) => {
    const first = week.find((cell): cell is ContributionDay => cell !== null)
    if (!first) return
    const label = MONTHS[new Date(`${first.date}T00:00:00`).getMonth()]
    const last = groups[groups.length - 1]
    if (last && last.label === label) last.weeks += 1
    else groups.push({ label, weeks: 1 })
  })

  return groups
}

export function CommitGraph({ days }: { days: ContributionDay[] }) {
  const weeks = toWeeks(days)
  const groups = monthGroups(weeks)

  return (
    <div>
      <div className="flex pl-8">
        {groups.map((group, index) => (
          <span
            key={`${group.label}-${index}`}
            style={{ width: group.weeks * PITCH }}
            className="overflow-hidden whitespace-nowrap text-[10px] text-zinc-400 dark:text-zinc-500"
          >
            {group.label}
          </span>
        ))}
      </div>

      <div className="mt-1 flex gap-2">
        <div className="grid shrink-0 grid-rows-7 gap-1">
          {WEEKDAYS.map((day, index) => (
            <span
              key={index}
              className="flex h-3 items-center text-[10px] leading-none text-zinc-400 dark:text-zinc-500"
            >
              {day}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto pb-1">
          <div
            role="img"
            aria-label={`GitHub contribution graph: ${days.length} days`}
            className="grid w-max grid-flow-col grid-rows-7 gap-1"
          >
            {weeks.flatMap((week, weekIndex) =>
              Array.from({ length: 7 }, (_, dayIndex) => {
                const cell = week[dayIndex]
                if (!cell) {
                  return (
                    <span
                      key={`${weekIndex}-${dayIndex}`}
                      className="h-3 w-3 rounded-[3px]"
                    />
                  )
                }
                return (
                  <span
                    key={cell.date}
                    title={`${cell.count} contribution${
                      cell.count === 1 ? '' : 's'
                    } on ${cell.date}`}
                    className={`h-3 w-3 rounded-[3px] ${
                      levelClasses[Math.min(cell.level, levelClasses.length - 1)]
                    }`}
                  />
                )
              }),
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 pl-8 text-[11px] text-zinc-400 dark:text-zinc-500">
        <span>Less</span>
        {levelClasses.map((classes, index) => (
          <span key={index} className={`h-3 w-3 rounded-[3px] ${classes}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}