import { Layer } from "../layer";

export class Rectangle extends Layer {
  constructor(x: number, y: number, width: number, height: number) {
    super();

    this.type = "rectangle";
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

      context.moveTo(x, y);
      context.lineTo(x + width, y);
      context.lineTo(x + width, y + height);
      context.lineTo(x, y + height);
      context.lineTo(x, y);

      context.closePath();

      context.stroke();
    }
  }
}
