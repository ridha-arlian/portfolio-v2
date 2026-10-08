<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import GraphNav from '@/components/GraphNav.vue'

  const localePath = useLocalePath()
</script>

<template>
  <NuxtLayout>
    <template #header-action>
      <Button as-child variant="ghost" size="sm" class="nav-button">
        <NuxtLink :to="localePath('/')">
          {{ $t('layout.home') }}
        </NuxtLink>
      </Button>
    </template>

    <section class="flex flex-1 items-center justify-center overflow-hidden py-2 sm:py-4">
      <GraphNav />
    </section>

    <template #footer-text>
      {{ $t('home.footer') }}
    </template>
  </NuxtLayout>
</template>