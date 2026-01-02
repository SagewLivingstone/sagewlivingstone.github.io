<template>
  <div>
    <ul class="flex flex-col items-end text-lg font-bold text-red-400">
      <li
        v-for="link in navlinks"
        :key="link.path"
        class="decoration-2 hover:underline hover:opacity-90"
      >
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import navlinks from "~/utils/constants/navlinks";
</script>
