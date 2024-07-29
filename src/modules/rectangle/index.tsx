import { ILayer, Layer, LayerPosition, LayerSize, LayerType } from "../layer";

export class Rectangle extends Layer implements ILayer {
  public type: LayerType;
  public position: LayerPosition;
  public size: LayerSize;
  private radius: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number = 16
  ) {
    super();

    this.type = "rectangle";
    this.position = { x, y };
    this.size = { width, height };
    this.radius = radius;
  }

  public create(context: CanvasRenderingContext2D) {
    if (context) {
      context.strokeStyle = "#000000";
      context.lineWidth = 1;

      context.beginPath();

      context.moveTo(this.position.x + this.radius, this.position.y);

      // context.lineTo(x + width - this.radius, y);
      // context.quadraticCurveTo(x + width, y, x + width, y + this.radius);
      // context.lineTo(x + width, y + height - this.radius);
      // context.quadraticCurveTo(
      //   x + width,
      //   y + height,
      //   x + width - this.radius,
      //   y + height
      // );
      // context.lineTo(x + this.radius, y + height);
      // context.quadraticCurveTo(x, y + height, x, y + height - this.radius);
      // context.lineTo(x, y + this.radius);
      // context.quadraticCurveTo(x, y, x + this.radius, y);

      context.roundRect(
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height,
        this.radius
      );

      context.closePath();

      context.stroke();
    }
  }
}
