import "./css/Sidebar.css";

export default function Sidebar({ setActiveTool }) {
  return (
    <aside className="sidebar">
      <h4 className="sidebar-title">My Tools</h4>

      <button
        className="sidebar-button"
        onClick={() => setActiveTool("currency")}
      >
        Currency Converter
      </button>

      <button
        className="sidebar-button"
        onClick={() => setActiveTool("news")}
      >
        Breaking News
      </button>
    </aside>
  );
}
