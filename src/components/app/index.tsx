import { useState } from "react";
import { Canvas } from "../canvas";
import { LayerType } from "../../modules/layer";
import { Tools } from "../tools";

export const App = () => {
  const [tool, setTool] = useState<LayerType>("rectangle");

  return (
    <>
      <Tools tool={tool} setTool={setTool} />
      <Canvas tool={tool} />
    </>
  );
};
