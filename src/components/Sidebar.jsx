import "./css/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Tools</h3>

      <nav className="sidebar-links">
        <a href="#tool-1">Breaking News</a>
        <a href="#tool-2">Currency Converter</a>
        <a href="#tool-3">Rain Predictor</a>
      </nav>
    </aside>
  );
}
