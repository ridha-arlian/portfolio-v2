<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'
  import { Button } from '@/components/ui/button'
  import { ArrowLeft, ArrowRight, LockKeyhole } from '@lucide/vue'
  import { projects } from '@/data/projects'

  definePageMeta({
    sitemap: false,
  })

  const route = useRoute()
  const localePath = useLocalePath()
  const { t, te } = useI18n()

  const slug = String(route.params.slug)
  const project = projects.find(item => item.slug === slug)

  if (!project || project.visibility !== 'private') {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found',
      fatal: true,
    })
  }

  const itemKey = `projects.items.${project.slug}`
  const descriptionKey = `${itemKey}.description`
  const detailKey = `${itemKey}.detail`

  const intro = computed(() => {
    const key = `${detailKey}.intro`
    if (te(key)) return t(key)
    return te(descriptionKey) ? t(descriptionKey) : ''
  })

  const metaRows = computed(() => {
    const fields = [
      { label: 'projects.detail.meta.role', value: `${detailKey}.meta.role` },
      { label: 'projects.detail.meta.period', value: `${detailKey}.meta.period` },
      { label: 'projects.detail.meta.context', value: `${detailKey}.meta.context` },
    ]

    const rows = fields
      .filter(field => te(field.value))
      .map(field => ({
        label: t(field.label),
        value: t(field.value),
      }))

    rows.push({
      label: t('projects.detail.meta.access'),
      value: t('projects.detail.accessValue'),
    })

    return rows
  })

  const sections = computed(() => {
    if (!project.detailSections?.length) return []

    return project.detailSections.flatMap((id) => {
      const titleKey = `${detailKey}.sections.${id}.title`
      const bodyKey = `${detailKey}.sections.${id}.body`

      if (!te(titleKey) || !te(bodyKey)) return []

      return [{
        title: t(titleKey),
        body: t(bodyKey),
      }]
    })
  })

  const noticeBody = computed(() => {
    const key = `${detailKey}.noticeBody`
    return te(key) ? t(key) : t('projects.detail.noticeBody')
  })

  const mediaAlt = computed(() => {
    const key = `${detailKey}.mediaAlt`
    return te(key) ? t(key) : project.name
  })

  const mediaCaption = computed(() => {
    const key = `${detailKey}.mediaCaption`
    return te(key) ? t(key) : ''
  })

  const seoTitle = computed(() => t('seo.projectDetail.title', { name: project.name }))
  const seoDescription = computed(() => t('seo.projectDetail.description', { name: project.name }))

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    robots: 'noindex, follow',
  })
</script>

<template>
  <NuxtLayout>
    <template #header-action>
      <Button as-child variant="ghost" size="sm" class="nav-button min-w-0">
        <NuxtLink :to="localePath('/projects')" class="flex min-w-0 items-center gap-2">
          <ArrowLeft class="h-4 w-4 shrink-0" aria-hidden="true" />
          <span class="truncate">{{ $t('projects.detail.back') }}</span>
        </NuxtLink>
      </Button>
    </template>

    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <article class="max-w-4xl mx-auto py-8">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
            <span class="font-mono text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
              {{ $t('projects.detail.projectLabel', { number: project.number, type: project.type }) }}
            </span>
            <span class="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              <LockKeyhole class="h-3.5 w-3.5" aria-hidden="true" />
              {{ $t('projects.detail.privateBadge') }}
            </span>
          </div>

          <h1 class="page-heading mt-6">
            {{ project.name }}
          </h1>

          <p v-if="intro" class="body-copy max-w-2xl">
            {{ intro }}
          </p>

          <div class="mt-8 bg-ink p-5 text-paper sm:mt-10 sm:p-8">
            <span class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/60 sm:text-xs">
              <LockKeyhole class="h-3.5 w-3.5" aria-hidden="true" />
              {{ $t('projects.detail.noticeLabel') }}
            </span>

            <h2 class="mt-3 font-sans text-xl font-medium tracking-tight sm:text-2xl">
              {{ $t('projects.detail.noticeTitle') }}
            </h2>

            <p class="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-paper/80 sm:text-base">
              {{ noticeBody }}
            </p>

            <NuxtLink
              :to="localePath('/contact')"
              class="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider underline underline-offset-4 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper sm:text-sm"
            >
              {{ $t('projects.detail.noticeCta') }}
              <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
            </NuxtLink>
          </div>

          <dl class="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-4">
            <div
              v-for="row in metaRows"
              :key="row.label"
              class="border-t border-line pb-2 pt-3"
            >
              <dt class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {{ row.label }}
              </dt>
              <dd class="mt-1 font-sans text-sm text-ink">
                {{ row.value }}
              </dd>
            </div>
          </dl>

          <figure v-if="project.cover" class="mt-8 border border-line">
            <img
              :src="project.cover"
              :alt="mediaAlt"
              class="block w-full"
              loading="lazy"
            />
            <figcaption
              v-if="mediaCaption"
              class="border-t border-line px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {{ mediaCaption }}
            </figcaption>
          </figure>

          <section v-if="sections.length" class="mt-10 sm:mt-12">
            <h2 class="eyebrow">
              {{ $t('projects.detail.sectionsHeading') }}
            </h2>

            <div class="border-t border-line">
              <div
                v-for="section in sections"
                :key="section.title"
                class="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(9rem,0.35fr)_1fr] sm:gap-8"
              >
                <h3 class="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                  {{ section.title }}
                </h3>
                <p class="body-copy">
                  {{ section.body }}
                </p>
              </div>
            </div>
          </section>
        </article>
      </ScrollArea>
    </section>

    <template #footer-text>
      {{ $t('projects.detail.footer') }} / {{ project.number }}
    </template>
  </NuxtLayout>
</template>
