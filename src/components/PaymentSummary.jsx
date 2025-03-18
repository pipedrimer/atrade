// import { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import { FaCopy, FaCheckCircle } from "react-icons/fa";
// // eslint-disable-next-line react/prop-types
// const PaymentSummary = ({ paymentMethod, amount }) => {
//   const [transactionHash, setTransactionHash] = useState("");
//   const [copied, setCopied] = useState(false);

//   const paymentAddresses = {
//     Bitcoin: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
//     USDT: "TB3eJ2FX5hHT7X48nQJcWE3G7PdM3Fm",
//     LTC: "LVuMUZ1zNspP9HprNvnU3ExceCh25zrtM",
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(paymentAddresses[paymentMethod]);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleSubmit = () => {
//     if (transactionHash) {
//       alert("Payment marked as completed!");
//     } else {
//       alert("Please upload a transaction hash.");
//     }
//   };

//   return (
//     <div className="mt-5 d-flex justify-content-center">
//       {/* Outer container with responsive max-width */}
//       <div className="w-100 px-3 px-md-0" style={{ maxWidth: "600px" }}>
//         {/* Main Container */}
//         <div className="shadow-lg p-3 p-md-4 rounded-3 bg-white w-100">
//           <h2 className="text-center fw-bold mb-4">Payment Summary</h2>

//           {/* Payment Details Section */}
//           <div className="p-3 p-md-4 rounded bg-light shadow-sm mb-4">
//             <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//               <h5 className="fw-bold text-uppercase mb-2 mb-md-0">Payment Method</h5>
//               <span className="fs-5 fw-semibold text-primary">{paymentMethod}</span>
//             </div>
//             <hr />
//             <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//               <h5 className="fw-bold mb-2 mb-md-0">Amount</h5>
//               <span className="fs-4 fw-bold text-success">${amount}</span>
//             </div>
//           </div>

//           {/* Payment Address */}
//           <div className="bg-white p-3 p-md-4 rounded shadow-sm mb-4">
//             <h5 className="fw-bold mb-2">Send Payment To:</h5>
//             <div className="d-flex justify-content-between align-items-center border p-2 p-md-3 rounded bg-light">
//               <span className="fs-5 text-muted text-break">{paymentAddresses[paymentMethod]}</span>
//               <Button variant="outline-secondary" size="sm" onClick={handleCopy}>
//                 {copied ? <FaCheckCircle color="green" /> : <FaCopy />}
//               </Button>
//             </div>
//           </div>

//           {/* Upload Transaction Hash */}
//           <Form.Group controlId="transactionHash">
//             <Form.Label className="fs-5 fw-bold">Transaction Hash</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Paste transaction hash here..."
//               value={transactionHash}
//               onChange={(e) => setTransactionHash(e.target.value)}
//               className="p-2 p-md-3 fs-5"
//             />
//           </Form.Group>

//           <Button
//             className="w-100 mt-4 p-2 p-md-3 fs-5 fw-bold"
//             variant="primary"
//             onClick={handleSubmit}
//           >
//             Mark as Completed
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSummary;




import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCopy, FaCheckCircle } from "react-icons/fa";
import supabase from "../helper/supabaseClient";
import { useDeposit } from "../contexts/useDeposit";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

const PaymentSummary = () => {
  const { amount, selectedPayment} = useDeposit();

  const [transactionHash, setTransactionHash] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const paymentAddresses = {
    Bitcoin: "bc1qagxq03ah5ahjjvrnrt3x2mjstru2uhlrzu4myt",
    USDT: "TGanf2Ky2x4BNshW8Xig8ePt9G5p6LY8XW",
    LTC: "ltc1qs6m2hhnkyd6z94pp8hks5nvszu9lqfdycengya",
  };

  const formattedAmount = Number(amount).toLocaleString();
  const navigate = useNavigate();
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentAddresses[selectedPayment]);
    setCopied(true);
    toast.success("Payment address copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async () => {
    if (!transactionHash) {
      toast.error("Please enter a transaction hash.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("deposits").insert([
      {
        amount,
        payment_method: selectedPayment,
        transaction_hash: transactionHash,
        status: "pending",
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Deposit submission failed:", error);
      toast.error("Something went wrong. Please try again.");
    } else {
      
      toast.success("Deposit submitted! Awaiting admin approval.");
      setTransactionHash("");
      await delay(5000)
      navigate("/app/deposit")
     
    }
  };

  return (
    
    <div className="mt-5 d-flex  container justify-content-center vh-100">
      <div className="w-100 px-3 px-md-0" style={{ maxWidth: "600px" }}>
        <div className="shadow-lg p-3 p-md-4 rounded-3 bg-white w-100">
          <h2 className="text-center fw-bold mb-4">Payment Summary</h2>
          <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

          {/* Payment Details Section */}
          <div className="p-3 p-md-4 rounded bg-light shadow-sm mb-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h5 className="fw-bold text-uppercase mb-2 mb-md-0">Payment Method</h5>
              <span className="fs-5 fw-semibold text-primary">{selectedPayment}</span>
            </div>
            <hr />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h5 className="fw-bold mb-2 mb-md-0">Amount</h5>
              <span className="fs-4 fw-bold text-success">${formattedAmount}</span>
            </div>
          </div>

          {/* Payment Address */}
          <div className="bg-white p-3 p-md-4 rounded shadow-sm mb-4">
            <h5 className="fw-bold mb-2">Send Payment To:</h5>
            <div className="d-flex justify-content-between align-items-center border p-2 p-md-3 rounded bg-light">
              <span className="fs-5 text-muted text-break">{paymentAddresses[selectedPayment]}</span>
              <Button variant="outline-secondary" size="sm" onClick={handleCopy}>
                {copied ? <FaCheckCircle color="green" /> : <FaCopy />}
              </Button>
             
            </div>
            <div className="mb-2  justify-content-center d-flex mt-3">
            <img
                  src={`/${selectedPayment}-bar.png`} 
                  alt={selectedPayment}
                  width="200"
                  
                />
                </div>
          </div>

          {/* Upload Transaction Hash */}
          <Form.Group controlId="transactionHash">
            <Form.Label className="fs-5 fw-bold">Transaction Hash</Form.Label>
            <Form.Control
              type="text"
              placeholder="Paste transaction hash here..."
              value={transactionHash}
              onChange={(e) => setTransactionHash(e.target.value)}
              className="p-2 p-md-3 fs-5"
              disabled={loading}
            />
          </Form.Group>

          <Button
            className="w-100 mt-4 p-2 p-md-3 fs-5 fw-bold"
            variant="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Mark as Completed"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;

