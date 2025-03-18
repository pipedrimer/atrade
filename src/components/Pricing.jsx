import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link} from "react-router" // Ensure Bootstrap is included

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "STANDARD PLAN",
      monthly: "10,000 - $49,999",
      annual: "10,000 - $49,999",
      content: [
        "15% return on initial investment every two weeks",
        "Access to basic investment insights",
        "Standard customer support",
        "Monthly performance reports",
        "Basic risk management tools",
        "Access to community discussions",
      ],
    },
    {
      name: "PREMIUM PLAN",
      monthly: "50,000 - $499,999",
      annual: "50,000 - $499,999",
      content: [
        "20% ROI every two weeks",
        "Personalized investment portfolio management",
        "Priority customer support",
        "Weekly performance reports",
        "Advanced risk management tools",
        "One-on-one financial advisory sessions",
        "Access to exclusive market insights",
      ],
    },
    {
      name: "SUPER PLAN",
      monthly: "500,000 - $1,000,000",
      annual: "500,000 - $1,000,000",
      content: [
        "25% ROI every two weeks",
        "Dedicated account manager",
        "24/7 VIP customer support",
        "Daily performance analytics",
        "Customized risk assessment and management",
        "Exclusive invites to investor networking events",
        "Premium financial advisory services",
        "Early access to high-yield investment opportunities",
      ],
    },
  ];

  return (
    <div className="container my-5 py-5">
      {/* HEADER */}
      <div className="text-center py-5 bg-info text-white fw-bold rounded">
        <h3 className="fw-bold">PRICING PLANS</h3>

        {/* TOGGLE BUTTON */}
        <div className="btn-group mt-3">
          <button
            className={`btn ${!isAnnual ? "btn-dark" : "btn-outline-light"}`}
            onClick={() => setIsAnnual(false)}
            onMouseDown={(e) => e.preventDefault()}
          >
            3 Months Plan
          </button>
          <button
            className={`btn ${isAnnual ? "btn-dark" : "btn-outline-light"}`}
            onClick={() => setIsAnnual(true)}
            onMouseDown={(e) => e.preventDefault()}
          >
            Annual Plan
          </button>
        </div>
      </div>

      {/* PRICING CARDS */}
      <div className="row justify-content-center mt-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 d-flex">
            <div className="card text-center border-0 shadow-lg d-flex flex-column h-100">
              {/* Card Header */}
              <div className="card-header text-white py-4 bg-info">
                <h4 className="fw-bold text-white">{plan.name}</h4>
                <h5 className="fw-bold text-success bg-white px-3 py-2 rounded shadow-lg d-inline-block">
                  ${isAnnual ? plan.annual : plan.monthly}
                </h5>
              </div>

              {/* Card Body */}
              <div className="card-body flex-grow-1 d-flex flex-column">
                <ul className="list-unstyled lh-lg p-3 text-start mx-auto">
                  {plan.content.map((item, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start">
                      <span className="me-2">✅</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pb-4">
                  <Link to="/signup">
                  <button className="btn btn-info text-white fw-bold px-4 py-2">
                    Choose Plan
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
