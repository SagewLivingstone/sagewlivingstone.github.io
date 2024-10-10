<template>
  <div
    class="grain-background before:bg-slate-950 min-w-screen min-h-screen text-gray-200"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.grain-background::before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  background-image: url(~/assets/svg/stars.svg);
  background-size: cover;
  /* background-blend-mode: hue; */
  width: 100%;
  height: 100%;

  /* mix-blend-mode: multiply; */
}
</style>

<script setup lang="ts">
import grain from "~/assets/svg/grain.svg";
</script>
