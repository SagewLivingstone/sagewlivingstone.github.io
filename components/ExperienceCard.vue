<template>
  <div class="flex flex-col">
    <h3 class="text-lg font-bold">{{ company }}</h3>
    <h4 class="mb-1 text-sm text-gray-500">{{ title }}, {{ dates }}</h4>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
});
</script>
