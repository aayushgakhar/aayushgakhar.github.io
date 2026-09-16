export interface Social {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'telegram' | 'file'
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  summary: string
  points: string[]
  tech: string[]
}

export interface SkillGroup {
  category: string
  items: { name: string; icon?: string }[]
}

export interface Project {
  name: string
  description: string
  tags: string[]
  image: string
  link: string
}

export interface Achievement {
  label: string
  value: string
  detail: string
}

export interface Education {
  school: string
  degree: string
  period: string
  location: string
  score: string
}

export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionsResponse {
  total: Record<string, number>
  contributions: ContributionDay[]
}