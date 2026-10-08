<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import ColorModeToggle from '@/components/ColorModeToggle.vue'
  import LocaleToggle from '@/components/LocaleToggle.vue'
  import LocalTime from '@/components/LocalTime.vue'
  import { ArrowLeft } from '@lucide/vue'

  const localePath = useLocalePath()
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 bg-paper text-ink sm:p-6 lg:p-8">
    
    <header class="layout-header">
      <slot name="header-action">
        <Button as-child variant="ghost" size="sm" class="nav-button">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
            <ArrowLeft class="h-4 w-4 shrink-0" />
            {{ $t('layout.backToGraph') }}
          </NuxtLink>
        </Button>
      </slot>

      <div class="flex items-center gap-4 sm:gap-5">
        <LocaleToggle class="hidden sm:inline-flex" />
        <ColorModeToggle />
      </div>
    </header>

    <slot />

    <footer class="layout-footer">
      <span class="uppercase">
        <slot name="footer-text">
          {{ $t('layout.portfolio') }}
        </slot>
      </span>
      <div class="flex items-center justify-between gap-4">
        <LocalTime />
        <LocaleToggle class="sm:hidden" />
      </div>
    </footer>
  </main>
</template>