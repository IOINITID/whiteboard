import { useCallback, useEffect, useState } from "react";
import { whiteboard } from "../../modules/whiteboard";
import { Rectangle } from "../../modules/rectangle";
import { Circle } from "../../modules/circle";
import { LayerType } from "../../modules/layer";
import { Line } from "../../modules/line";

export const Canvas = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isMouseDown, setisMouseDown] = useState(false);
  const [tool, setTool] = useState<LayerType>("rectangle");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
    setContext(canvas.getContext("2d"));

    whiteboard.context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    if (isMouseDown) {
      if (tool === "rectangle") {
        whiteboard.draw(new Rectangle(x, y, width, height));
      }

      if (tool === "circle") {
        whiteboard.draw(new Circle(x, y, width, height));
      }

      if (tool === "line") {
        whiteboard.draw(new Line(x, y, width, height));
      }
    }
  }, [x, y, width, height, isMouseDown, tool]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            background: tool === "rectangle" ? "lavender" : "none",
            padding: "16px",
          }}
          onClick={() => {
            setTool("rectangle");
          }}
        >
          Rectangle
        </div>
        <div
          style={{
            background: tool === "circle" ? "lavender" : "none",
            padding: "16px",
          }}
          onClick={() => {
            setTool("circle");
          }}
        >
          Circle
        </div>
        <div
          style={{
            background: tool === "line" ? "lavender" : "none",
            padding: "16px",
          }}
          onClick={() => {
            setTool("line");
          }}
        >
          Line
        </div>
      </div>
      <canvas
        style={{ cursor: isMouseDown ? "crosshair" : "default" }}
        ref={setCanvasRef}
        onMouseMove={(event) => {
          if (isMouseDown) {
            setWidth(event.clientX - x);
            setHeight(event.clientY - y);
          }
        }}
        onMouseDown={(event) => {
          setisMouseDown(true);

          setX(event.clientX);
          setY(event.clientY);
        }}
        onMouseUp={() => {
          if (tool === "rectangle") {
            whiteboard.add(new Rectangle(x, y, width, height));
          }

          if (tool === "circle") {
            whiteboard.add(new Circle(x, y, width, height));
          }

          if (tool === "line") {
            whiteboard.add(new Line(x, y, width, height));
          }

          setisMouseDown(false);

          setX(0);
          setY(0);
          setWidth(0);
          setHeight(0);
        }}
      />
    </>
  );
};
