import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-section bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* CONTACT INFO */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-item">
              <div className="pb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="display-4 mb-4">Get In Touch With Us</h1>
                <p className="mb-0">
                  Unsure of a plan? Want to know more? or discuss an investment plan, qualified
                  professionals are always available to answer your questions.
                  
                  .
                </p>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-4">
                  <i className="fa fa-home text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Address</h4>
                  <p className="mb-0">123 East 75th Street, New York, USA</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-2">
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Mobile</h4>
                  <p className="mb-0">+1 (859) 200-5072</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary btn-lg-square rounded-circle p-2">
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Email</h4>
                  <p className="mb-0">support@atrade.it.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-6" data-aos="fade-right">
            <form>
              <div className="row g-3">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="project"
                      placeholder="Project"
                    />
                    <label htmlFor="project">Your Project</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "160px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
