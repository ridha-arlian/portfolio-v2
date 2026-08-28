<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import ColorModeToggle from '@/components/ColorModeToggle.vue'
import LocalTime from '@/components/LocalTime.vue'
import { ArrowLeft, ArrowUpRight, Dot } from '@lucide/vue'
import { SKILL_GROUPS } from '@/data/skills'

useSeoMeta({
  title: 'Skills | Ridha Arlian',
  description: 'Tools and craft used to make ideas tangible.'
})
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 sm:p-6 lg:p-8">
    <header class="shrink-0 flex items-center justify-between border-b border-line pb-3 sm:pb-4 font-mono text-xs tracking-wider text-muted-foreground sm:text-sm">
      <Button 
        as-child 
        variant="ghost" 
        size="sm" 
        class="h-auto p-0 font-mono text-xs sm:text-sm tracking-wider text-ink uppercase transition-opacity hover:opacity-50 bg-transparent! !hover:bg-transparent !hover:text-ink focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <NuxtLink to="/" class="flex items-center gap-2">
          <ArrowLeft class="h-4 w-4 shrink-0" />
          BACK TO GRAPH
        </NuxtLink>
      </Button>

      <ColorModeToggle />
    </header>

    <section class="flex-1 min-h-0 flex flex-col justify-center py-4 sm:py-6">
      <div class="mb-8 sm:mb-12">
        <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          SKILLS & STACK
        </p>
        <h1 class="text-3xl font-light tracking-tight sm:text-5xl leading-tight">
          Technologies and tools<br/>I use to build reliable software.
        </h1>
      </div>

      <div class="space-y-6 sm:space-y-8 w-full">
        <article v-for="group in SKILL_GROUPS" :key="group.title">
          <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1.5 sm:mb-2">
            {{ group.title }}
          </p>

          <ScrollArea class="w-full whitespace-nowrap">
            <div class="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl text-ink font-mono pb-2">
              <template v-for="(item, index) in group.items" :key="item.label">
                <component
                  :is="item.url && item.url !== '#' ? 'a' : 'span'"
                  :href="item.url && item.url !== '#' ? item.url : undefined"
                  :target="item.url && item.url !== '#' ? '_blank' : undefined"
                  :rel="item.url && item.url !== '#' ? 'noreferrer' : undefined"
                  class="inline-flex items-center gap-1 transition-opacity"
                  :class="{ 'hover:opacity-50 underline underline-offset-4': item.url && item.url !== '#' }"
                >
                  <span>{{ item.label }}</span>
                  <ArrowUpRight 
                    v-if="item.url && item.url !== '#'" 
                    class="h-4 w-4 sm:h-5 sm:w-5 shrink-0" 
                  />
                </component>

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

    <footer class="shrink-0 flex flex-col gap-2 border-t border-line pt-3 sm:pt-4 font-mono text-[11px] sm:text-sm tracking-wider text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
      <span class="uppercase">
        SKILLS
      </span>
      
      <LocalTime />
    </footer>
  </main>
</template>