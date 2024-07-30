export type LayerType = "main" | "rectangle" | "circle" | "line";
export type LayerPosition = { x: number; y: number };
export type LayerSize = { width: number; height: number };

export interface ILayer {
  type: LayerType;
  position: LayerPosition;
  size: LayerSize;
  create: (context: CanvasRenderingContext2D) => void;
}

export class Layer {}
