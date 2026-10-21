
import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import "./Home.css";

function Home() {
  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <>
      <section className="home" id="home">
        <div className="home-glow home-glow-one"></div>
        <div className="home-glow home-glow-two"></div>

        <div className="container">
          <div className="row align-items-center home-row">
            <div className="col-lg-7 home-content">
              <div className="home-availability">
                <span className="home-status-dot"></span>
                MERN STACK DEVELOPER
              </div>

              <p className="home-intro">HELLO, I'M</p>

              <h1 className="home-title">
                ZALA
                <span>KIRANSINH</span>
              </h1>

              <h2 className="home-subtitle">
                Building digital experiences
                <span className="home-title-accent"> that matter.</span>
              </h2>

              <p className="home-description">
                I develop modern, responsive and scalable web
                applications using the MERN stack. I enjoy turning
                ideas into real-world digital products with clean
                code and thoughtful design.
              </p>

              <div className="home-tech-list">
                {technologies.map((tech) => (
                  <span className="home-tech-badge" key={tech}>
                    <span>✦</span> {tech}
                  </span>
                ))}
              </div>

              <div className="home-actions">
                <Link to="/contact" className="home-btn-primary">
                  Let's Work Together <span>↗</span>
                </Link>

                <a href="#projects" className="home-btn-secondary">
                  Explore Projects <span>↓</span>
                </a>
              </div>

              <div className="home-socials">
                <span className="home-social-label">CONNECT WITH ME</span>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="home-social-link"
                >
                  GitHub ↗
                </a>

                <span className="home-social-divider"></span>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="home-social-link"
                >
                  LinkedIn ↗
                </a>

                <span className="home-social-divider"></span>

                <a
                  href="mailto:kiranzala689@gmail.com"
                  className="home-social-link"
                >
                  Email ↗
                </a>
              </div>
            </div>

            <div className="col-lg-5 home-visual-column">
              <div className="home-visual">
                <div className="home-image-orbit home-image-orbit-one"></div>
                <div className="home-image-orbit home-image-orbit-two"></div>

                <div className="home-image-card">
                  <div className="home-image-top">
                    <span className="home-window-dots">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span className="home-image-label">
                      DEVELOPER PROFILE
                    </span>
                  </div>

                  <div className="home-image-frame">
                    <img src="/kiran.webp" alt="Kiran - MERN Stack Developer" />
                  </div>

                  <div className="home-image-caption">
                    <div>
                      <span className="home-caption-small">
                        THE PERSON BEHIND THE CODE
                      </span>
                      <h3>Kiran Zala</h3>
                      <p>Full Stack Web Developer</p>
                    </div>

                    <div className="home-image-arrow">↗</div>
                  </div>
                </div>

                <div className="home-floating-card home-floating-top">
                  <span className="home-floating-icon">{"</>"}</span>
                  <div>
                    <strong>Clean Code</strong>
                    <small>Built with purpose</small>
                  </div>
                </div>

                <div className="home-floating-card home-floating-bottom">
                  <span className="home-floating-icon">✦</span>
                  <div>
                    <strong>Always Learning</strong>
                    <small>Always improving</small>
                  </div>
                </div>

                <div className="home-orbit-symbol">✳</div>
              </div>
            </div>
          </div>

          <a href="#about" className="home-scroll">
            <span className="home-scroll-line"></span>
            SCROLL TO EXPLORE
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default Home;
