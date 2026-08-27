<script setup lang="ts">
import { Button } from '@/components/ui/button'
import ColorModeToggle from '@/components/ColorModeToggle.vue'
import GraphNav from '@/components/GraphNav.vue'
import LocalTime from '@/components/LocalTime.vue'
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 sm:p-6 lg:p-8 bg-paper text-ink transition-colors duration-300">
    <header class="shrink-0 flex items-center justify-between border-b border-line pb-3 sm:pb-4 font-mono text-xs tracking-wider text-muted-foreground sm:text-sm">
      <Button 
        as-child 
        variant="ghost" 
        size="sm" 
        class="h-auto p-0 font-mono text-xs sm:text-sm tracking-wider text-ink uppercase transition-opacity hover:opacity-50 hover:bg-transparent active:bg-transparent focus:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <NuxtLink to="/">
          HOME
        </NuxtLink>
      </Button>

      <ColorModeToggle />
    </header>

    <section class="flex flex-1 items-center justify-center overflow-hidden py-2 sm:py-4">
      <GraphNav />
    </section>

    <footer class="shrink-0 flex flex-col gap-2 border-t border-line pt-3 sm:pt-4 font-mono text-[11px] sm:text-sm tracking-wider text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
      <span class="uppercase">
        BASED IN BANDA ACEH, ID
      </span>
      
      <LocalTime />
    </footer>
  </main>
</template>