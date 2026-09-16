import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:text-zinc-300 dark:hover:border-emerald-400/60 dark:hover:text-emerald-300"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}