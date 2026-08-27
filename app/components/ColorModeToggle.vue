<script setup lang="ts">
  import { Button } from '@/components/ui/button'

  const colorMode = useColorMode()

  function toggleDarkMode() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
</script>

<template>
  <ClientOnly>
    <Button
      variant="ghost"
      size="sm"
      @click="toggleDarkMode"
      class="h-auto p-0 font-mono text-sm tracking-wider text-foreground transition-opacity hover:opacity-50 hover:bg-transparent active:bg-transparent focus:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 select-none uppercase cursor-pointer"
    >
      {{ colorMode.value === 'dark' ? 'LIGHT MODE?' : 'DARK MODE?' }}
    </Button>

    <template #fallback>
      <span class="font-mono text-sm tracking-wider text-muted uppercase cursor-pointer">
        DARK MODE?
      </span>
    </template>
  </ClientOnly>
</template>