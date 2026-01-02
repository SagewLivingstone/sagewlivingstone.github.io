<template>
  <div class="flex h-[100vh] w-full items-center justify-center">
    <div>
      <ul class="flex gap-4 text-xl font-bold text-red-400">
        <li
          v-for="link in navlinks"
          :key="link.path"
          class="decoration-2 hover:underline hover:opacity-90"
        >
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import navlinks from "~/utils/constants/navlinks";

definePageMeta({
  layout: "blank",
});
</script>
