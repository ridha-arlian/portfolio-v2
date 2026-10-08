<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'
  import { experiences } from '@/data/experiences'

  const { t } = useI18n()
  const seoTitle = computed(() => t('seo.experiences.title'))
  const seoDescription = computed(() => t('seo.experiences.description'))

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="max-w-4xl mx-auto py-8">
          <span class="eyebrow">
            {{ $t('experiences.eyebrow') }}
          </span>
          <h1 class="page-heading">
            {{ $t('experiences.heading1') }}<br />{{ $t('experiences.heading2') }}
          </h1>

          <div class="timeline">
            <article
              v-for="(item, itemIndex) in experiences"
              :key="item.role"
              class="timeline-item"
            >
              <span class="eyebrow">
                {{ $t('experiences.items[' + itemIndex + '].year') }}
              </span>
              <div>
                <h2 class="section-heading">
                  {{ $t('experiences.items[' + itemIndex + '].role') }}
                </h2>
                <p class="font-sans text-sm text-muted-foreground mb-2">
                  {{ $t('experiences.items[' + itemIndex + '].company') }}
                </p>
                <p class="body-copy">
                  {{ $t('experiences.items[' + itemIndex + '].description') }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      {{ $t('experiences.footer') }}
    </template>
  </NuxtLayout>
</template>