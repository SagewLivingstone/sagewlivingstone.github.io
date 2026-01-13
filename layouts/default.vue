<!-- Default layout with centered content and fixed sidebar -->
<template>
  <div class="page-container relative flex h-full w-full flex-col items-center">
    <!-- Mobile header: fixed at top, visible only on mobile -->
    <div class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-dark px-6 pb-4 pt-6 xl:hidden">
      <h1 class="text-base font-bold">
        <a class="!text-bright hover:no-underline" href="/">
          Sage Livingstone
        </a>
      </h1>
      <a
        href="/"
        class="flex items-center text-primary hover:opacity-80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </a>
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
