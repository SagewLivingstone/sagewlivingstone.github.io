<template>
  <canvas ref="canvas" :width="windowWidth" :height="windowHeight" />
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import _ from "lodash";

const { width: windowWidth, height: windowHeight } = useWindowSize();

definePageMeta({ layout: "blank" });

const canvas = ref<HTMLCanvasElement>();
let ctx: CanvasRenderingContext2D | undefined | null;

onMounted(() => {
  ctx = canvas.value?.getContext("2d");

  if (ctx) {
    run();
  } else {
    console.error("Failed to get canvas context");
  }
});

const BACKGROUND_COLOR = "#01040e";

interface Drawable {
  draw(ctx: CanvasRenderingContext2D): void;
}

interface ParticleBorrower extends Drawable {
  particles: Particle[];

  borrow(particle: Particle): void;
}

class Particle implements Drawable {
  x: number = 0;
  y: number = 0;
  size: number = _.random(0.5, 1.1);
  color: string = "#99a";
  owner?: ParticleBorrower;

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Stars implements ParticleBorrower {
  particles: Particle[];

  constructor() {
    this.particles = [];
  }

  borrow(particle: Particle): void {
    particle.owner = this;
    this.particles.push(particle);

    particle.x = _.random(0, windowWidth.value);
    particle.y = _.random(0, windowHeight.value);
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const particle of this.particles) {
      particle.draw(ctx);
    }
  }
}

class World {
  objects: Drawable[] = [];

  constructor() {
    this.createParticles(1000);
    const stars = new Stars();
    this.lendParticles(800, stars);
  }

  add(object: Drawable) {
    this.objects.push(object);
  }

  createParticles(count: number) {
    for (let i = 0; i < count; i++) {
      const particle = new Particle();
      this.add(particle);
    }
  }

  lendParticles(count: number, borrower: ParticleBorrower, extend = false) {
    // Find count particles that are unused
    const particles = this.objects.filter(
      (object): object is Particle =>
        object instanceof Particle && !object.owner,
    );

    // Allocate what we have
    particles.forEach((particle) => {
      borrower.borrow(particle);
    });
  }

  handleInput() {}
  update() {}
  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const object of this.objects) {
      object.draw(ctx);
    }
  }
}

const world = new World();

function run() {
  window.requestAnimationFrame(run);
  if (ctx && canvas.value) {
    // 1. handle input
    world.handleInput();
    // 2. update state
    world.update();
    // 3. render
    world.render(ctx, canvas.value);
  }
}
</script>
