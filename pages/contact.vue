<script setup lang="ts">
import { Github, Linkedin, Mail, FileText } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col gap-3 p-2">
    <p>You can reach me here:</p>

    <a
      href="mailto:hi@sagelivingstone.com"
      class="flex items-center gap-2"
    >
      <Mail :size="20" />
      hi@sagelivingstone.com
    </a>

    <a
      href="https://github.com/SagewLivingstone"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2"
    >
      <Github :size="20" />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/sage-livingstone/"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2"
    >
      <Linkedin :size="20" />
      LinkedIn
    </a>

    <a
      href="/Sage_Livingstone_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2"
    >
      <FileText :size="20" />
      Resume
    </a>

    <p class="mt-6 mb-2">Or contact me through this form:</p>

    <div class="max-w-96 mb-8 mr-8">
      <ContactForm />
    </div>
  </div>
</template>
