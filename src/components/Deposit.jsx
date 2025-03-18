// import { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";
// // import PaymentSummary from "./PaymentSummary";
// import { useNavigate } from "react-router";

// const Deposit = () => {
//   const [amount, setAmount] = useState("");
//   const [selectedPayment, setSelectedPayment] = useState("");

//    const navigate = useNavigate()

//   const handlePaymentSelect = (method) => {
//     setSelectedPayment(method);
//   };

//   const handleProceed = () => {
//     if (amount && selectedPayment) { navigate("/app/payment", { state: { amount, selectedPayment } });
      
//       navigate("/app/payment")
//     } else {
//       alert("Please select a payment method and enter an amount.");
//     }
//   };

//   return (
//         <div className="mt-5 ml-2 pt-5   align-items-center" style={{ minHeight: "100vh" }}>
//         <Card className="p-4 shadow-lg  text-center" style={{ maxWidth: "800px", width: "100%"}}>
//           <h4 className="mb-3">Deposit into Your Account</h4>

//           <Form.Group controlId="amount">
//             <Form.Label>Enter Amount</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="Enter Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </Form.Group>

//           <div className="my-3">
//             <h6>Choose Payment Method</h6>
//             <div className="row gap-3 d-flex justify-content-center align-items-center">
//               {["Bitcoin", "USDT", "LTC"].map((method) => (
//                 <div
//                   key={method}
//                   className={`card p-3 ${selectedPayment === method ? "border-primary shadow-sm" : ""}`}
//                   style={{
//                     cursor: "pointer",
//                     width: "300px",
//                     textAlign: "center",
//                     borderRadius: "10px",
//                   }}
//                   onClick={() => handlePaymentSelect(method)}
//                 >
//                   <img
//                     src={`/${method.toLowerCase()}.png`} // Ensure these images exist in the public folder
//                     alt={method}
//                     width="40"
//                     className="mb-2"
//                   />
//                   <strong>{method}</strong>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Button className="w-100 mt-3" variant="primary" onClick={handleProceed}>
//             Proceed to Payment
//           </Button>
//         </Card>
//         </div>
        
      
  
//   );
// };

// export default Deposit;

import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDeposit } from "../contexts/useDeposit"

const Deposit = () => {
  const { amount, setAmount, selectedPayment, setSelectedPayment } = useDeposit();
  const navigate = useNavigate();

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleProceed = () => {
    if (amount && selectedPayment) {
      navigate("/app/payment");
    } else {
      alert("Please select a payment method and enter an amount.");
    }
  };

  return (
    <div className="mt-5 ml-2 pt-5 align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow-lg text-center" style={{ maxWidth: "800px", width: "100%" }}>
        <h4 className="mb-3">Deposit into Your Account</h4>

        <Form.Group controlId="amount">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <div className="my-3">
          <h6>Choose Payment Method</h6>
          <div className="row gap-2 container justify-content-center align-items-center">
            {["Bitcoin", "USDT", "LTC"].map((method) => (
              <div
                key={method}
                className={`card p-3 transition-all duration-300 cursor-pointer 
                  ${selectedPayment === method ? "border border-primary shadow-sm scale-105 bg-light" : ""}`}
                style={{
                  cursor: "pointer",
                  width: "200px",
                  textAlign: "center",
                  borderRadius: "10px",
                }}
                onClick={() => handlePaymentSelect(method)}
              >
                <img
                  src={`/${method.toLowerCase()}.png`} 
                  alt={method}
                  width="40"
                  className="mb-2"
                />
                <strong>{method}</strong>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-100 mt-3" variant="primary" onClick={handleProceed}>
          Proceed to Payment
        </Button>
      </Card>
    </div>
  );
};

export default Deposit;
