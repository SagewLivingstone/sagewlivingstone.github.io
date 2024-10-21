import type { Particle } from "./Particle";
import type { ParticleBorrower } from "./types";

/**
 * Stage is the "background" of a Scene. It holds particles by default if they are not being used, and
 * uses unused particles to draw a background.
 */
export abstract class Stage implements ParticleBorrower {
  particles: Particle[] = [];

  abstract assign(particles: Particle[]): void;
  abstract release(count: number): Particle[];
}
