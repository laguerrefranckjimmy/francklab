import "./css/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="logo-container">
        <img src={logo} alt="Franck Logo" className="logo" />
      </div>

      {/* RIGHT: Navigation Links */}
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
