import _ from "lodash";
import type { Drawable, ParticleBorrower } from "./types";

export class Particle implements Drawable {
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
