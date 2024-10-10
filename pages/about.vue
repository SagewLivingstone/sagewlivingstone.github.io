<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold">About Me</h1>

    <section>
      <div class="flex items-center justify-between gap-4">
        <p>
          I am a developer based out of Seattle, WA with a passion for hitting
          keys on my keyboard. I currently work at
          <a
            class="text-red-400 hover:underline"
            href="https://geovisual-analytics.com/"
            >GeoVisual Analytics</a
          >
          where I spend my time ideating and developing Ag tools that help
          growers and reduce waste.
        </p>
        <img class="h-24 w-24 rounded-full" src="/img/me.jpg" />
      </div>

      <p>I enjoy creating tactile and functional projects.</p>

      <!-- Maybe i should move this elsewhere, idk -->
      <!-- feels kinda pretentious? -->
      <div class="italic">
        <blockquote class="ml-2">
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </blockquote>
        <p class="ml-4">- Martin Fowler</p>
      </div>
    </section>

    <section class="flex flex-col gap-4">
      <!-- bad use of horizontal space here -->
      <h2 class="text-2xl font-bold">Experience</h2>

      <ExperienceCard
        title="Software Engineer"
        company="GeoVisual Analytics"
        location="Seattle, WA"
        dates="Aug 2022 - Present"
      >
        Building tools that help farmers
      </ExperienceCard>

      <ExperienceCard
        title="Undergraduate Research Assistant"
        company="University of Wisconsin-Madison"
        location="Madison, WI"
        dates="May 2021 - May 2022"
      >
        Something
      </ExperienceCard>
    </section>

    <h2 class="text-2xl font-bold">Education</h2>

    <h2 class="text-2xl font-bold">Skills/Favorites</h2>
  </div>
</template>

<script setup lang="ts">
import ExperienceCard from "~/components/ExperienceCard.vue";
</script>
