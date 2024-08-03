import { LayerType } from "../../modules/layer";

export const Tools = ({
  tool,
  setTool,
}: {
  tool: LayerType;
  setTool: (tool: LayerType) => void;
}) => {
  const config: { id: number; title: string; value: LayerType }[] = [
    {
      id: 1,
      title: "Курсор",
      value: "cursor",
    },
    {
      id: 2,
      title: "Прямоугольник",
      value: "rectangle",
    },
    {
      id: 3,
      title: "Круг",
      value: "circle",
    },
    {
      id: 4,
      title: "Линия",
      value: "line",
    },
    {
      id: 5,
      title: "Карандаш",
      value: "freedraw",
    },
  ];

  return (
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
      {config.map((value) => {
        return (
          <div
            style={{
              background: tool === value.value ? "lavender" : "none",
              padding: "16px",
            }}
            key={value.id}
            onClick={() => {
              setTool(value.value);
            }}
          >
            {value.title}
          </div>
        );
      })}
    </div>
  );
};
