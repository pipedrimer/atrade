// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {  useProfiles } from "../hooks/useProfiles"; // Import useProfile hook
// import { useDeposit } from "../contexts/useDeposit";
// import Spinner from "./Spinner";

// const WithdrawalRequest = () => {
//   const [amount, setAmount] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { profiles, loading: profileLoading } = useProfiles(); // Fetch user profile
//  ; // Fetch withdrawal transactions

//  const { selectedPayment } = useDeposit();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Validate profile is loaded
//     if (profileLoading) {

//       return <Spinner/>
//     }

//     // Check if KYC is completed
//     if (!profiles || profiles.is_kyc !== "completed") {
//       toast.error("KYC verification is required before making a withdrawal.");
//       setLoading(false);
//       return;
//     }

//     // Validate the amount
//     if (!amount || amount <= 0) {
//       toast.error("Please enter a valid amount.");
//       setLoading(false);
//       return;
//     }
//   }

//   return (
//     <div className="container-fluid mb-5">
//       {/* Toast Container for Notifications */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} pauseOnHover />

//       {/* Title */}
//       <h1 className="h2">Complete withdrawal request</h1>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="mb-5 row">
//                 <div className="col-lg-8 offset-md-2">
//                   {/* Method Header */}
//                   <div className="mb-3">
//                     <h4 className="h2">
//                       <i className="bi bi-cursor"></i> USDT
//                     </h4>
//                   </div>

//                   {/* Withdrawal Form */}
//                   <form onSubmit={handleSubmit}>
//                     {/* Amount Input */}
//                     <div className="mb-3">
//                       <label className="form-label">Enter {selectedPayment} Amount to withdraw ($)</label>
//                       <input
//                         className="form-control"
//                         placeholder="Enter Amount"
//                         type="number"
//                         name="amount"
//                         step="any"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         required
//                       />
//                     </div>

//                     {/* Hidden Method Input */}
//                     <input value="USDT" type="hidden" name="method" />

//                     {/* Submit Button */}
//                     <div className="mb-3">
//                       <button className="btn btn-primary" type="submit" disabled={loading || profileLoading}>
//                         {loading ? "Processing..." : "Complete Request"}
//                       </button>
//                     </div>
//                   </form>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawalRequest;

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfiles } from "../hooks/useProfiles"; // Import useProfiles hook
import { useDeposit } from "../contexts/useDeposit";
import Spinner from "./Spinner";
import supabase from "../helper/supabaseClient"; // Import Supabase client

const WithdrawalRequest = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { profiles, loading: profileLoading } = useProfiles(); // Fetch user profile
  const { selectedPayment } = useDeposit();
  const [wallet, setWallet] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate profile is loaded
    if (profileLoading) {
      return <Spinner />;
    }

    // Check if KYC is completed
    if (!profiles || profiles.is_kyc !== "completed") {
      toast.error("KYC verification is required before making a withdrawal.");
      setLoading(false);
      return;
    }

    // Validate the amount
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid amount.");
      setLoading(false);
      return;
    }

    if (amount > profiles.balance) {
      toast.error("Insufficient Balance");
      setLoading(false);
      return;
    }

    // Insert withdrawal request into the database
    const { error } = await supabase.from("withdrawal").insert([
      {
        cryptocurrency: selectedPayment, // Selected payment method (e.g., USDT)
        amount: parseFloat(amount), // Convert amount to number
        status: "pending", // Default status
        wallet
      },
    ]);

    if (error) {
      console.error("Error submitting withdrawal request:", error);
      toast.error("Failed to submit withdrawal request. Please try again.");
    } else {
      toast.success("Withdrawal request submitted successfully!");
      setAmount(""); // Clear input field after success
      setWallet("")
    }

    setLoading(false);
  };

  return (
    <div className="container-fluid mb-5">
      {/* Toast Container for Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover
      />

      {/* Title */}
      <h1 className="h2">Complete withdrawal request</h1>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-5 row">
                <div className="col-lg-8 offset-md-2">
                  {/* Method Header */}
                  <div className="mb-3">
                    <h4 className="h2">
                      <i className="bi bi-cursor"></i> {selectedPayment}
                    </h4>
                  </div>

                  {/* Withdrawal Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Amount Input */}
                    <div className="mb-3">
                      <label className="form-label">
                        Enter {selectedPayment} Amount to Withdraw in USD ($)
                      </label>
                      <input
                        className="form-control"
                        placeholder="Enter Amount"
                        type="number"
                        name="amount"
                        step="any"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                      <label className="form-label mt-2">
                        Enter{" "}
                        {selectedPayment === "USDT"
                          ? "USDT (TRC20)"
                          : selectedPayment === "Bitcoin"
                          ? "Bitcoin"
                          : selectedPayment}{" "}
                        Wallet Address
                      </label>
                      <input
                        className="form-control"
                        placeholder="Enter Wallet Address"
                        type="text"
                        name="wallet"
                        value={wallet}
                        onChange={(e) =>setWallet(e.target.value)}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-3">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={loading || profileLoading}
                      >
                        {loading ? "Processing..." : "Complete Request"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalRequest;
