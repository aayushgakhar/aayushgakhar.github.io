import { useCallback, useRef } from 'react'
import type { WTerm } from '@wterm/react'
import type { Bash } from 'just-bash/browser'
import {
  experience,
  profile,
  projects,
  skillGroups,
  socials,
} from '../data/portfolio'

const GREEN = '\x1b[1;32m'
const CYAN = '\x1b[1;36m'
const BOLD = '\x1b[1;37m'
const DIM = '\x1b[90m'
const RED = '\x1b[31m'
const RESET = '\x1b[0m'

const HOME = '/home/user'

const aboutText = [`# ${profile.name}`, profile.role, '', ...profile.summary].join(
  '\n',
)

const skillsText = skillGroups
  .map(
    (group) =>
      `${group.category}\n  ${group.items.map((item) => item.name).join(' · ')}`,
  )
  .join('\n\n')

const experienceText = experience
  .map(
    (job) =>
      `${job.role} @ ${job.company} (${job.period})\n  ${job.summary}\n${job.points
        .map((point) => `  - ${point}`)
        .join('\n')}`,
  )
  .join('\n\n')

const projectsText = projects
  .map(
    (project) =>
      `${project.name} — ${project.tags.join(', ')}\n  ${project.description}\n  ${project.link}`,
  )
  .join('\n\n')

const contactText = [
  `email: ${profile.email}`,
  ...socials.map(
    (social) => `${social.label.toLowerCase().padEnd(8)} ${social.href}`,
  ),
].join('\n')

const files: Record<string, string> = {
  [`${HOME}/about.md`]: aboutText,
  [`${HOME}/stack.txt`]: 'node · typescript · kafka · redis · aws',
  [`${HOME}/skills.txt`]: skillsText,
  [`${HOME}/experience.txt`]: experienceText,
  [`${HOME}/projects.txt`]: projectsText,
  [`${HOME}/contact.txt`]: contactText,
}

function currentDirLabel(cwd: string) {
  if (cwd === HOME) return '~'
  if (cwd.startsWith(`${HOME}/`)) return `~${cwd.slice(HOME.length)}`
  return cwd
}

export function useTerminalShell() {
  const termRef = useRef<WTerm | null>(null)
  const bashRef = useRef<Promise<Bash> | null>(null)
  const bufferRef = useRef('')
  const cursorRef = useRef(0)
  const historyRef = useRef<string[]>([])
  const historyIndexRef = useRef(0)
  const cwdRef = useRef(HOME)
  const busyRef = useRef(false)
  const preInputScrollTopRef = useRef<number | null>(null)
  const commandNamesRef = useRef<string[]>([])

  const prompt = useCallback(
    () => `${GREEN}➜${RESET}  ${CYAN}${currentDirLabel(cwdRef.current)}${RESET} `,
    [],
  )

  const redraw = useCallback(() => {
    const term = termRef.current
    if (!term) return
    term.write(`\r${prompt()}${bufferRef.current}\x1b[K`)
    const back = bufferRef.current.length - cursorRef.current
    if (back > 0) term.write(`\x1b[${back}D`)
  }, [prompt])

  const insert = useCallback(
    (text: string) => {
      const before = bufferRef.current.slice(0, cursorRef.current)
      const after = bufferRef.current.slice(cursorRef.current)
      bufferRef.current = before + text + after
      cursorRef.current += text.length
      redraw()
    },
    [redraw],
  )

  const writeStream = useCallback((text: string) => {
    if (!text) return
    const value = text.endsWith('\n') ? text : `${text}\n`
    termRef.current?.write(value.replace(/\n/g, '\r\n'))
  }, [])

  const run = useCallback(
    async (raw: string) => {
      const term = termRef.current
      if (!term) return

      const input = raw.trim()
      if (!input) return

      if (input === 'clear') {
        term.write('\x1b[2J\x1b[3J\x1b[H')
        return
      }

      if (!bashRef.current) {
        term.write(`${DIM}bash is still starting up…${RESET}`)
        return
      }

      busyRef.current = true
      try {
        const bash = await bashRef.current

        if (/^cd(\s|$)/.test(input)) {
          const result = await bash.exec(`${input} && pwd`, {
            cwd: cwdRef.current,
          })
          const next = result.stdout.trim()
          if (result.exitCode === 0 && next) cwdRef.current = next
          else if (result.stderr) writeStream(result.stderr)
        } else {
          const result = await bash.exec(input, { cwd: cwdRef.current })
          writeStream(result.stdout)
          writeStream(result.stderr)
        }
      } catch (error) {
        term.write(
          `\r\n${RED}${error instanceof Error ? error.message : String(error)}${RESET}`,
        )
      } finally {
        busyRef.current = false
      }
    },
    [writeStream],
  )

  const complete = useCallback(async () => {
    const term = termRef.current
    if (!term || !bashRef.current) return

    const line = bufferRef.current
    let start = cursorRef.current
    while (start > 0 && line[start - 1] !== ' ') start -= 1
    const prefix = line.slice(start, cursorRef.current)
    const isCommand = line.slice(0, start).trim() === ''

    let candidates: string[]
    if (isCommand) {
      candidates = commandNamesRef.current
    } else {
      try {
        const bash = await bashRef.current
        const result = await bash.exec('ls -1', { cwd: cwdRef.current })
        candidates = result.stdout
          .split('\n')
          .map((entry) => entry.trim())
          .filter(Boolean)
      } catch {
        candidates = []
      }
    }

    const matches = candidates.filter((candidate) => candidate.startsWith(prefix))
    if (matches.length === 0) return

    const replaceWord = (value: string, addSpace: boolean) => {
      const before = bufferRef.current.slice(0, start)
      const after = bufferRef.current.slice(cursorRef.current)
      const insertion = addSpace ? `${value} ` : value
      bufferRef.current = before + insertion + after
      cursorRef.current = start + insertion.length
      redraw()
    }

    if (matches.length === 1) {
      replaceWord(matches[0], true)
      return
    }

    let common = matches[0]
    for (const match of matches) {
      let i = 0
      while (i < common.length && i < match.length && common[i] === match[i]) i += 1
      common = common.slice(0, i)
    }

    if (common.length > prefix.length) {
      replaceWord(common, false)
      return
    }

    term.write('\r\n')
    term.write(matches.join('  '))
    term.write(`\r\n${prompt()}${bufferRef.current}`)
    const back = bufferRef.current.length - cursorRef.current
    if (back > 0) term.write(`\x1b[${back}D`)
  }, [prompt, redraw])

  const onReady = useCallback(
    (wt: WTerm) => {
      termRef.current = wt

      // wterm scrolls to the bottom on every input, which discards the user's
      // scrollback position. Record the scroll position before each key so we
      // can restore it in onData (see there for details).
      const recordScroll = () => {
        preInputScrollTopRef.current = wt.element.scrollTop
      }
      wt.element.addEventListener('keydown', recordScroll, true)
      wt.element.addEventListener('paste', recordScroll, true)

      bashRef.current = import('just-bash/browser').then(({ Bash, defineCommand, getCommandNames }) => {
        const commands = [
          defineCommand('skills', async () => ({
            stdout: `${skillsText}\n`,
            stderr: '',
            exitCode: 0,
          })),
          defineCommand('experience', async () => ({
            stdout: `${experienceText}\n`,
            stderr: '',
            exitCode: 0,
          })),
          defineCommand('projects', async () => ({
            stdout: `${projectsText}\n`,
            stderr: '',
            exitCode: 0,
          })),
          defineCommand('contact', async () => ({
            stdout: `${contactText}\n`,
            stderr: '',
            exitCode: 0,
          })),
          defineCommand('whoami', async () => ({
            stdout: `${profile.name.toLowerCase().replace(' ', '_')} · backend engineer\n`,
            stderr: '',
            exitCode: 0,
          })),
          defineCommand('uptime', async () => ({
            stdout: `${GREEN}99.8% up${RESET} · 0 cascading failures\n`,
            stderr: '',
            exitCode: 0,
          })),
        ]
        commandNamesRef.current = [
          ...getCommandNames(),
          'skills',
          'experience',
          'projects',
          'contact',
          'uptime',
          'cd',
          'export',
        ]
        return new Bash({ cwd: HOME, files, customCommands: commands })
      })

      const demo = async (bash: Bash, command: string) => {
        const emit = (text: string) => {
          if (!text) return
          const value = text.endsWith('\n') ? text : `${text}\n`
          wt.write(value.replace(/\n/g, '\r\n'))
        }
        wt.write(`${prompt()}${command}\r\n`)
        const result = await bash.exec(command, { cwd: cwdRef.current })
        emit(result.stdout)
        emit(result.stderr)
        wt.write('\r\n')
      }

      bashRef.current
        .then(async (bash) => {
          busyRef.current = true
          try {
            await demo(bash, 'whoami')
            await demo(bash, 'cat stack.txt')
            await demo(bash, 'uptime')
          } finally {
            busyRef.current = false
          }
          wt.write(
            `${DIM}Type ${RESET}${BOLD}help${RESET}${DIM} to explore the sandbox.${RESET}\r\n`,
          )
          wt.write(prompt())
        })
        .catch(() => {
          wt.write(`${RED}Could not start the shell.${RESET}\r\n`)
          wt.write(prompt())
        })
    },
    [prompt],
  )

  const onData = useCallback(
    (data: string) => {
      const term = termRef.current
      if (!term) return

      // Undo wterm's automatic scroll-to-bottom for line editing so that
      // typing while scrolled up doesn't lose the user's place. Enter still
      // jumps to the bottom so command output stays visible.
      const isSubmit = data === '\r' || data === '\n'
      const savedScroll = preInputScrollTopRef.current
      if (!isSubmit && savedScroll !== null && term.element.scrollTop !== savedScroll) {
        term.element.scrollTop = savedScroll
      }

      const submit = () => {
        if (busyRef.current) return
        term.write('\r\n')
        const line = bufferRef.current
        bufferRef.current = ''
        cursorRef.current = 0
        if (line.trim()) {
          historyRef.current.push(line.trim())
          historyIndexRef.current = historyRef.current.length
        }
        const blank = line.trim() !== 'clear'
        void run(line).then(() => {
          if (blank) term.write('\r\n')
          term.write(prompt())
        })
      }

      switch (data) {
        case '\r':
        case '\n':
          submit()
          return
        case '\x7f':
        case '\b':
          if (cursorRef.current > 0) {
            bufferRef.current =
              bufferRef.current.slice(0, cursorRef.current - 1) +
              bufferRef.current.slice(cursorRef.current)
            cursorRef.current -= 1
            redraw()
          }
          return
        case '\x1b[3~':
          if (cursorRef.current < bufferRef.current.length) {
            bufferRef.current =
              bufferRef.current.slice(0, cursorRef.current) +
              bufferRef.current.slice(cursorRef.current + 1)
            redraw()
          }
          return
        case '\x1b[A':
          if (historyIndexRef.current > 0) {
            historyIndexRef.current -= 1
            bufferRef.current = historyRef.current[historyIndexRef.current] ?? ''
            cursorRef.current = bufferRef.current.length
            redraw()
          }
          return
        case '\x1b[B':
          if (historyIndexRef.current < historyRef.current.length - 1) {
            historyIndexRef.current += 1
            bufferRef.current = historyRef.current[historyIndexRef.current] ?? ''
          } else {
            historyIndexRef.current = historyRef.current.length
            bufferRef.current = ''
          }
          cursorRef.current = bufferRef.current.length
          redraw()
          return
        case '\x1b[C':
          if (cursorRef.current < bufferRef.current.length) {
            cursorRef.current += 1
            term.write('\x1b[C')
          }
          return
        case '\x1b[D':
          if (cursorRef.current > 0) {
            cursorRef.current -= 1
            term.write('\x1b[D')
          }
          return
        case '\x1b[H':
        case '\x1bOH':
        case '\x1b[1~':
        case '\x01':
          cursorRef.current = 0
          redraw()
          return
        case '\x1b[F':
        case '\x1bOF':
        case '\x1b[4~':
        case '\x05':
          cursorRef.current = bufferRef.current.length
          redraw()
          return
        case '\x0c':
          term.write(`\x1b[2J\x1b[3J\x1b[H${prompt()}${bufferRef.current}`)
          return
        case '\x03':
          bufferRef.current = ''
          cursorRef.current = 0
          term.write('^C\r\n')
          term.write(prompt())
          return
        case '\x15':
          bufferRef.current = bufferRef.current.slice(cursorRef.current)
          cursorRef.current = 0
          redraw()
          return
        case '\x0b':
          bufferRef.current = bufferRef.current.slice(0, cursorRef.current)
          redraw()
          return
        case '\x17': {
          const before = bufferRef.current.slice(0, cursorRef.current)
          const after = bufferRef.current.slice(cursorRef.current)
          const trimmed = before.replace(/\S+\s*$/, '')
          bufferRef.current = trimmed + after
          cursorRef.current = trimmed.length
          redraw()
          return
        }
        case '\t':
          void complete()
          return
        default:
          break
      }

      if (data.startsWith('\x1b')) return

      for (const char of data) {
        const code = char.codePointAt(0) ?? 0
        if (char >= ' ' && code !== 127) insert(char)
      }
    },
    [complete, insert, prompt, redraw, run],
  )

  return { onReady, onData }
}