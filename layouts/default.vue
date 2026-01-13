<!-- Default layout with centered content and fixed sidebar -->
<script setup lang="ts">
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";

const isNavOpen = ref(false);
</script>

<template>
  <div class="page-container relative flex h-full w-full flex-col items-center">
    <!-- Mobile header: fixed at top, visible only on mobile -->
    <div class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-dark px-6 pb-4 pt-6 xl:hidden">
      <h1 class="text-base font-bold">
        <a class="!text-bright hover:no-underline" href="/">
          Sage Livingstone
        </a>
      </h1>
      <button
        @click="isNavOpen = true"
        class="flex items-center text-primary hover:opacity-80"
        role="button"
        aria-label="Open menu"
      >
        <Menu :size="24" />
      </button>
    </div>

    <!-- Fullscreen navigation overlay -->
    <div
      v-if="isNavOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-dark xl:hidden"
    >
      <!-- Close button (X) -->
      <button
        @click="isNavOpen = false"
        class="absolute right-6 top-6 text-bright hover:opacity-80"
        aria-label="Close menu"
      >
        <X :size="24" />
      </button>

      <!-- Navigation -->
      <MobileNav @close="isNavOpen = false" />
    </div>

    <!-- Container for content centering -->
    <div class="mt-20 w-full max-w-[50rem] px-6 xl:mt-16 xl:px-0">
      <!-- Sidebar: Fixed positioned to left of center with fixed gap -->
      <div
        class="sidebar-container fixed right-[calc(50%+25rem+1.5rem)] top-16 hidden xl:flex xl:h-min xl:w-min xl:flex-col xl:gap-4 xl:rounded-r-md xl:border-r-2 xl:border-gray-200 xl:pr-3"
      >
        <h1 class="text-right text-xl/6 font-bold">
          <a class="!text-bright hover:no-underline" href="/">
            Sage Livingstone
          </a>
        </h1>
        <NavBar />
      </div>

      <!-- Content area -->
      <div class="content flex flex-col gap-4">
        <!-- Page content slot -->
        <slot />
      </div>
    </div>
  </div>
</template>
