import { Circle } from "../circle";
import { Rectangle } from "../rectangle";

export type Layers = Rectangle[] & Circle[];

export class Whiteboard {
  public context: CanvasRenderingContext2D | null;
  private layers: Layers;

  constructor() {
    this.context = null;
    this.layers = [];
  }

  private clear() {
    if (this.context) {
      this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  public add(layer: Rectangle | Circle) {
    this.layers.push(layer);

    this.redraw();
  }

  public draw(layer: Rectangle | Circle, isRedraw: boolean = true) {
    if (isRedraw) {
      this.redraw();
    }

    if (this.context) {
      layer.create(this.context);
    }
  }

  private redraw() {
    this.clear();

    this.layers.forEach((layer) => {
      this.draw(layer, false);
    });
  }
}

export const whiteboard = new Whiteboard();
