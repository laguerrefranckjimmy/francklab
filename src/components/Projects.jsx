import "./css/Projects.css";

const projects = [
  {
    title: "Rain Predictor",
    description: "Machine Learning, AWS EC2, Github Actions",
    Github_link: "https://github.com/laguerrefranckjimmy/rain-predictor",
    demo: "#"
  },
  {
    title: "E-commerce Simulation",
    description: "Kafka, Ci/Cd, AWS, Spring Boot, Vertx",
    Github_link: "https://github.com/laguerrefranckjimmy/on-premise",
    demo: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.Github_link}>View Project in Github →</a>
            <a href={p.demo}>View Project Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}
