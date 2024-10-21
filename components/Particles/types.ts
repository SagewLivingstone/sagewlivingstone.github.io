import type { Particle } from "./Particle";

export interface Drawable {
  draw(ctx: CanvasRenderingContext2D, canvas?: HTMLCanvasElement): void;
}

export interface Entity extends Drawable {
  update(delta: number): void;
}

export interface ParticleBorrower {
  assign(particles: Particle[]): any;
  release(count: number): Particle[];
}
