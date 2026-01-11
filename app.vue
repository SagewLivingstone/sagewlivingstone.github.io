<template>
  <div class="min-w-screen min-h-screen bg-dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Design system CSS variables */
:root {
  --color-dark: #0a0e19;
  --color-bright: #e0def2;
  --color-primary: #db7692;
  --color-secondary: #eec382;
  --color-tertiary: #a7ced7;
  --color-accent: #bfa8e3;
  --color-accent-2: #e4bebb;
  --color-accent-3: #43738c;
}

/* Global text and background defaults */
html,
body {
  background-color: var(--color-dark);
  color: var(--color-bright);
}

/* Global link styling */
a {
  color: var(--color-primary);
}

a:hover {
  text-decoration: underline;
}
</style>
