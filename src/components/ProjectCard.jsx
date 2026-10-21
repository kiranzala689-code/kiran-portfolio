import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-thumb ${project.type.toLowerCase()}`}>
        <div className="browser-bar"><b></b><b></b><b></b></div>
        <div className="mock-content">
          <strong>{project.type === "ECOMMERCE" ? "REDTAPE" : project.type}</strong>
          <span>Modern web application</span>
        </div>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          <a href="#demo">↗ Live Demo</a>
          <a href="#github">◉ GitHub</a>
        </div>
      </div>
    </article>
  );
}