import "./css/Sidebar.css";

export default function Sidebar({ setActiveTool }) {
  const tools = [
    { key: "breakingnews", label: "Currency Converter" },
    { key: "rainpredictor", label: "Rain Predictor" },
    { key: "newsfeed", label: "Breaking News" },
    // Add more tools here as needed
  ];

  return (
    <div className="sidebar">
      <h4 className="sidebar-title">Tools</h4>
      {tools.map((tool) => (
        <button
          key={tool.key}
          className="sidebar-button"
          onClick={() => setActiveTool(tool.key)}
        >
          {tool.label}
        </button>
      ))}
    </div>
  );
}
