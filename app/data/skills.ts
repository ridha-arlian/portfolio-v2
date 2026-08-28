export interface SkillItem {
  label: string
  url?: string
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'FRONTEND & UI',
    items: [
      { label: 'Next.js', url: 'https://nextjs.org/' },
      { label: 'React', url: 'https://react.dev/' },
      { label: 'TypeScript', url: 'https://typescriptlang.org/' },
      { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
      { label: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { label: 'Bootstrap', url: 'https://getbootstrap.com/' },
      { label: 'Chakra-UI', url: 'https://chakra-ui.com/' },
      { label: 'HTML', url: 'https://html.spec.whatwg.org/' },
      { label: 'CSS', url: 'https://w3.org/Style/CSS/' },
      { label: 'Vue.js', url: 'https://vuejs.org/' },
      { label: 'Nuxt.js', url: 'https://nuxt.com' },
      { label: 'Shadcn UI', url: 'https://ui.shadcn.com/' },
    ]
  },
  {
    title: 'BACKEND & DATABASE',
    items: [
      { label: 'Laravel', url: 'https://laravel.com/' },
      { label: 'Django', url: 'https://djangoproject.com/' },
      { label: 'CodeIgniter', url: 'https://codeigniter.com/' },
      { label: 'Python', url: 'https://python.org/' },
      { label: 'Postgresql', url: 'https://postgresql.org/' },
      { label: 'Supabase', url: 'https://supabase.com/' },
      { label: 'Firebase', url: 'https://firebase.google.com/' },
      { label: 'WebRTC', url: 'https://webrtc.org/' },
      { label: 'Mediasoup', url: 'https://mediasoup.org/' },
      { label: 'Express.js', url: 'https://expressjs.com/' },
    ]
  },
  {
    title: 'TOOLS & ENVIRONMENT',
    items: [
      { label: 'Docker', url: 'https://docker.com/' },
      { label: 'Git', url: 'https://git-scm.com/' },
      { label: 'Github', url: 'https://github.com/' },
      { label: 'Postman', url: 'https://postman.com/' },
      { label: 'Ngrok', url: 'https://ngrok.com/' },
      { label: 'Figma', url: 'https://figma.com/' },
    ]
  }
]