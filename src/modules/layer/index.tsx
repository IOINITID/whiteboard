export type LayerType = "main" | "rectangle" | "circle" | "line";
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

export class Layer {}
