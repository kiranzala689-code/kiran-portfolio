
import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Redtape E-commerce",
    type: "FULL STACK DEVELOPMENT",
    description:
      "A full-stack fashion e-commerce platform featuring product browsing, authentication, cart, orders and payment integration.",
    image: "/images/redtape-home.png",
    imageAlt: "Redtape e-commerce homepage screenshot",
    className: "redtape",
    status: "Full Stack",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://redtape-project-node-iota.vercel.app/",
    code: "",
  },
  {
    name: "WROGN Clone",
    type: "FRONTEND DEVELOPMENT",
    description:
      "A responsive fashion shopping website inspired by WROGN, with product listings, modern layouts and API integration.",
    image: "/images/wrogn-home.png",
    imageAlt: "WROGN clone homepage screenshot",
    className: "wrogn",
    status: "Live Project",
    tech: ["React.js", "Redux", "CSS", "API"],
    live: "https://wrogn-clone-react.vercel.app/",
    code: "",
  },
  {
    name: "Payment Gateway",
    type: "PAYMENT INTEGRATION",
    description:
      "A payment integration project built with React and Node.js, exploring secure checkout and Razorpay payment workflows.",
    image: "",
    imageAlt: "Payment gateway project preview",
    className: "payment",
    status: "Integration",
    tech: ["React.js", "Node.js", "Razorpay"],
    live: "",
    code: "",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-heading text-center">
          <span className="projects-eyebrow">
            <span className="projects-dot"></span>
            MY PORTFOLIO
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects where I turn ideas into
            responsive, functional and user-friendly experiences.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={project.name}
            >
              <article
                className="project-card"
                style={{ "--card-delay": `${index * 0.1}s` }}
              >
                <div className={`project-preview ${project.className}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-screenshot"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span className="placeholder-symbol">↗</span>
                      <span>{project.name}</span>
                      <small>Project Preview</small>
                    </div>
                  )}

                  <span className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </span>

                  <a
                    className="preview-open"
                    href={project.live || "#projects"}
                    target={project.live ? "_blank" : undefined}
                    rel={project.live ? "noreferrer" : undefined}
                    aria-label={`Open ${project.name}`}
                    onClick={!project.live ? (e) => e.preventDefault() : undefined}
                  >
                    ↗
                  </a>
                </div>

                <div className="project-content">
                  <span className="project-type">{project.type}</span>

                  <h3>{project.name}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="project-live-btn"
                      >
                        Live Demo <span>↗</span>
                      </a>
                    ) : (
                      <span className="project-unavailable">
                        Demo link pending
                      </span>
                    )}

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="project-code-btn"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <span>✦</span> Built with curiosity, code and creativity.
        </div>
      </div>
    </section>
  );
}

export default Projects;
