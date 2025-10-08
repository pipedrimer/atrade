import { useState } from 'react';




const FAQ = () => {
  const [open, setOpen] = useState("collapseOne"); // Controls which item is open

  const toggleCollapse = (id) => {
    setOpen(open === id ? "" : id); // Toggle the collapse based on the id
  };

  const getIconClass = (id) => {
    return open === id ? "rotate-180" : "";
  };

  return (
    <div className="container-fluid faq py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="pb-5">
              <h4 className="text-primary">FAQs</h4>
              <h1 className="display-4">Get the Answers to Common Questions</h1>
            </div>
            <div className="accordion bg-light rounded p-4" id="accordionExample">
              {/* First Accordion Item */}
              <div className="accordion-item border-0 mb-4">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className={`accordion-button text-dark fs-5 fw-bold rounded-top ${open === "collapseOne" ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleCollapse("collapseOne")}
                    aria-expanded={open === "collapseOne" ? "true" : "false"}
                    aria-controls="collapseOne"
                  >
                    Are Payouts Taxable?
                    <i className={`fas  ms-2 ${getIconClass("collapseOne")}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse ${open === "collapseOne" ? "show" : ""}`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body my-2">
                    <h5>FlipStack traders are responsible for their taxation liabilities, if any, at their place of residence.</h5>
                  </div>
                </div>
              </div>
              {/* Second Accordion Item */}
              <div className="accordion-item border-0 mb-4">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className={`accordion-button text-dark fs-5 fw-bold rounded-top ${open === "collapseTwo" ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleCollapse("collapseTwo")}
                    aria-expanded={open === "collapseTwo" ? "true" : "false"}
                    aria-controls="collapseTwo"
                  >
                    What industries do you specialize in when investing clients funds?
                    <i className={`fas  ms-2 ${getIconClass("collapseTwo")}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${open === "collapseTwo" ? "show" : ""}`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body my-2">
                    <h5>We have a diversified approach to Investments </h5>
                    <p>We invest across technology, healthcare, financial services, consumer goods, energy, industrials, real estate, telecom, materials, and emerging sectors.Our diversified approach balances growth and risk, tailored to each client’s goals.</p>
                  </div>
                </div>
              </div>
              {/* Third Accordion Item */}
              <div className="accordion-item border-0 mb-4">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className={`accordion-button text-dark fs-5 fw-bold rounded-top ${open === "collapseThree" ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleCollapse("collapseThree")}
                    aria-expanded={open === "collapseThree" ? "true" : "false"}
                    aria-controls="collapseThree"
                  >
                    Can you guarantee for profit?
                    <i className={`fas  ms-2 ${getIconClass("collapseThree")}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse ${open === "collapseThree" ? "show" : ""}`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body my-2">
                    <h5>Yes, we guarantee profits</h5>
                    <p>Our investment plans are designed to provide stable and consistent returns, ensuring that you earn a fixed percentage on your investment. With our strategic risk management, expert portfolio diversification, and carefully structured investment approach, we can confidently offer a guaranteed return on investment.

</p>
                  </div>
                </div>
              </div>
              {/* Fourth Accordion Item */}
              <div className="accordion-item border-0 mb-0">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className={`accordion-button  text-dark fs-5 fw-bold rounded-top ${open === "collapseFour" ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleCollapse("collapseFour")}
                    aria-expanded={open === "collapseFour" ? "true" : "false"}
                    aria-controls="collapseFour"
                  >
                    Can i cancel Investment at any time?
                    <i className={`fas  ms-2 ${getIconClass("collapseFour")}`}></i>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse ${open === "collapseFour" ? "show" : ""}`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body my-2">
                    <h5>Yes, you can typically cancel or withdraw your investment</h5>
                    <p>Terms depend on the specific product or agreement. Some investments may have lock-up periods, fees, or penalties for early withdrawal. We recommend reviewing your contract or consulting with our support team to understand the terms and implications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-img RotateMoveRight rounded">
              <img src="/faq-img.jpg" className="img-fluid rounded w-100" alt="Image" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
