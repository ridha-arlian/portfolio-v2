<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { ScrollArea } from '@/components/ui/scroll-area'
  import ColorModeToggle from '@/components/ColorModeToggle.vue'
  import LocalTime from '@/components/LocalTime.vue'
  import { ArrowLeft, ArrowUpRight } from '@lucide/vue'
  import { projects } from '@/data/projects'

  useSeoMeta({
    title: 'Projects | Ridha Arlian',
  })
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 bg-paper text-ink sm:p-6 lg:p-8">
    <header class="shrink-0 flex items-center justify-between border-b border-line pb-3 font-mono text-xs tracking-wider text-muted-foreground sm:pb-4 sm:text-sm">
      <Button
        as-child
        variant="ghost"
        size="sm"
        class="h-auto p-0 font-mono text-xs tracking-wider text-ink uppercase transition-opacity hover:opacity-50 bg-transparent! !hover:bg-transparent !hover:text-ink focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
      >
        <NuxtLink to="/" class="flex items-center gap-2">
          <ArrowLeft class="h-4 w-4 shrink-0" />
          BACK TO GRAPH
        </NuxtLink>
      </Button>

      <ColorModeToggle />
    </header>

    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="content-section">
          <p class="eyebrow">SELECTED PROJECTS</p>
          <h1>Work that makes<br />a quiet impression.</h1>

          <div class="project-grid">
            <NuxtLink
              v-for="project in projects"
              :key="project.name"
              :to="project.url"
              class="project-card"
            >
              <div class="project-mark">{{ project.number }}</div>
              <div>
                <p class="eyebrow">{{ project.type }}</p>
                <h2>{{ project.name }}</h2>
                <p class="body-copy">{{ project.description }}</p>
              </div>
              
              <ArrowUpRight class="project-arrow h-4w-4" />
            </NuxtLink>
          </div>
        </div>
      </ScrollArea>
    </section>

    <footer class="shrink-0 flex flex-col gap-2 border-t border-line pt-3 font-mono text-[11px] tracking-wider text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:pt-4 sm:text-sm">
      <span class="uppercase">
        PROJECTS
      </span>

      <LocalTime />
    </footer>
  </main>
</template>