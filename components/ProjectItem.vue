<script setup lang="ts">
import { Globe, Code2 } from 'lucide-vue-next'

interface Props {
  name: string
  date?: string
  description: string
  url?: string
  urlTitle?: string
  codeUrl?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col">
    <h3 class="text-xl font-bold text-secondary">{{ name }}</h3>
    <p v-if="date" class="text-sm italic text-tertiary mb-1">{{ date }}</p>
    <p class="text-bright">{{ description }}</p>
    <div v-if="url || codeUrl" class="mt-2 flex gap-4 text-sm">
      <a
        v-if="url"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1 text-primary hover:underline transition-colors"
      >
        <Globe :size="16" />
        <span>{{ urlTitle || 'Site' }}</span>
      </a>
      <a
        v-if="codeUrl"
        :href="codeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-1 text-primary hover:underline transition-colors"
      >
        <Code2 :size="16" />
        <span>Code</span>
      </a>
    </div>
  </div>
</template>
