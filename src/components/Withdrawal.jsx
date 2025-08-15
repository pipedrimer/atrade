
// import "../withdrawal.css"; // Import your custom CSS

// const WithdrawalOptions = () => {
//   return (
//     <div className="container-fluid ">
//       {/* Header Section */}
//       <header className="withdrawal-header text-center mb-5">
//         <h1 className="h2 m-0">Withdraw from your account.</h1>
//         <p className="lead m-0">
//           Place a withdrawal request using any of the payment methods below.
//         </p>
//       </header>

//       {/* Payment Method Cards */}
//       <section className="withdrawal-methods">
//         <div className="row no-gutters justify-content-center">
//           {/* USDT Card */}
//           <div className="col-sm-10 col-md-6 col-lg-6 mb-4 d-flex">
//             <div className="card card-method shadow-sm border-0 py-4 px-3 flex-fill">
//               <div className="card-body d-flex flex-column">
//                 <h2 className="card-title text-center text-uppercase text-info mb-3">
//                   USDT
//                 </h2>
//                 <h3 className="card-text text-center display-8">
//                   $1,000,000{" "}
//                   <span className="fs-5 fw-light text-muted">Max</span>
//                 </h3>
//                 <hr />
//                 <ul className="list-unstyled method-details mb-4">
//                   <li className="mb-2">
//                     <i className="fas fa-check text-info me-2"></i>
//                     Minimum amount: $1000
//                   </li>
//                   <li className="mb-2">
//                     <i className="fas fa-check text-info me-2"></i>
//                     Charge Type: percentage
//                   </li>
//                   <li className="mb-2">
//                     <i className="fas fa-check text-info me-2"></i>
//                     Charges: 1%
//                   </li>
//                   <li className="mb-2">
//                     <i className="fas fa-check text-info me-2"></i>
//                     Duration: Instant Payment
//                   </li>
//                 </ul>
//                 <div className="mt-auto">
//                   <form
                  
//                     method="POST"
//                   >
//                     <input
//                       type="hidden"
//                       name="_token"
//                       value="your_token_here"
//                     />
//                     <input type="hidden" name="method" value="USDT" />
//                     <button type="submit" className="btn btn-info btn-block">
//                       Select this method
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bitcoin Card */}
//           <div className="col-sm-10 col-md-6 col-lg-6 mb-4 d-flex">
//             <div className="card card-method shadow-sm border-0 py-4 px-3 flex-fill">
//               <div className="card-body d-flex flex-column">
//                 <h2 className="card-title text-center text-uppercase text-warning mb-3">
//                   Bitcoin
//                 </h2>
//                 <h3 className="card-text text-center display-8">
//                   $10,000,000{" "}
//                   <span className="fs-5 fw-light text-muted">Max</span>
//                 </h3>
//                 <hr />
//                 <ul className="list-unstyled method-details mb-4">
//                   <li className="mb-2">
//                     <i className="fas fa-check text-warning me-2"></i>
//                     Minimum amount: $1000
//                   </li>
//                   <li className="mb-2">
//                     <i className="fas fa-check text-warning me-2"></i>
//                     Charge Type: percentage
//                   </li>
//                   <li className="mb-2">
//                     <i className="fas fa-check text-warning me-2"></i>
//                     Charges: 1%
//                   </li>
//                   <li className="mb-2">
//                     <i className="fas fa-check text-warning me-2"></i>
//                     Duration: Instant
//                   </li>
//                 </ul>
//                 <div className="mt-auto">
//                   <form
                  
//                     method="POST"
//                   >
//                     <input
//                       type="hidden"
//                       name="_token"
//                       value="your_token_here"
//                     />
//                     <input type="hidden" name="method" value="Bitcoin" />
//                     <button type="submit" className="btn btn-warning btn-block">
//                       Select this method
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Additional Payment Method Cards can be added here */}
//         </div>
//       </section>

//       {/* Modal for Withdrawal Disabled */}
//       <div
//         id="withdrawDisabledModal"
//         className="modal fade"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="withdrawDisabledModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3 className="modal-title" id="withdrawDisabledModalLabel">
//                 Withdrawal is Disabled
//               </h3>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default WithdrawalOptions;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBalance from "../services/useBalance"; // Import the useBalance hook
import "../withdrawal.css"; // Import your custom CSS
import Spinner from "./Spinner";
import { useDeposit } from "../contexts/useDeposit";

const WithdrawalOptions = () => {
  const navigate = useNavigate();
  const { balance, loading, error } = useBalance();
  const minWithdrawal = 1000; // Set your minimum withdrawal amount

  const { setSelectedPayment } = useDeposit(); // Destructure setSelectedPayment from context

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSelectMethod = (method) => {
    if (balance < minWithdrawal) {
      toast.error("Your balance is too low for a withdrawal.");
      return;
    }

    // Set the selected payment method in the context
    setSelectedPayment(method);

    // Navigate to the withdrawal page
    navigate("/app/withdraw-funds");
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="container-fluid">
      {/* Header Section */}
      <header className="withdrawal-header text-center mb-5">
        <h1 className="h2 mt-1">Withdraw from your account.</h1>
        <p className="lead m-0">
          Place a withdrawal request using any of the payment methods below.
        </p>
      </header>

      {/* Payment Method Cards */}
      <section className="withdrawal-methods">
        <div className="row no-gutters justify-content-center">
          {/* USDT Card */}
          <div className="col-sm-10 col-md-6 col-lg-6 mb-4 d-flex px-2">
            <div className="card card-method shadow-sm border-0 py-4 px-3 flex-fill">
              <div className="card-body d-flex flex-column">
                <h2 className="card-title text-center text-uppercase text-info mb-3">
                  USDT
                </h2>
                <h3 className="card-text text-center display-8">
                  $1,000,000{" "}
                  <span className="fs-5 fw-light text-muted">Max</span>
                </h3>
                <hr />
                <ul className="list-unstyled method-details mb-4">
                  <li className="mb-2">
                    <i className="fas fa-check text-info me-2"></i>
                    Minimum amount: $200
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-info me-2"></i>
                    Charge Type: %
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-info me-2"></i>
                    Charges: 1%
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-info me-2"></i>
                    Duration: Instant
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    onClick={() => handleSelectMethod("USDT")}
                    className="btn btn-info btn-block"
                    disabled={loading}
                  >
                    {loading ? "Checking Balance..." : "Select this method"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin Card */}
          <div className="col-sm-10 col-md-6 col-lg-6 mb-4 d-flex px-2">
            <div className="card card-method shadow-sm border-0 py-4 px-3 flex-fill">
              <div className="card-body d-flex flex-column">
                <h2 className="card-title text-center text-uppercase text-warning mb-3">
                  Bitcoin
                </h2>
                <h3 className="card-text text-center display-8">
                  $10,000,000{" "}
                  <span className="fs-5 fw-light text-muted">Max</span>
                </h3>
                <hr />
                <ul className="list-unstyled method-details mb-4">
                  <li className="mb-2">
                    <i className="fas fa-check text-warning me-2"></i>
                    Minimum amount: $200
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-warning me-2"></i>
                    Charge Type: %
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-warning me-2"></i>
                    Charges: 1%
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-warning me-2"></i>
                    Duration: Instant
                  </li>
                </ul>
                <div className="mt-auto">
                  <button
                    onClick={() => handleSelectMethod("Bitcoin")}
                    className="btn btn-warning btn-block"
                    disabled={loading}
                  >
                    {loading ? "Checking Balance..." : "Select this method"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WithdrawalOptions;
