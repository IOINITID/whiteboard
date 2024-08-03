import { Circle } from "../circle";
import { Line } from "../line";
import { Rectangle } from "../rectangle";

export type Layers = Rectangle[] & Circle[] & Line[];

export class Scene {
  public context: CanvasRenderingContext2D | null;
  public layers: Layers;

  constructor() {
    this.context = null;
    this.layers = [];
  }

  public create() {
    const canvas = document.querySelector("canvas");

    if (canvas) {
      this.context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("mousedown", (event) => {
      const { clientX, clientY } = event;

      const layer = this.getLayer(clientX, clientY);

      if (layer) {
        this.layers.forEach((layer) => {
          layer.state = "default";
        });
        layer.state = "active";
      } else {
        this.layers.forEach((layer) => {
          layer.state = "default";
        });
      }

      this.redraw();
    });

    window.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "backspace") {
        const layer = this.layers.findIndex(
          (layer) => layer.state === "active"
        );

        if (layer !== -1) {
          this.layers[layer].remove();
        }
      }
    });
  }

  private clear() {
    if (this.context) {
      this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  public add(layer: Rectangle | Circle | Line) {
    this.layers.push(layer);

    this.redraw();
  }

  public draw(layer: Rectangle | Circle | Line, isRedraw: boolean = true) {
    if (isRedraw) {
      this.redraw();
    }

    if (this.context) {
      layer.create(this.context);
    }
  }

  public redraw() {
    console.log({ layers: this.layers });

    this.clear();

    this.layers.forEach((layer) => {
      this.draw(layer, false);
    });
  }

  public scale(x: number, y: number) {
    if (this.context) {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.scale(x, y);
    }
  }

  public getLayer(x: number, y: number) {
    const layer = this.layers.findIndex((layer) => {
      if (
        x > layer.position.minX &&
        x < layer.position.maxX &&
        y > layer.position.minY &&
        y < layer.position.maxY
      ) {
        return layer;
      }
    });

    if (layer !== -1) {
      return this.layers[layer];
    } else {
      return null;
    }
  }

  public setState(layer: Rectangle | Circle | Line | null) {
    this.layers.forEach((layer) => {
      layer.state = "default";
    });

    if (layer) {
      layer.state = "active";
    }

    this.redraw();
  }
}

export const scene = new Scene();
