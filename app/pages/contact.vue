<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import ColorModeToggle from '@/components/ColorModeToggle.vue'
import LocalTime from '@/components/LocalTime.vue'
import { ArrowLeft, ArrowUpRight } from '@lucide/vue'

useSeoMeta({
  title: 'Contact | Ridha Arlian',
  description: 'Contact Ridha Arlian for collaborations and product work.'
})
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 sm:p-6 lg:p-8">
    <header class="shrink-0 flex items-center justify-between border-b border-line pb-3 sm:pb-4 font-mono text-xs tracking-wider text-muted-foreground sm:text-sm">
      <Button 
        as-child 
        variant="ghost" 
        size="sm" 
        class="h-auto p-0 font-mono text-xs sm:text-sm tracking-wider text-ink uppercase transition-opacity hover:opacity-50 bg-transparent! !hover:bg-transparent !hover:text-ink focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <NuxtLink to="/" class="flex items-center gap-2">
          <ArrowLeft class="h-4 w-4 shrink-0" />
          BACK TO GRAPH
        </NuxtLink>
      </Button>
      
      <ColorModeToggle />
    </header>

    <section class="flex-1 min-h-0 py-4 sm:py-6">
      <ScrollArea class="h-full w-full pr-4">
        <div class="flex min-h-full flex-col justify-center max-w-2xl py-8">
          <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            LET&rsquo;S TALK
          </p>
          
          <h1 class="text-3xl font-light tracking-tight sm:text-5xl leading-tight mb-6">
            Have a good idea?<br />Let&rsquo;s bring it to life.
          </h1>
          
          <p class="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            For new projects, tech collaborations, or just a thoughtful exchange, send a note. I&rsquo;m currently open to select opportunities.
          </p>

          <div class="w-full overflow-x-auto pb-2 mb-10 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <a 
              class="inline-flex items-center gap-2 text-xl sm:text-2xl font-mono underline underline-offset-4 hover:opacity-70 transition-opacity whitespace-nowrap" 
              href="mailto:ridhaarlianalhaqie@gmail.com"
            >
              ridhaarlianalhaqie@gmail.com
              <ArrowUpRight class="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
            </a>
          </div>

          <div class="flex flex-wrap gap-6 font-mono text-sm tracking-wider uppercase">
            <a href="https://linkedin.com/in/ridha-arlian" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 hover:underline">
              LinkedIn <ArrowUpRight class="h-3.5 w-3.5" />
            </a>
            <a href="https://github.com/ridha-arlian" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 hover:underline">
              GitHub <ArrowUpRight class="h-3.5 w-3.5" />
            </a>
            <a href="https://instagram.com/ridha_arlian" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 hover:underline">
              Instagram <ArrowUpRight class="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </ScrollArea>
    </section>

    <footer class="shrink-0 flex flex-col gap-2 border-t border-line pt-3 sm:pt-4 font-mono text-[11px] sm:text-sm tracking-wider text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
      <span class="uppercase">
        CONTACT
      </span>
      
      <LocalTime />
    </footer>
  </main>
</template>