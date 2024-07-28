import { useCallback, useEffect, useState } from "react";
import { whiteboard } from "../../modules/whiteboard";
import { Rectangle } from "../../modules/rectangle";

export const Canvas = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isMouseDown, setisMouseDown] = useState(false);
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
      whiteboard.draw(new Rectangle(x, y, width, height));
    }
  }, [x, y, width, height, isMouseDown]);

  return (
    <canvas
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
        whiteboard.add(new Rectangle(x, y, width, height));

        setisMouseDown(false);

        setX(0);
        setY(0);
        setWidth(0);
        setHeight(0);
      }}
    />
  );
};
