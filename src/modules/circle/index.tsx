import { ILayer, Layer, LayerPosition, LayerSize, LayerType } from "../layer";

export class Circle extends Layer implements ILayer {
  public type: LayerType;
  public position: LayerPosition;
  public size: LayerSize;

  constructor(x: number, y: number, width: number, height: number) {
    super();

    this.type = "circle";
    this.position = { x, y };
    this.size = { width, height };
  }

  public create(context: CanvasRenderingContext2D) {
    if (context) {
      context.strokeStyle = "#000000";
      context.lineWidth = 1;

      context.beginPath();

      context.ellipse(
        Math.abs(this.size.width / 2 + this.position.x),
        Math.abs(this.size.height / 2 + this.position.y),
        Math.abs(this.size.width / 2),
        Math.abs(this.size.height / 2),
        0,
        0,
        Math.PI * 2
      );

      context.closePath();

      context.stroke();
    }
  }
}
