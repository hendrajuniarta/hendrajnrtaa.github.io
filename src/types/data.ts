export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Skill {
  name: string
  icon?: string
  level?: number
  category: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export interface Experience {
  id: string
  role: string
  company: string
  companyUrl?: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  highlights: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate?: string
  gpa?: string
  description?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date?: string
  credentialUrl?: string
  image?: string
  description?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location?: string
  availability?: string
}
