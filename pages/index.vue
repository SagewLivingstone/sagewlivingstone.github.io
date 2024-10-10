<template>
  <div class="w-full h-[100vh] flex justify-center items-center">
    <div>
      <ul class="text-red-400 font-bold text-xl flex gap-4">
        <li
          v-for="link in navlinks"
          :key="link.path"
          class="hover:opacity-90 hover:underline decoration-2"
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
