<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'
  import { ArrowUpRight } from '@lucide/vue'
  import { projects } from '@/data/projects'

  useSeoMeta({
    title: 'Projects | Ridha Arlian',
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="max-w-4xl mx-auto py-8">
          <span class="eyebrow">
            SELECTED PROJECTS
          </span>
          <h1 class="page-heading">
            Turning ideas into<br />functional software.
          </h1>

          <div class="project-grid">
            <NuxtLink
              v-for="project in projects"
              :key="project.name"
              :to="project.url"
              target="_blank"
              class="project-card"
            >
              <div class="project-mark">
                {{ project.number }}
              </div>
              <div>
                <span class="eyebrow mb-1">
                  {{ project.type }}
                </span>
                <h2 class="section-heading">
                  {{ project.name }}
                </h2>
                <p class="body-copy">
                  {{ project.description }}
                </p>
              </div>
              <ArrowUpRight class="project-arrow h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      PROJECTS
    </template>
  </NuxtLayout>
</template>