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

    this.update();
  }

  public draw(layer: Rectangle | Circle, isRedraw: boolean = true) {
    if (isRedraw) {
      this.update();
    }

    if (this.context) {
      if (layer.type === "rectangle") {
        layer.create(this.context);
      }

      if (layer.type === "circle") {
        layer.create(this.context);
      }
    }
  }

  private update() {
    this.clear();

    this.layers.forEach((layer) => {
      this.draw(layer, false);
    });
  }
}

export const whiteboard = new Whiteboard();
