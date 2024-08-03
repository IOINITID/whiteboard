import { useEffect, useState } from "react";
import { scene } from "../../modules/scene";
import { Rectangle } from "../../modules/rectangle";
import { Circle } from "../../modules/circle";
import { LayerType } from "../../modules/layer";
import { Line } from "../../modules/line";
import { Freedraw } from "../../modules/freedraw";
import { Tools } from "../tools";

export const Canvas = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [tool, setTool] = useState<LayerType>("rectangle");
  const [minX, setMinX] = useState(0);
  const [minY, setMinY] = useState(0);
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const [cursor, setCursor] = useState("default");

  useEffect(() => {
    scene.create();
  }, []);

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

      if (tool === "freedraw") {
        scene.draw(new Freedraw(minX, minY));
      }
    }
  }, [minX, minY, maxX, maxY, isMouseDown, tool]);

  useEffect(() => {
    if (isMouseDown && tool !== "cursor") {
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

      if (tool === "freedraw") {
        scene.add(new Freedraw(minX, minY));
      }
    }
  }, [tool, isMouseDown]);

  return (
    <>
      <Tools tool={tool} setTool={setTool} />
      <canvas
        style={{ cursor }}
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

          if (isMouseDown) {
            console.log(
              event.clientX + event.movementX,
              event.clientY + event.movementY
            );

            new Freedraw(
              event.clientX + event.movementX,
              event.clientY + event.movementY
            );
          }
        }}
        onMouseDown={(event) => {
          setIsMouseDown(true);

          setMinX(event.clientX);
          setMinY(event.clientY);

          // const layer = scene.getLayer(event.clientX, event.clientY);

          // scene.setState(layer);
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
