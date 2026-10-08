<script setup lang="ts">
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const options = [
    { code: 'en', label: 'EN' },
    { code: 'id', label: 'ID' },
  ] as const
</script>

<template>
  <span class="items-center gap-1.5 whitespace-nowrap font-mono text-xs sm:text-sm tracking-wider uppercase select-none leading-none shrink-0">
    <template v-for="(option, index) in options" :key="option.code">
      <span v-if="index > 0" class="text-muted-foreground/50" aria-hidden="true">|</span>
      <NuxtLink
        :to="switchLocalePath(option.code)"
        :aria-current="locale === option.code ? 'true' : undefined"
        :class="locale === option.code
          ? 'text-ink underline underline-offset-4'
          : 'text-muted-foreground hover:opacity-70 transition-opacity'"
      >
        {{ option.label }}
      </NuxtLink>
    </template>
  </span>
</template>
