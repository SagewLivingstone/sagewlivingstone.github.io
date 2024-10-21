import _ from "lodash";
import type { Particle } from "../Particle";
import { Stage } from "../Stage";
import { world } from "../World";

export class Stars extends Stage {
  assign(particles: Particle[]): void {
    for (const particle of particles) {
      particle.owner = this;
      this.particles.push(particle);

      particle.x = _.random(0, world.width);
      particle.y = _.random(0, world.height);
    }
  }

  release(count: number) {
    // TODO:
    return [];
  }

  update() {}

  draw(ctx: CanvasRenderingContext2D) {
    for (const particle of this.particles) {
      particle.draw(ctx);
    }
  }
}
