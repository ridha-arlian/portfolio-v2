<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import GraphNav from '@/components/GraphNav.vue'

  const localePath = useLocalePath()
  const { t } = useI18n()
  const seoTitle = computed(() => t('seo.home.title'))
  const seoDescription = computed(() => t('seo.home.description'))

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
  })

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ridha Arlian',
          jobTitle: 'Software Engineer',
          url: 'https://ridhaarlian.my.id',
          sameAs: [
            'https://linkedin.com/in/ridha-arlian',
            'https://github.com/ridha-arlian',
            'https://instagram.com/ridha_arlian',
          ],
        }),
      },
    ],
  })
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