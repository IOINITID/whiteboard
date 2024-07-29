export type LayerType = "main" | "rectangle" | "circle";
export type LayerPosition = { x: number; y: number };
export type LayerSize = { width: number; height: number };

export interface ILayer {
  type: LayerType;
  position: LayerPosition;
  size: LayerSize;
}

export class Layer {}
