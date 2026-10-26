export interface Project {
  number: string
  type: string
  name: string
  slug: string
  visibility: 'public' | 'private'
  url?: string
  cover?: string
  detailSections?: string[]
}

export const projects: Project[] = [
  {
    number: '01',
    type: 'WEB / 2026',
    name: 'Catardot',
    slug: 'catardot',
    visibility: 'public',
    url: 'https://catardot.ridhaarlian.my.id/',
  },
  {
    number: '02',
    type: 'WEB / 2025',
    name: 'Online Exam Proctoring Feature',
    slug: 'online-exam-proctoring',
    visibility: 'private',
    detailSections: ['realtime', 'media', 'apps'],
  },
  {
    number: '03',
    type: 'SYSTEM / 2026',
    name: 'Medic.in',
    slug: 'medicin',
    visibility: 'public',
    url: 'https://medicin.ridhaarlian.my.id/',
  },
  {
    number: '04',
    type: 'PRODUCT / 2025',
    name: 'Sakoe',
    slug: 'sakoe',
    visibility: 'public',
    url: 'https://sakoe.ridhaarlian.my.id/',
  },
  {
    number: '05',
    type: 'PRODUCT / 2025',
    name: 'Kongsi',
    slug: 'kongsi',
    visibility: 'public',
    url: 'https://kongsi.ridhaarlian.my.id/',
  },
  {
    number: '06',
    type: 'WEB / 2026',
    name: 'Terrmin',
    slug: 'terrmin',
    visibility: 'public',
    url: 'https://terrmin.ridhaarlian.my.id/'
  },
]
