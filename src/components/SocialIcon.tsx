import { FileText, Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Social } from '../types'
import { GithubIcon, LinkedinIcon, TelegramIcon } from './BrandIcons'

type IconComponent = ComponentType<{ size?: number | string; className?: string }>

const icons: Record<Social['icon'], IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  telegram: TelegramIcon,
  file: FileText,
}

interface SocialIconProps {
  social: Social
  size?: number
  showLabel?: boolean
}

export function SocialIcon({ social, size = 18, showLabel = false }: SocialIconProps) {
  const Icon = icons[social.icon]
  return (
    <a
      href={social.href}
      target={social.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      aria-label={social.label}
      className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
    >
      <Icon size={size} />
      {showLabel ? <span>{social.label}</span> : null}
    </a>
  )
}