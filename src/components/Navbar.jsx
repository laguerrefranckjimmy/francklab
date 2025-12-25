import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">Franck</h3>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
