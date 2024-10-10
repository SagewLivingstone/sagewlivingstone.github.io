<!-- Default layout with a navbar that centers the content -->
<template>
  <div class="page-container flex h-full w-full flex-col items-center">
    <div
      class="centered-container mt-[8vh] flex w-full max-w-[60rem] gap-6 px-6"
    >
      <div
        class="sidebar flex h-min w-min flex-col gap-4 rounded-r-md border-r-2 border-gray-200 pr-3"
      >
        <h1 class="text-right text-xl/6 font-bold">
          <a href="/"> Sage Livingstone </a>
        </h1>
        <NavBar />
      </div>

      <div class="content flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>
