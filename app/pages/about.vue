<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { ScrollArea } from '@/components/ui/scroll-area'
  import ColorModeToggle from '@/components/ColorModeToggle.vue'
  import LocalTime from '@/components/LocalTime.vue'
  import { ArrowLeft } from '@lucide/vue'

  useSeoMeta({
    title: 'About | Ridha Arlian',
  })
</script>

<template>
  <main class="mx-auto flex h-dvh max-h-dvh w-full max-w-7xl flex-col justify-between overflow-hidden p-4 bg-paper text-ink sm:p-6 lg:p-8">
    <header class="shrink-0 flex items-center justify-between border-b border-line pb-3 font-mono text-xs tracking-wider text-muted-foreground sm:pb-4 sm:text-sm">
      <Button 
        as-child 
        variant="ghost" 
        size="sm" 
        class="h-auto p-0 font-mono text-xs tracking-wider text-ink uppercase transition-opacity hover:opacity-50 bg-transparent! !hover:bg-transparent !hover:text-ink focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
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
        <div class="flex min-h-full flex-col justify-center max-w-3xl mx-auto py-8 gap-8">
          <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            A LITTLE ABOUT ME
          </p>
          
          <h1 class="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I turn complex ideas into clear, reliable web applications.
          </h1>
          
          <div class="grid gap-8 border-t border-line pt-8 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2 sm:text-base">
            <p>
              I&rsquo;m an Informatics graduate and software engineer based in Banda Aceh. I focus on building scalable web applications, clean system architectures, and seamless user experiences.
            </p>
            <p>
              Currently open for software engineering roles, technical collaborations, and building impactful digital products. Drop a note to discuss.
            </p>
          </div>
        </div>
      </ScrollArea>
    </section>

    <footer class="shrink-0 flex flex-col gap-2 border-t border-line pt-3 font-mono text-[11px] tracking-wider text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:pt-4 sm:text-sm">
      <span class="uppercase">
        ABOUT
      </span>
      
      <LocalTime />
    </footer>
  </main>
</template>