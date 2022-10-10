<script setup>
  const props = defineProps({
    people: {
      type: Object,
      default: () => ({
        _id: -1,
        name: 'Unknown',
      }),
    },
  })
</script>

<template>
  <RouterLink
    :to="`/people/${props.people._id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.people.name }}
      </h2>
    </div>
  </RouterLink>
</template>
