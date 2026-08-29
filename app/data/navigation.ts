import type { NodeItem } from '@/composables/useNetworkNodes'

export const navigationNodes: NodeItem[] = [
  {
    id: 'about',
    label: 'ABOUT',
    detail: 'A little about me',
    href: '/about'
  },
  {
    id: 'skills',
    label: 'SKILLS',
    detail: 'My technical abilities',
    href: '/skills'
  },
  {
    id: 'experiences',
    label: 'EXPERIENCES',
    detail: 'My professional journey',
    href: '/experiences'
  },
  {
    id: 'contacts',
    label: 'CONTACT',
    detail: 'Get in touch',
    href: '/contact'
  },
  {
    id: 'projects',
    label: 'PROJECTS',
    detail: 'My selected work',
    href: '/projects'
  },
]