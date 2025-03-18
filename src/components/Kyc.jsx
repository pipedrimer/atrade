import { Link } from "react-router";

const KycVerification = () => {


  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-5 row">
                <div className="col-lg-8 offset-lg-2">
                  {/* KYC Message */}
                  <div className="p-3 text-center">
                    <h2 className="">KYC Verification</h2>
                    <p>
                      To comply with regulation, each participant will have to
                      go through identity verification (KYC/AML) to prevent
                      fraud causes.
                    </p>
                  </div>

                  {/* KYC Action Card */}
                  <div className="p-2 text-center shadow-lg p-md-5">
                    <i className="p-4 mb-3 fas fa-copy fa-4x bg-light rounded-pill"></i>
                    <p>
                      You have not submitted your necessary documents to verify
                      your identity. In order to enjoy our investment system,
                      please verify your identity.
                    </p>
                    <Link
                      to="/app/kycform"
                      className="mt-2 btn bnpm btn-primary btn-sm"
                    >
                      Click here to complete your KYC
                    </Link>
                  </div>

                  {/* Support Section */}
                  <div className="p-2 mt-5 shadow-lg d-md-flex justify-content-between">
                    <div className="p-2">
                      <i className="p-4 fas fa-envelope-open-text fa-4x bg-light rounded-pill"></i>
                    </div>
                    <div className="p-2">
                      <h4>We’re here to help you!</h4>
                      <p>
                        Ask a question, manage request, report an issue. Our
                        support team will get back to you by email.
                      </p>
                    </div>
                    <div className="p-md-4">
                      <a
                        href=""
                        className="px-3 btn btn-outline-primary btn-sm"
                      >
                        Get Support Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycVerification;
