const projects = [
  {
    title: "ESG Reporting Platform",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Workday VIBE Model",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Retail Product Platform",
    image: "https://via.placeholder.com/400",
  },
];

export function Work() {
  return (
    <section className="work">
      <h1>Selected Work</h1>

      <div className="projects">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
