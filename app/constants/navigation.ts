import type { NodeItem } from '@/composables/useNetworkNodes'

export const navigationNodes: NodeItem[] = [
  {
    id: 'about',
    label: 'ABOUT',
    detail: 'A little about me',
    href: '/about'
  },
  {
    id: 'skill',
    label: 'SKILLS',
    detail: 'My technical abilities',
    href: '/skills'
  },
  {
    id: 'experience',
    label: 'EXPERIENCE',
    detail: 'My professional journey',
    href: '/experiences'
  },
  {
    id: 'contact',
    label: 'CONTACT',
    detail: 'Get in touch',
    href: '/contact'
  },
  {
    id: 'project',
    label: 'PROJECTS',
    detail: 'My selected work',
    href: '/projects'
  },
]