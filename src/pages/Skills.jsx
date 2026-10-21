
import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "🌐", level: 90, category: "Frontend" },
  { name: "CSS3", icon: "🎨", level: 85, category: "Frontend" },
  { name: "Bootstrap", icon: "🅱️", level: 85, category: "Frontend" },
  { name: "JavaScript", icon: "⚡", level: 80, category: "Frontend" },
  { name: "React.js", icon: "⚛️", level: 85, category: "Frontend" },
  { name: "Node.js", icon: "🟢", level: 75, category: "Backend" },
  { name: "Express.js", icon: "🚀", level: 75, category: "Backend" },
  { name: "MongoDB", icon: "🍃", level: 75, category: "Database" },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading text-center">
          <span className="skills-label">
            <span className="label-dot"></span>
            MY EXPERTISE
          </span>

          <h2>
            Technologies I <span>Work With</span>
          </h2>

          <p>
            The tools and technologies I use to build modern,
            responsive and user-friendly web applications.
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={skill.name}
            >
              <div
                className="skill-card"
                style={{ "--delay": `${index * 0.08}s` }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span className="skill-category">
                    {skill.category}
                  </span>
                </div>

                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percent">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="skill-progress"
                  role="progressbar"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="skill-progress-fill"
                    style={{ "--level": `${skill.level}%` }}
                  ></div>
                </div>

                <div className="skill-card-footer">
                  <span>Proficiency</span>
                  <span>
                    {skill.level >= 85
                      ? "Strong"
                      : skill.level >= 75
                      ? "Intermediate"
                      : "Learning"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-bottom text-center">
          <span className="skills-bottom-icon">✦</span>
          Always learning. Always building. Always improving.
        </div>
      </div>
    </section>
  );
}

export default Skills;
