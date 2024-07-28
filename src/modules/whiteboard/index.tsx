import { Layer } from "../layer";
import { Rectangle } from "../rectangle";

export class Whiteboard extends Layer {
  public context: CanvasRenderingContext2D | null;
  public layers: Layer[];

  constructor() {
    super();

    this.context = null;
    this.layers = [];
  }

  public clear() {
    if (this.context) {
      this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  public add(layer: Rectangle) {
    this.layers.push(layer);

    this.reDraw();
  }

  public draw(layer: Rectangle) {
    this.reDraw();

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

  private reDraw() {
    this.clear();

    this.layers.forEach((layer) => {
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
    });
  }
}

export const whiteboard = new Whiteboard();
