import { Circle } from "../circle";
import { Layer } from "../layer";
import { Rectangle } from "../rectangle";

export class Whiteboard extends Layer {
  public context: CanvasRenderingContext2D | null;
  private layers: Rectangle[] | Circle[];

  constructor() {
    super();

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

    if (layer.type === "rectangle") {
      if (layer instanceof Rectangle) {
        if (this.context) {
          layer.create(
            this.context,
            layer.position.x,
            layer.position.y,
            layer.size.width,
            layer.size.height
          );
        }
      }
    }

    if (layer.type === "circle") {
      if (layer instanceof Circle) {
        if (this.context) {
          layer.create(
            this.context,
            layer.position.x,
            layer.position.y,
            layer.size.width,
            layer.size.height
          );
        }
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
