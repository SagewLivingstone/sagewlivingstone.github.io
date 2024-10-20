<template>
  <div class="min-w-screen min-h-screen text-gray-200 after:bg-slate-950">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ParticleView class="fixed left-0 top-0 z-[-1]" />
  </div>
</template>

<script setup lang="ts">
import ParticleView from "./components/Particles/ParticleView.vue";
</script>
