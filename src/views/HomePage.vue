<script setup>
  import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
  <main class="min-h-screen bg-gradient-to-tr from-fuchsia-900 to-red-700">
    <div class="container mx-auto grid grid-cols-4 gap-4 pt-8">
      <BaseCard v-for="n in 10" :key="n" />
    </div>
  </main>
</template>
