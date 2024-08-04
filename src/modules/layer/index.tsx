import { Circle } from "../circle";
import { Line } from "../line";
import { Rectangle } from "../rectangle";
import { scene } from "../scene";

export type LayerType = "cursor" | "rectangle" | "circle" | "line" | "freedraw";
export type LayerPosition = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

export interface ILayer {
  id: string;
  type: LayerType;
  position: LayerPosition;
  state: "default" | "active";
  create: (context: CanvasRenderingContext2D) => void;
  move: (x: number, y: number) => void;
  remove: () => void;
}

export class Layer {
  public move(this: Rectangle | Circle | Line, x: number, y: number) {
    this.position.minX += x;
    this.position.minY += y;
    this.position.maxX += x;
    this.position.maxY += y;

    scene.redraw();
  }

  public remove(this: Rectangle | Circle | Line) {
    scene.layers = scene.layers.filter((layer) => layer.id !== this.id);
    scene.redraw();
  }
}
