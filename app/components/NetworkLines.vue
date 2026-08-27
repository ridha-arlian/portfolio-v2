<script setup lang="ts">
  interface NodePoint {
    id: string
    x: number
    y: number
  }

  defineProps<{
    nodes: NodePoint[]
  }>()
</script>

<template>
  <svg class="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <line
      v-for="node in nodes"
      :key="node.id"
      x1="50"
      y1="50"
      :x2="node.x"
      :y2="node.y"
      class="stroke-line-strong stroke-[1.5] [stroke-dasharray:4_4] [vector-effect:non-scaling-stroke] transition-all duration-700 ease-out"
    />
  </svg>
</template>