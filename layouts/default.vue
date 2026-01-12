<!-- Default layout with centered content and fixed sidebar -->
<template>
  <div class="page-container relative flex h-full w-full flex-col items-center">
    <!-- Container for content centering -->
    <div class="mt-[8vh] w-full max-w-[50rem] px-6 xl:px-0">
      <!-- Sidebar: Fixed positioned to left of center with fixed gap -->
      <div
        class="sidebar-container fixed right-[calc(50%+25rem+1.5rem)] top-[8vh] hidden xl:flex xl:h-min xl:w-min xl:flex-col xl:gap-4 xl:rounded-r-md xl:border-r-2 xl:border-gray-200 xl:pr-3"
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
        <!-- Home button: visible only on mobile -->
        <div class="mb-2 xl:hidden">
          <a
            href="/"
            class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Home
          </a>
        </div>

        <!-- Page content slot -->
        <slot />
      </div>
    </div>
  </div>
</template>
