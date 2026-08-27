<template>
  <main class="page-shell">
    <header class="page-header"><NuxtLink to="/" class="hover:opacity-50">← BACK TO GRAPH</NuxtLink><span>SKILLS / 003</span></header>
    <section class="content-section">
      <p class="eyebrow">TOOLS & CRAFT</p><h1>Things I use to make<br />ideas tangible.</h1>
      <div class="list-grid"><article v-for="group in groups" :key="group.title" class="list-item"><p class="eyebrow">{{ group.title }}</p><p class="item-text">{{ group.items }}</p></article></div>
    </section>
    <footer class="page-footer"><span>DESIGNER / DEVELOPER</span><span>2026</span></footer>
  </main>
</template>
<script setup lang="ts">const groups = [{ title: 'INTERFACE', items: 'Product design · Design systems · Prototyping · UX direction' }, { title: 'ENGINEERING', items: 'Vue · Nuxt · TypeScript · Tailwind CSS · Accessibility' }, { title: 'PROCESS', items: 'Research · Art direction · Facilitation · Creative strategy' }]; useSeoMeta({ title: 'Skills — Raka Pratama', description: 'Skills and tools used by Raka Pratama.' })</script>
