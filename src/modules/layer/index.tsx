export class Layer {
  public type: "main" | "rectangle";
  public position: { x: number; y: number };
  public size: { width: number; height: number };

  constructor(
    type: "main" | "rectangle" = "main",
    position: { x: number; y: number } = { x: 0, y: 0 },
    size: { width: number; height: number } = { width: 0, height: 0 }
  ) {
    this.type = type;
    this.position = position;
    this.size = size;
  }
}
