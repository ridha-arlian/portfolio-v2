<script setup lang="ts">
  import { ScrollArea } from '@/components/ui/scroll-area'
  import { ArrowUpRight } from '@lucide/vue'

  useSeoMeta({
    title: 'Contact | Ridha Arlian',
  })
</script>

<template>
  <NuxtLayout>
    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="flex min-h-full flex-col justify-center max-w-2xl mx-auto py-8">
          <span class="eyebrow">
            LET&rsquo;S TALK
          </span>
          
          <h1 class="page-heading">
            Have a good idea?<br />Let&rsquo;s bring it to life.
          </h1>
          
          <p class="body-copy mb-8">
            For new projects, tech collaborations, or just a thoughtful exchange, send a note. I&rsquo;m currently open to select opportunities.
          </p>

          <div class="w-full overflow-x-auto pb-2 mb-10 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <NuxtLink 
              class="inline-flex items-center gap-2 text-xl sm:text-2xl font-mono underline underline-offset-4 hover:opacity-70 transition-opacity whitespace-nowrap" 
              to="mailto:ridhaarlianalhaqie@gmail.com"
            >
              ridhaarlianalhaqie@gmail.com
              <ArrowUpRight class="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
            </NuxtLink>
          </div>

          <div class="flex flex-wrap gap-6 font-mono text-sm tracking-wider uppercase">
            <NuxtLink 
              to="https://linkedin.com/in/ridha-arlian" 
              target="_blank" 
              class="inline-flex items-center gap-1 hover:underline"
            >
              LinkedIn <ArrowUpRight class="h-3.5 w-3.5" />
            </NuxtLink>
            
            <NuxtLink 
              to="https://github.com/ridha-arlian" 
              target="_blank" 
              class="inline-flex items-center gap-1 hover:underline"
            >
              GitHub <ArrowUpRight class="h-3.5 w-3.5" />
            </NuxtLink>
            
            <NuxtLink 
              to="https://instagram.com/ridha_arlian" 
              target="_blank" 
              class="inline-flex items-center gap-1 hover:underline"
            >
              Instagram <ArrowUpRight class="h-3.5 w-3.5" />
            </NuxtLink>
          </div>
        </div>
      </ScrollArea>
    </section>

    <template #footer-text>
      CONTACT
    </template>
  </NuxtLayout>
</template>