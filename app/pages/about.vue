<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'

  useSeoMeta({
    title: 'About | Ridha Arlian',
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="flex min-h-full flex-col justify-center max-w-3xl mx-auto py-8">
          <span class="eyebrow">
            A LITTLE ABOUT ME
          </span>
          
          <h1 class="page-heading">
            I turn complex ideas into clear, reliable web applications.
          </h1>
          
          <div class="grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
            <p class="body-copy">
              I&rsquo;m an Informatics graduate and software engineer based in Banda Aceh. I focus on building scalable web applications, clean system architectures, and seamless user experiences.
            </p>
            <p class="body-copy">
              Currently open for software engineering roles, technical collaborations, and building impactful digital products. Drop a note to discuss.
            </p>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      ABOUT
    </template>
  </NuxtLayout>
</template>