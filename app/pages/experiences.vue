<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'
  import { experiences } from '@/data/experiences'

  useSeoMeta({
    title: 'Experiences | Ridha Arlian',
    description: 'Professional experience of Ridha Arlian.',
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="max-w-4xl mx-auto py-8">
          <span class="eyebrow">
            SELECTED EXPERIENCE
          </span>
          <h1 class="page-heading">
            A journey built on engineering,<br />problem solving, and continuous learning.
          </h1>

          <div class="timeline">
            <article
              v-for="item in experiences"
              :key="item.role"
              class="timeline-item"
            >
              <span class="eyebrow">
                {{ item.year }}
              </span>
              <div>
                <h2 class="section-heading">
                  {{ item.role }}
                </h2>
                <p class="font-sans text-sm text-muted-foreground mb-2">
                  {{ item.company }}
                </p>
                <p class="body-copy">
                  {{ item.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      EXPERIENCES
    </template>
  </NuxtLayout>
</template>