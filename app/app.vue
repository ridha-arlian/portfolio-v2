<script setup lang="ts">
  const siteUrl = 'https://ridhaarlian.my.id'

  const { locale } = useI18n()
  const route = useRoute()
  const switchLocalePath = useSwitchLocalePath()

  useHead(() => ({
    htmlAttrs: {
      lang: locale.value,
    },
    link: [
      { rel: 'canonical', href: `${siteUrl}${route.path}` },
      { rel: 'alternate', hreflang: 'en', href: `${siteUrl}${switchLocalePath('en')}` },
      { rel: 'alternate', hreflang: 'id', href: `${siteUrl}${switchLocalePath('id')}` },
      { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}${switchLocalePath('en')}` },
    ],
  }))
</script>

<template>
  <div class="min-h-dvh w-full bg-paper text-ink">
    <NuxtPage />
  </div>
</template>
