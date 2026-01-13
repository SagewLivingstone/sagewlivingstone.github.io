<template>
  <div>
    <ul class="flex gap-4 text-xl font-bold">
      <li
        v-for="link in navlinks"
        :key="link.path"
        class="decoration-2 hover:opacity-90"
        @click="$emit('close')"
      >
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import navlinks from "~/utils/constants/navlinks";

defineEmits(["close"]);
</script>
