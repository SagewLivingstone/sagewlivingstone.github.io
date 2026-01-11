<script setup lang="ts">
const projects = [
  {
    name: 'dots',
    date: '2025 (WIP)',
    description: 'A personal daily task tracking app which encourages habit consistency through reminders, heatmaps, and other visualizations. React Native cross-platform app, public release pending.',
  },
  {
    name: 'ClimbDB',
    date: '2024',
    description: 'Interactive web app that helps users find and rate gyms in their area and around the globe. Focused on providing community driven and climbing-specific rankings and information. SvelteKit + Firebase.',
    url: 'https://climbdb.app',
    urlTitle: 'climbdb.app'
  },
  {
    name: 'ray-tracer',
    date: '2020',
    description: 'A lightweight & simple, CPU-only ray tracer written in C++ from scratch.',
    codeUrl: 'https://github.com/SagewLivingstone/ray-tracer'
  }
]
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-6">
      <ProjectItem
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :date="project.date"
        :description="project.description"
        :url="project.url"
        :url-title="project.urlTitle"
        :codeUrl="project.codeUrl"
      />
    </div>
  </div>
</template>
