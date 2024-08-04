import { Circle } from "../circle";
import { LayerType } from "../layer";
import { Line } from "../line";
import { Rectangle } from "../rectangle";

export type Layers = Rectangle[] & Circle[] & Line[];

export class Scene {
  private canvas: HTMLCanvasElement | null;
  private context: CanvasRenderingContext2D | null;
  public layers: Layers;
  private isMouseDown: boolean;
  private state: { startX: number; startY: number; endX: number; endY: number };
  public tool: LayerType;
  public setTool: ((tool: LayerType) => void) | null;

  constructor() {
    this.canvas = null;
    this.context = null;
    this.layers = [];
    this.isMouseDown = false;
    this.state = { startX: 0, startY: 0, endX: 0, endY: 0 };
    this.tool = "cursor";
    this.setTool = null;
  }

  public create() {
    this.canvas = document.querySelector("canvas");

    if (this.canvas) {
      this.context = this.canvas.getContext("2d");

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    window.addEventListener("mousedown", (event) => {
      const { clientX, clientY } = event;

      this.isMouseDown = true;

      this.state = { ...this.state, startX: clientX, startY: clientY };

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

    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY, movementX, movementY } = event;

      this.state = { ...this.state, endX: clientX, endY: clientY };

      const { startX, startY, endX, endY } = this.state;

      const layer = this.getLayer(clientX, clientY);

      if (layer) {
        if (this.canvas) {
          this.canvas.style.cursor = "move";
        }
      } else {
        if (this.canvas) {
          this.canvas.style.cursor = "default";
        }
      }

      if (this.isMouseDown) {
        if (this.tool === "rectangle") {
          this.draw(new Rectangle(startX, startY, endX, endY));
        }

        if (this.tool === "circle") {
          this.draw(new Circle(startX, startY, endX, endY));
        }

        if (this.tool === "line") {
          this.draw(new Line(startX, startY, endX, endY));
        }

        if (layer) {
          if (layer.state === "active") {
            layer.move(movementX, movementY);
          }
        }
      }
    });

    window.addEventListener("mouseup", (event) => {
      const { clientX, clientY } = event;

      this.state = { ...this.state, endX: clientX, endY: clientY };

      const { startX, startY, endX, endY } = this.state;

      this.isMouseDown = false;

      if (this.tool === "rectangle") {
        this.add(new Rectangle(startX, startY, endX, endY));
      }

      if (this.tool === "circle") {
        this.add(new Circle(startX, startY, endX, endY));
      }

      if (this.tool === "line") {
        this.add(new Line(startX, startY, endX, endY));
      }

      this.state = { startX: 0, startY: 0, endX: 0, endY: 0 };

      if (this.setTool) {
        this.setTool("cursor");
      }
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
