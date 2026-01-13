import "./css/Projects.css";

const projects = [
  {
    title: "Rain Predictor",
    description: "Machine Learning, AWS EC2, Github Actions",
    Github_link: "https://github.com/laguerrefranckjimmy/rain-predictor"
  },
  {
    title: "E-commerce Simulation",
    description: "Kafka, Ci/Cd, AWS, Spring Boot, Vertx",
    Github_link: "https://github.com/laguerrefranckjimmy/on-premise"
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
            <a href={p.Github_link} target="_blank" rel="noopener noreferrer">View Project in Github</a>
          </div>
        ))}
      </div>
    </section>
  );
}
