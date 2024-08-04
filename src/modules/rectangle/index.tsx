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

  public frame(context: CanvasRenderingContext2D) {
    const padding = 8;

    if (context) {
      context.beginPath();

      context.strokeStyle = "purple";

      context.roundRect(
        this.position.minX - padding,
        this.position.minY - padding,
        this.position.maxX - this.position.minX + padding * 2,
        this.position.maxY - this.position.minY + padding * 2,
        0
      );

      context.closePath();

      context.stroke();

      const dot = {
        width: 8,
        height: 8,
      };

      context.beginPath();

      context.strokeStyle = "purple";
      context.fillStyle = "#ffffff";

      context.roundRect(
        this.position.minX - dot.width * 1.5,
        this.position.minY - dot.height * 1.5,
        dot.width,
        dot.height,
        0
      );

      context.closePath();

      context.fill();
      context.stroke();

      context.beginPath();

      context.strokeStyle = "purple";
      context.fillStyle = "#ffffff";

      context.roundRect(
        this.position.maxX + dot.width * 0.5,
        this.position.maxY + dot.height * 0.5,
        dot.width,
        dot.height,
        0
      );

      context.closePath();

      context.fill();
      context.stroke();

      context.beginPath();

      context.strokeStyle = "purple";
      context.fillStyle = "#ffffff";

      context.roundRect(
        this.position.maxX + dot.width * 0.5,
        this.position.minY - dot.height * 1.5,
        dot.width,
        dot.height,
        0
      );

      context.closePath();

      context.fill();
      context.stroke();

      context.beginPath();

      context.strokeStyle = "purple";
      context.fillStyle = "#ffffff";

      context.roundRect(
        this.position.minX - dot.width * 1.5,
        this.position.maxY + dot.height * 0.5,
        dot.width,
        dot.height,
        0
      );

      context.closePath();

      context.fill();
      context.stroke();
    }
  }

  public create(context: CanvasRenderingContext2D) {
    if (context) {
      if (this.state === "active") {
        this.frame(context);
      }

      context.lineWidth = 1;

      context.beginPath();

      context.strokeStyle = "#000000";

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
