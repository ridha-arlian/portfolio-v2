<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import ColorModeToggle from '@/components/ColorModeToggle.vue'
  import LocalTime from '@/components/LocalTime.vue'
  import { ArrowLeft } from '@lucide/vue'
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 bg-paper text-ink sm:p-6 lg:p-8">
    
    <header class="layout-header">
      <slot name="header-action">
        <Button as-child variant="ghost" size="sm" class="nav-button">
          <NuxtLink to="/" class="flex items-center gap-2">
            <ArrowLeft class="h-4 w-4 shrink-0" />
            BACK TO GRAPH
          </NuxtLink>
        </Button>
      </slot>

      <ColorModeToggle />
    </header>

    <slot />

    <footer class="layout-footer">
      <span class="uppercase">
        <slot name="footer-text">
          PORTFOLIO
        </slot>
      </span>
      <LocalTime />
    </footer>
  </main>
</template>