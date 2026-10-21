import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Message sent successfully!");

    e.target.reset();
  };

  return (
    <section className="contact py-5">
      <div className="container py-5">

        <div className="text-center mb-5">

          <p className="text-primary fw-bold">
            GET IN TOUCH
          </p>

          <h1 className="text-white fw-bold">
            Contact Me
          </h1>

          <p className="contact-subtitle">
            Have a project or opportunity? Let's talk.
          </p>

        </div>


        <div className="row g-5">

          <div className="col-lg-5">

            <div className="contact-info">

              <div className="contact-item">

                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <h5>Email</h5>

                  <a href="mailto:kiranzala689@gmail.com">
                    kiranzala689@gmail.com
                  </a>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <h5>Phone</h5>

                  <a href="tel:+919876543210">
                    +91 9328970369
                  </a>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  ⌖
                </div>

                <div>
                  <h5>Location</h5>

                  <p>
                    Ahmedabad, Gujarat
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="col-lg-7">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="row">

                <div className="col-md-6 mb-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />

                </div>

              </div>


              <div className="mb-3">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
                />

              </div>


              <div className="mb-3">

                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4"
              >
                Send Message ↗
              </button>


              {message && (
                <p className="success-message mt-3">
                  {message}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;