import { useEffect, useState } from "react";
import { Canvas } from "../canvas";
import { Tools } from "../tools";
import { scene } from "../../modules/scene";
import { LayerType } from "../../modules/layer";

export const App = () => {
  const [tool, setTool] = useState<LayerType>("rectangle");

  useEffect(() => {
    scene.create();
  }, []);

  useEffect(() => {
    scene.setTool = setTool;
  }, []);

  useEffect(() => {
    scene.tool = tool;
  }, [tool]);

  return (
    <>
      <Tools tool={tool} setTool={setTool} />
      <Canvas />
    </>
  );
};
