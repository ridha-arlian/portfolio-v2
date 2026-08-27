<script setup lang="ts">
  const currentTime = ref('')

  function updateTime() {
    const now = new Date()
    currentTime.value = new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now)
  }

  let timer: ReturnType<typeof setInterval>

  onMounted(() => {
    updateTime()
    timer = setInterval(updateTime, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })
</script>

<template>
  <ClientOnly>
    <span>
      {{ currentTime }} WIB [UTC+7]
    </span>
    <template #fallback>
      <span>
        --:--:-- WIB [UTC+7]
      </span>
    </template>
  </ClientOnly>
</template>