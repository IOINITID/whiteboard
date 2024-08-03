import { ILayer, Layer, LayerPosition, LayerType } from "../layer";

export class Rectangle extends Layer implements ILayer {
  public type: LayerType;
  public position: LayerPosition;
  public state: "default" | "active";
  public id: string;
  private radius: number;

  constructor(
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
    radius: number = 16
  ) {
    super();

    this.id = String(Math.random() * 1000);
    this.type = "rectangle";
    this.position = { minX, minY, maxX, maxY };
    this.radius = radius;
    this.state = "default";
  }

  public create(context: CanvasRenderingContext2D) {
    if (context) {
      if (this.state === "active") {
        context.strokeStyle = "red";
      } else {
        context.strokeStyle = "#000000";
      }

      context.lineWidth = 1;

      context.beginPath();

      context.roundRect(
        this.position.minX,
        this.position.minY,
        this.position.maxX - this.position.minX,
        this.position.maxY - this.position.minY,
        this.radius
      );

      context.closePath();

      context.stroke();
    }
  }
}
