<script setup lang="ts">
  const { locale } = useI18n()

  useHead(() => ({
    htmlAttrs: {
      lang: locale.value,
    },
  }))
</script>

<template>
  <div class="min-h-dvh w-full bg-paper text-ink">
    <NuxtPage />
  </div>
</template>
