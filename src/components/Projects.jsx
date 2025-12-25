import "./Projects.css";

const projects = [
  {
    title: "AWS Serverless API",
    description: "Lambda, API Gateway, DynamoDB, IAM",
    link: "#",
  },
  {
    title: "Flask Z/OS API Wrapper",
    description: "Secure API for managing JCL jobs",
    link: "#",
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
            <a href={p.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
