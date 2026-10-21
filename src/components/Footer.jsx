
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              KIRANSINH<span>ZALA</span>
            </a>
            <h5 className="text-secondary text-start">
              Building modern web experiences with creativity
              and clean code.
            </h5>
          </div>

          <div className="footer-navigation">
            <span className="footer-heading">QUICK LINKS</span>
            <div className="footer-links fs-bold">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-connect">
            <span className="footer-heading">LET'S CONNECT</span>
            <p>Have a project or opportunity in mind?</p>
            <a
              href="mailto:kiranzala689@gmail.com"
              className="footer-email"
            >
              Let's talk <span>↗</span>
            </a>

            <div className="footer-social">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="mailto:kiranzala689@gmail.com"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kiransinh Zala. All rights reserved.</p>

          <a href="#home" className="footer-back-top">
            Back to top <span>↑</span>
          </a>

          <p className="footer-made">
            Designed with <span>♥</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
