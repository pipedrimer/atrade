import { Link } from "react-router";
const Footer = () => {
  return (
    <div className=" footer py-5 ">
      <div className="container py-5">
        <div className="row g-5">
          {/* Newsletter Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item   flex-column">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="mb-3">
                Subscribe to our newsletter to stay updated with the latest
                news, offers, and insights. Get exclusive updates straight to
                your inbox!
              </p>
              <div className="position-relative mx-auto rounded-pill">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="btn btn-signup btn-primary rounded-pill position-absolute top-0 end-0 py-2 "
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Explore</h4>
              <Link to="/">
                <i className="fas fa-angle-right me-2"></i> Home
              </Link>
              <Link to="/">
                <i className="fas fa-angle-right me-2"></i> Services
              </Link>
              <Link to="/about">
                <i className="fas fa-angle-right me-2"></i> About Us
              </Link>
              <a href="services">
                <i className="fas fa-angle-right me-2"></i> Latest Projects
              </a>
              <Link to="/testimonial">
                <i className="fas fa-angle-right me-2"></i> Testimonial
              </Link>
              <Link to="/contact">
                <i className="fas fa-angle-right me-2"></i> Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <span>
                <i className="fa fa-map-marker-alt me-2"></i> 123 East 75th
                Street, New York
              </span>
              <span className="mt-2 mb-1">
                <i className="fas fa-envelope me-2"></i>support@atrade.it.com
              </span>
              <a href="tel:+18592005072">
                <i className="fas fa-phone me-2"></i> +1 (859) 200-5072
              </a>

              <a
                href="https://wa.me/18592005072"
                className="mb-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2"></i> +1 (859) 200-5072
              </a>
              <div className="d-flex align-items-center">
                <a className="btn btn-light btn-md-square me-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-light btn-md-square me-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-light btn-md-square me-2" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-light btn-md-square me-0" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div
              className="footer-item d-flex flex-wrap"
              style={{
                maxHeight: "100px",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              {[
                "./americanex.png",
                "./union.png",
                "./citibank.jpg",
                "./monzo.png",
                "./stripe.png",
                "./popular.png",
                "./bbnt.png",
                "./natwest.png",
                "./otp.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  style={{ width: "30%", padding: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
