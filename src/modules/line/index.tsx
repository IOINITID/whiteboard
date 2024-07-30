import { ILayer, Layer, LayerPosition, LayerSize, LayerType } from "../layer";

export class Line extends Layer implements ILayer {
  public type: LayerType;
  public position: LayerPosition;
  public size: LayerSize;

  constructor(x: number, y: number, width: number, height: number) {
    super();

    this.type = "line";
    this.position = { x, y };
    this.size = { width, height };
  }

  public create(context: CanvasRenderingContext2D) {
    if (context) {
      context.strokeStyle = "#000000";
      context.lineWidth = 1;

      context.beginPath();

      context.lineTo(this.position.x, this.position.y);
      context.lineTo(
        this.position.x + this.size.width,
        this.position.y + this.size.height
      );

      context.closePath();

      context.stroke();
    }
  }
}
