import { useState } from 'react'

interface SkillBadgeProps {
  name: string
  icon?: string
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  const [failed, setFailed] = useState(false)
  const src = icon
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`
    : undefined

  return (
    <span className="chip">
      {src && !failed ? (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-4 w-4"
          onError={() => setFailed(true)}
        />
      ) : null}
      {name}
    </span>
  )
}