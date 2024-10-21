import { Particle } from "./Particle";
import type { Stage } from "./Stage";
import { Stars } from "./Stages/Stars";
import type { Drawable, Entity } from "./types";

const BACKGROUND_COLOR = "#01040e";

class World {
  // Shared particles for the world
  particles: Particle[] = [];
  // Non-particle objects
  objects: Entity[] = [];
  // Stage sets the "background" of a scene
  stage: Stage = new Stars();

  width: number = 0;
  height: number = 0;

  constructor() {
    this.createParticles(1000);
  }

  add(object: Entity) {
    this.objects.push(object);
  }

  createParticles(count: number) {
    for (let i = 0; i < count; i++) {
      const particle = new Particle();
      this.particles.push(particle);
    }
  }

  handleInput() {}
  update(delta: number, canvas: HTMLCanvasElement) {
    this.width = canvas.width;
    this.height = canvas.height;

    // Assign any usused particles to the stage
    const unused = this.particles.filter((object) => !object.owner);
    this.stage.assign(unused);

    // Update the stage

    // Update all objects
    for (const object of this.objects) {
      object.update(delta);
    }
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render all shared particles
    for (const particle of this.particles) {
      particle.draw(ctx);
    }

    // Render all other object
    for (const object of this.objects) {
      object.draw(ctx, canvas);
    }
  }
}

export const world = new World();
