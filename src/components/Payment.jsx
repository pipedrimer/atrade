import { useLocation } from "react-router";

const Payment = () => {
  const location = useLocation();
  const { amount, selectedPayment } = location.state || {};

  return (
    <div>
      <h2>Payment Summary</h2>
      <p>Amount: ${amount}</p>
      <p>Payment Method: {selectedPayment}</p>
    </div>
  );
};
