<script setup lang="ts">
  import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
  import { ArrowUpRight, Dot } from '@lucide/vue'
  import { SKILL_GROUPS } from '@/data/skills'

  useSeoMeta({
    title: 'Skills | Ridha Arlian',
    description: 'Tools and craft used to make ideas tangible.'
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 flex flex-col justify-center py-4 sm:py-6 max-w-4xl mx-auto w-full">
      <div>
        <span class="eyebrow">
          SKILLS & STACK
        </span>
        <h1 class="page-heading">
          Technologies and tools<br class="hidden sm:inline" /> I use to build reliable software.
        </h1>
      </div>

      <div class="space-y-6 sm:space-y-8 w-full">
        <article v-for="group in SKILL_GROUPS" :key="group.title">
          <span class="eyebrow mb-1.5 sm:mb-2">
            {{ group.title }}
          </span>

          <ScrollArea class="w-full whitespace-nowrap">
            <div class="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl text-ink font-mono pb-2">
              <template v-for="(item, index) in group.items" :key="item.label">
                <NuxtLink
                  v-if="item.url && item.url !== '#'"
                  :to="item.url"
                  target="_blank"
                  class="inline-flex items-center gap-1 hover:opacity-50 underline underline-offset-4 transition-opacity"
                >
                  <span>{{ item.label }}</span>
                  <ArrowUpRight class="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                </NuxtLink>

                <span v-else class="inline-flex items-center gap-1">
                  {{ item.label }}
                </span>

                <span v-if="index < group.items.length - 1" class="inline-flex items-center text-muted-foreground/60 select-none">
                  <Dot class="h-6 w-6 sm:h-8 sm:w-8 shrink-0 -mx-1" />
                </span>

              </template>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </article>
      </div>
    </section>

    <template #footer-text>
      SKILLS
    </template>
  </NuxtLayout>
</template>