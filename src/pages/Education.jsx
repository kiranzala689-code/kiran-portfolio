
import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-primary fw-bold">MY EDUCATION</p>
          <h1 className="text-white fw-bold">
            Education Background
          </h1>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div>
                <h3>Master of Computer Application</h3>
                <p>HNGU Patan University</p>
                <span>2025 - 2026</span>
                <p className="mt-3">
                  Currently pursuing MCA with focus on
                  full-stack web development.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div>
                <h3>Bachelor of Computer Application</h3>
                <p>L.J. Gandhi BCA College</p>
                <span>2022 - 2025</span>
                <p className="mt-3">
                  Completed BCA with CGPA 7.36 and Grade B.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="education-card">
              <div className="education-icon">🏫</div>
              <div>
                <h3>Higher Secondary Certificate (HSC)</h3>
                <p>12th Standard</p>
                <span>2022</span>
                <p className="mt-3">
                  Achieved 78% in 12th board examinations.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="education-card">
              <div className="education-icon">📚</div>
              <div>
                <h3>Secondary School Certificate (SSC)</h3>
                <p>10th Standard</p>
                <span>2020</span>
                <p className="mt-3">
                  Achieved 61% in 10th board examinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-4">
          <p className="text-primary fw-bold">CERTIFICATES</p>
          <h2 className="text-white">My Certifications</h2>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="certificate-card">
              <div className="certificate-icon">📜</div>
              <h5>Full Stack Development</h5>
              <p>Full Stack Web Development</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="certificate-card">
              <div className="certificate-icon">📜</div>
              <h5>React.js</h5>
              <p>React.js Development</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="certificate-card">
              <div className="certificate-icon">📜</div>
              <h5>JavaScript</h5>
              <p>JavaScript Programming</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="certificate-card">
              <div className="certificate-icon">📜</div>
              <h5>C & C++</h5>
              <p>Programming Fundamentals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
