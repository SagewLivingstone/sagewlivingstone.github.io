<template>
  <div>
    <ul class="text-red-400 font-bold text-lg flex flex-col items-end">
      <li
        v-for="link in navlinks"
        :key="link.path"
        class="hover:opacity-90 hover:underline decoration-2"
      >
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import navlinks from "~/utils/constants/navlinks";
</script>
