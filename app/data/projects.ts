export interface Project {
  number: string
  type: string
  name: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    number: '01',
    type: 'WEB / 2026',
    name: 'Catardot',
    description: 'A web diary inspired by the Homework for Life method, built with Next.js, Chakra UI, and Google Spreadsheet integration.',
    url: 'https://catardot.ridhaarlian.my.id/',
  },
  {
    number: '02',
    type: 'WEB / 2025',
    name: 'Online Exam Proctoring Feature',
    description: 'Developed a proctoring feature for CBT using WebRTC and mediasoup, with three integrated applications for participants, proctors, and admins.',
    url: '#',
  },
  {
    number: '03',
    type: 'SYSTEM / 2026',
    name: 'Medic.in',
    description: 'A System Information for Clinic Management built with Laravel and Filament 4.',
    url: 'https://medicin.ridhaarlian.my.id/',
  },
  {
    number: '04',
    type: 'PRODUCT / 2025',
    name: 'Sakoe',
    description: 'A tip jar website built with Nuxt, Shadcn UI, Tailwind CSS, and Midtrans.',
    url: 'https://sakoe.ridhaarlian.my.id/',
  },
  {
    number: '05',
    type: 'PRODUCT / 2025',
    name: 'Kongsi',
    description: 'A split bill web application built with Nuxt, Shadcn UI, Tailwind CSS, and TypeScript.',
    url: 'https://kongsi.ridhaarlian.my.id/',
  },
  {
    number: '06',
    type: 'WEB / 2026',
    name: 'Terrmin',
    description: 'A zero-friction, stateless tool designed to help remote teams coordinate meeting schedules across different time zones.',
    url: 'https://terrmin.ridhaarlian.my.id/'
  },
]