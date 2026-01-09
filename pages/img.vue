<template>
  <div class="flex flex-col gap-6 p-6">
    <h1 class="text-3xl font-bold text-bright">Photography</h1>

    <div v-if="pending" class="text-secondary">Loading photos...</div>

    <div v-else-if="error" class="text-primary">
      Failed to load photos. Please try again later.
    </div>

    <div
      v-else-if="data && data.length > 0"
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="photo in data"
        :key="photo.id"
        class="group aspect-square overflow-hidden rounded-lg border-2 border-gray-200 transition-colors hover:border-primary"
      >
        <img
          :src="photo.url"
          :alt="photo.title || 'Photo'"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div v-else class="text-secondary">No photos available.</div>
  </div>
</template>

<script setup lang="ts">
import type { FlickrPhoto } from "~/types/flickr";

const { data, pending, error } = await useFetch<FlickrPhoto[]>(
  "/api/flickr-photos",
);
</script>
