<template>
  <canvas ref="canvas" :width="windowWidth" :height="windowHeight" />
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import _ from "lodash";
import { world } from "./World";

const { width: windowWidth, height: windowHeight } = useWindowSize();

definePageMeta({ layout: "blank" });

const canvas = ref<HTMLCanvasElement>();
let ctx: CanvasRenderingContext2D | undefined | null;

onMounted(() => {
  ctx = canvas.value?.getContext("2d");

  if (ctx) {
    requestAnimationFrame(run);
  } else {
    console.error("Failed to get canvas context");
  }
});

// TODO:
// Scene might be like a preset collection of things in the world (almost like a
// level). So a NightSky scene would have a Stars stage and some other objects
// like a comet, shooting stars, etc.

// class Scene {
//   stage!: Stage;
//   world: World;

//   constructor(world: World) {
//     this.world = world;
//   }
// }

// class NightSky extends Scene {
//   constructor(world: World) {
//     super(world);

//     this.stage = new Stage();
//   }
// }

var lastTime;
function run(time: DOMHighResTimeStamp) {
  window.requestAnimationFrame(run);

  lastTime ??= time;
  const delta = time - lastTime;

  if (ctx && canvas.value) {
    world.handleInput();
    world.update(delta, canvas.value);
    world.render(ctx, canvas.value);
  }
}
</script>
