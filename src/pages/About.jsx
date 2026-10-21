
import React from "react";
import "./About.css";

function About() {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-header">
          <span className="about-label">ABOUT ME</span>
          <h2>
            Get to know <span>me</span>
          </h2>
          <p>
            Passionate about building digital experiences with
            clean code and modern technologies.
          </p>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="about-photo-wrap">
              <div className="about-photo-frame">
                <div className="about-photo-placeholder rounded">
                  <img src="/kiran.webp" className="rounded" height={500} alt="Kiran" />
                </div>
              </div>

              <div className="about-photo-caption">
                <span className="about-caption-line"></span>
                <div>
                  <strong>Kiran</strong>
                  <p>MERN Stack Developer</p>
                </div>
              </div>

              <span className="about-decor about-decor-one"></span>
              <span className="about-decor about-decor-two"></span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-details">
              <span className="about-greeting">
                HELLO THERE <span>👋</span>
              </span>

              <h3>
                I'm Kiran, a developer who loves turning ideas
                into <span>reality.</span>
              </h3>

              <p>
                I'm a MERN Stack Developer from Gujarat, India,
                passionate about creating responsive websites
                and practical web applications.
              </p>

              <p>
                I work with React.js, Node.js, Express.js and
                MongoDB to develop full-stack applications. My
                project experience includes REST APIs,
                authentication, CRUD operations, e-commerce
                features and payment gateway integration.
              </p>

              <div className="about-skills-heading">
                <h4>Technologies I work with</h4>
                <span></span>
              </div>

              <div className="about-skills">
                {skills.map((skill) => (
                  <span key={skill} className="about-skill">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="about-highlights">
                <div className="about-highlight">
                  <span className="about-highlight-number">04+</span>
                  <span className="about-highlight-text">
                    Projects built
                  </span>
                </div>

                <div className="about-highlight-divider"></div>

                <div className="about-highlight">
                  <span className="about-highlight-number">MERN</span>
                  <span className="about-highlight-text">
                    Development stack
                  </span>
                </div>

                <div className="about-highlight-divider"></div>

                <div className="about-highlight">
                  <span className="about-highlight-number">100%</span>
                  <span className="about-highlight-text">
                    Learning mindset
                  </span>
                </div>
              </div>

              <a href="#projects" className="about-button">
                Explore My Work <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
