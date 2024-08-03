import { ILayer, Layer, LayerPosition, LayerType } from "../layer";

export class Line extends Layer implements ILayer {
  public type: LayerType;
  public position: LayerPosition;
  public state: "default" | "active";
  public id: string;

  constructor(minX: number, minY: number, maxX: number, maxY: number) {
    super();

    this.id = String(Math.random() * 1000);
    this.type = "line";
    this.position = { minX, minY, maxX, maxY };
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

      context.lineTo(this.position.minX, this.position.minY);
      context.lineTo(this.position.maxX, this.position.maxY);

      context.closePath();

      context.stroke();
    }
  }
}
