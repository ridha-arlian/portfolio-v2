<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'

  const { t } = useI18n()
  const seoTitle = computed(() => t('seo.about.title'))

  useSeoMeta({
    title: seoTitle,
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="flex min-h-full flex-col justify-center max-w-3xl mx-auto py-8">
          <span class="eyebrow">
            {{ $t('about.eyebrow') }}
          </span>
          
          <h1 class="page-heading">
            {{ $t('about.heading') }}
          </h1>
          
          <div class="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <p class="body-copy">
              {{ $t('about.p1') }}
            </p>
            <p class="body-copy">
              {{ $t('about.p2') }}
            </p>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      {{ $t('about.footer') }}
    </template>
  </NuxtLayout>
</template>