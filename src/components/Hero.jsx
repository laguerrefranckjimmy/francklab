import "./css/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Name */}
      <h1 className="hero-name">Franck Laguerre</h1>

      {/* Title */}
      <h2 className="hero-title">Software Engineer</h2>

      {/* Description */}
      <p className="hero-description">
        Hi, I’m Franck — a Software Engineer specializing in backend development,
        cloud architecture (AWS), and applied machine learning. I build secure,
        scalable, production-ready systems and enjoy turning ideas into real-world
        applications.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <a href="#projects" className="btn">View My Work</a>
       <a href="/Franck_Laguerre_Resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
          View My Resume
      </a>
      </div>
    </section>
  );
}
