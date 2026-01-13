<template>
  <div class="flex flex-col gap-6">
    <div v-if="pending" class="text-secondary">Loading photos...</div>

    <div v-else-if="error" class="text-primary">
      Failed to load photos. Please try again later.
    </div>

    <div v-else-if="data && data.length > 0" ref="container">
      <div
        v-if="layout"
        class="relative"
        :style="{ height: `${layout.containerHeight}px` }"
      >
        <a
          v-for="(photo, index) in data"
          :key="photo.id"
          :href="photo.link"
          target="_blank"
          rel="noopener noreferrer"
          class="absolute overflow-hidden cursor-pointer"
          :style="{
            top: `${layout.boxes[index].top}px`,
            left: `${layout.boxes[index].left}px`,
            width: `${layout.boxes[index].width}px`,
            height: `${layout.boxes[index].height}px`,
          }"
        >
          <img
            :src="photo.url"
            :alt="photo.title || 'Photo'"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </a>
      </div>
    </div>

    <div v-else class="text-secondary">No photos available.</div>
  </div>
</template>

<script setup lang="ts">
import type { FlickrPhoto } from "~/types/flickr";
import justifiedLayout from "justified-layout";

const { data, pending, error } = await useFetch<FlickrPhoto[]>(
  "/api/flickr-photos",
);

const container = ref<HTMLElement | null>(null);
const containerWidth = ref(800);

// Update container width on mount and when container resizes
onMounted(() => {
  if (!container.value) return;

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      containerWidth.value = entry.contentRect.width;
    }
  });

  resizeObserver.observe(container.value);

  onUnmounted(() => {
    resizeObserver.disconnect();
  });
});

const layout = computed(() => {
  if (!data.value || data.value.length === 0) return null;

  const geometry = data.value.map((photo) => ({
    width: photo.width,
    height: photo.height,
  }));

  return justifiedLayout(geometry, {
    containerWidth: containerWidth.value,
    containerPadding: 0,
    boxSpacing: 8,
    targetRowHeight: 320,
  });
});
</script>
