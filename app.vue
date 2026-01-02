<template>
  <div
    class="min-w-screen star-background min-h-screen bg-slate-950 text-gray-200"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.star-background {
  background-color: #01040e;
  background-image: radial-gradient(2px 2px at 20% 30%, white, transparent),
    radial-gradient(2px 2px at 60% 70%, white, transparent),
    radial-gradient(1px 1px at 50% 50%, white, transparent),
    radial-gradient(1px 1px at 80% 10%, white, transparent),
    radial-gradient(2px 2px at 90% 60%, white, transparent),
    radial-gradient(1px 1px at 33% 80%, white, transparent),
    radial-gradient(1px 1px at 70% 40%, white, transparent),
    radial-gradient(2px 2px at 15% 90%, white, transparent),
    radial-gradient(1px 1px at 45% 20%, white, transparent);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
