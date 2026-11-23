<script setup lang="ts">
  import { Coffee } from '@lucide/vue'
  import { Button } from '@/components/ui/button'
  import { projects } from '@/data/projects'

  const sakoe = projects.find((project) => project.slug === 'sakoe')
  const donateUrl = sakoe?.url ?? 'https://sakoe.ridhaarlian.my.id/'
</script>

<template>
  <div class="donate-widget absolute right-3 top-3 z-30 sm:right-6 sm:top-6">
    <Button
      as-child
      variant="ghost"
      size="sm"
      class="h-9 min-h-10 gap-2 rounded-full border border-line bg-paper px-3 font-mono text-xs uppercase tracking-widest text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-muted/40 hover:text-ink focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-reduce:hover:translate-y-0"
    >
      <a
        :href="donateUrl"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="$t('donate.ariaLabel')"
        class="flex items-center gap-2"
      >
        <Coffee class="size-3.5" aria-hidden="true" />
        <span>{{ $t('donate.label') }}</span>
        <span class="donate-dot size-1.5 rounded-full bg-ink" aria-hidden="true" />
      </a>
    </Button>
  </div>
</template>

<style>
@keyframes donate-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes donate-pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.75);
  }
}

.donate-widget {
  animation: donate-in 500ms ease-out 700ms both;
}

.donate-dot {
  animation: donate-pulse 2.4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .donate-widget,
  .donate-dot {
    animation: none;
  }
}
</style>
