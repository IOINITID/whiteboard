import { Layer } from "../layer";

export class Circle extends Layer {
  constructor(x: number, y: number, width: number, height: number) {
    super();

    this.type = "circle";
    this.position = { x, y };
    this.size = { width, height };
  }

  public create(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.position = { x, y };
    this.size = { width, height };

    if (context) {
      context.strokeStyle = "#000000";
      context.lineWidth = 1;

      context.beginPath();

      context.arc(x, y, width, 0, Math.PI * 2);

      context.closePath();

      context.stroke();
    }
  }
}
