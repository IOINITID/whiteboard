import { useCallback, useState } from "react";

export const Canvas = () => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const setCanvasRef = useCallback((canvas: HTMLCanvasElement) => {
    setContext(canvas.getContext("2d"));

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={setCanvasRef} />;
};
