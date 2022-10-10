<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'

  import usePeoples from '@/composables/usePeoples'

  const route = useRoute()
  const { fetchPeople, currentPeople } = usePeoples()

  onMounted(async () => {
    await fetchPeople(route.params.id)
  })

  onUnmounted(() => {
    currentPeople.value = null
  })
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700 py-8 text-white"
  >
    <div
      v-if="currentPeople"
      class="flex flex-col items-center justify-center gap-6"
    >
      <h1 class="text-white-800 text-6xl font-bold">
        Hi, I'm {{ currentPeople.name }}
      </h1>
      <pre>{{ currentPeople }}</pre>
    </div>
  </main>
</template>
