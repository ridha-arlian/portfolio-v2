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
    
    <header class="layout-header gap-2 sm:gap-4">
      <slot name="header-action">
        <Button as-child variant="ghost" size="sm" class="nav-button min-w-0">
          <NuxtLink :to="localePath('/')" class="flex min-w-0 items-center gap-2">
            <ArrowLeft class="h-4 w-4 shrink-0" />
            <span class="truncate">{{ $t('layout.backToGraph') }}</span>
          </NuxtLink>
        </Button>
      </slot>

      <div class="flex shrink-0 items-center gap-2 sm:gap-5">
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
      <div class="flex items-center justify-between gap-2 sm:gap-4">
        <LocalTime />
        <LocaleToggle class="inline-flex sm:hidden" />
      </div>
    </footer>
  </main>
</template>