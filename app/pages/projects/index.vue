<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'
  import { ArrowRight, ArrowUpRight, Lock } from '@lucide/vue'
  import { projects, type Project } from '@/data/projects'

  const localePath = useLocalePath()
  const { t } = useI18n()
  const seoTitle = computed(() => t('seo.projects.title'))
  const seoDescription = computed(() => t('seo.projects.description'))

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
  })

  const isPrivate = (project: Project) => project.visibility === 'private'

  const projectHref = (project: Project) => {
    if (isPrivate(project)) return localePath(`/projects/${project.slug}`)
    return project.url ?? '#'
  }

  const descriptionKey = (project: Project) => `projects.items.${project.slug}.description`
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="max-w-4xl mx-auto py-8">
          <span class="eyebrow">
            {{ $t('projects.eyebrow') }}
          </span>
          <h1 class="page-heading">
            {{ $t('projects.heading1') }}<br />{{ $t('projects.heading2') }}
          </h1>

          <div class="project-grid">
            <NuxtLink
              v-for="project in projects"
              :key="project.slug"
              :to="projectHref(project)"
              :target="isPrivate(project) ? undefined : '_blank'"
              :rel="isPrivate(project) ? undefined : 'noopener noreferrer'"
              class="project-card focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
            >
              <div class="project-mark">
                {{ project.number }}
              </div>
              <div>
                <span class="eyebrow mb-1.5 flex flex-wrap items-center gap-2">
                  {{ project.type }}
                  <span
                    v-if="isPrivate(project)"
                    class="inline-flex items-center gap-1 border border-line px-1.5 py-0.5 text-[10px] leading-none tracking-widest"
                  >
                    <Lock class="h-3 w-3" aria-hidden="true" />
                    {{ $t('projects.privateLabel') }}
                  </span>
                </span>
                <h2 class="section-heading">
                  {{ project.name }}
                </h2>
                <p class="body-copy">
                  {{ $t(descriptionKey(project)) }}
                </p>
              </div>
              <ArrowUpRight
                v-if="!isPrivate(project)"
                class="project-arrow h-4 w-4"
                aria-hidden="true"
              />
              <ArrowRight
                v-else
                class="project-arrow h-4 w-4"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      {{ $t('projects.footer') }}
    </template>
  </NuxtLayout>
</template>
