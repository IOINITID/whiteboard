import { useCallback, useEffect, useState } from "react";
import { scene } from "../../modules/scene";
import { Rectangle } from "../../modules/rectangle";
import { Circle } from "../../modules/circle";
import { LayerType } from "../../modules/layer";
import { Line } from "../../modules/line";

export const Canvas = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [tool, setTool] = useState<LayerType>("rectangle");
  const [minX, setMinX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const [cursor, setCursor] = useState("default");

  const setCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
    setContext(canvas.getContext("2d"));

    scene.context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "backspace") {
        const layer = scene.getLayer(minX, minY);

        if (layer) {
          layer.remove();
        }
      }
    });
  }, [minX, minY]);

  useEffect(() => {
    if (isMouseDown && minX && minY && maxX && maxY) {
      if (tool === "rectangle") {
        scene.draw(new Rectangle(minX, minY, maxX, maxY));
      }

      if (tool === "circle") {
        scene.draw(new Circle(minX, minY, maxX, maxY));
      }

      if (tool === "line") {
        scene.draw(new Line(minX, minY, maxX, maxY));
      }
    }
  }, [minX, minY, maxX, maxY, isMouseDown, tool]);

  useEffect(() => {
    if (isMouseDown && tool !== "main") {
      setCursor("crosshair");
    } else {
      setCursor("default");

      setMinX(0);
      setMinY(0);
      setMaxX(0);
      setMaxY(0);

      if (tool === "rectangle") {
        scene.add(new Rectangle(minX, minY, maxX, maxY));
      }

      if (tool === "circle") {
        scene.add(new Circle(minX, minY, maxX, maxY));
      }

      if (tool === "line") {
        scene.add(new Line(minX, minY, maxX, maxY));
      }
    }
  }, [tool, isMouseDown]);

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
            background: tool === "main" ? "lavender" : "none",
            padding: "16px",
          }}
          onClick={() => {
            setTool("main");
          }}
        >
          Main
        </div>
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
        style={{ cursor }}
        ref={setCanvasRef}
        onMouseMove={(event) => {
          if (isMouseDown) {
            setMaxX(event.clientX);
            setMaxY(event.clientY);
          }

          const layer = scene.getLayer(event.clientX, event.clientY);

          if (layer) {
            setCursor("move");
          } else {
            setCursor("default");
          }

          if (layer && isMouseDown && layer.state === "active") {
            layer.move(event.movementX, event.movementY);
          }
        }}
        onMouseDown={(event) => {
          setIsMouseDown(true);

          setMinX(event.clientX);
          setMinY(event.clientY);

          const layer = scene.getLayer(event.clientX, event.clientY);

          scene.setState(layer);
        }}
        onMouseUp={(event) => {
          setIsMouseDown(false);

          setMaxX(event.clientX);
          setMaxY(event.clientY);
        }}
      />
    </>
  );
};
