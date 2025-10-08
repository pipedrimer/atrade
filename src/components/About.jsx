import "bootstrap/dist/css/bootstrap.min.css"; 
import "../../lib/animate/animate.css";
import CountUp from "react-countup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TradingView from "../services/Tradingview";
import { Link } from "react-router";

  

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


  return (
    <>
    <TradingView/>
    <div className="container-fluid about bg-light py-2">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6 col-xl-4"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <div className="about-img">
              
              <img
                src="/flip1.jpg"
                className="img-fluid  rounded-bottom "
                alt="About"
              />
               <img
                src="/flip2.jpg"
                className="img-fluid py-3 rounded-bottom "
                alt="About"
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-xl-7"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            <h4 className="text-primary">About Us</h4>
            <h1 className="display-5 mb-4">
            The Worlds Leading Partner in Profitable Investments.
            </h1>
            <p className="text ps-4 mb-4">
              At <span>FlipStack</span>, we are dedicated to being the most profitable and
              innovative financial investment company worldwide. Our focus is on
              empowering clients to achieve their financial goals through
              exceptional strategy, insight, and partnerships.
            </p>
            <div className="row g-4 justify-content-between mb-5">
              <div className="col-lg-6 col-xl-5">
                <p className="text-dark">
                  <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                  Visionary Growth
                </p>
                <p className="text-dark mb-0">
                  <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                  Precision Execution
                </p>
              </div>
              <div className="col-lg-6 col-xl-7">
                <p className="text-dark">
                  <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                  Enduring Alliances
                </p>
                <p className="text-dark mb-0">
                  <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                  Secure Foundations
                </p>
              </div>
            </div>
            <div className="row g-4 justify-content-between mb-5">
              <div className="col-xl-5">
                <Link to="/signup" className="btn btn-primary rounded-pill py-3 px-5">
                  Discover More
                </Link>
              </div>
              <div className="col-xl-7 mb-5">
                <div className="about-customer d-flex position-relative">
                  <img
                    src="/customer-img-1.jpg"
                    className="img-fluid btn-xl-square position-absolute"
                    style={{ left: "0", top: "0" }}
                    alt="Customer"
                  />
                  <img
                    src="/customer-img-2.jpg"
                    className="img-fluid btn-xl-square position-absolute"
                    style={{ left: "45px", top: "0" }}
                    alt="Customer"
                  />
                  <img
                    src="/customer-img-3.jpg"
                    className="img-fluid btn-xl-square position-absolute"
                    style={{ left: "90px", top: "0" }}
                    alt="Customer"
                  />
                  <img
                    src="/customer-img-1.jpg"
                    className="img-fluid btn-xl-square position-absolute"
                    style={{ left: "135px", top: "0" }}
                    alt="Customer"
                  />
                  <div
                    className="position-absolute text-dark"
                    style={{ left: "220px", top: "10px" }}
                  >
                    <p className="mb-0">1m+ Trusted</p>
                    <p className="mb-0">Global Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center">
              <div className="col-sm-4">
                <div className="bg-primary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fs-1 fw-bold text-white">
                      <CountUp start={0} end={32} duration={3} />
                    </span>
                    <h4
                      className="text-white fs-1 mb-0"
                      style={{ fontWeight: 600, fontSize: "25px" }}
                    >
                      k+
                    </h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-white mb-0">Project Complete</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-primary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span
                      className="counter-value fs-1 fw-bold text-white"
                      data-toggle="counter-up"
                    >
                      <CountUp start={0} end={21} duration={3} />
                    </span>
                    <h4
                      className="text-white fs-1 mb-0"
                      style={{ fontWeight: 600, fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="mb-0 text-white">Years Of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="bg-primary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value fs-1 fw-bold text-white">
                      <CountUp start={0} end={100} duration={5} />
                    </span>
                    <h4
                      className="text-white fs-1 mb-0"
                      style={{ fontWeight: 600, fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-white mb-0">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
