import { createContext, useContext, useState } from "react";

// Create context
const DepositContext = createContext();

// Create provider component
// eslint-disable-next-line react/prop-types
export const DepositProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  

  return (
    <DepositContext.Provider value={{ amount, setAmount, selectedPayment, setSelectedPayment }}>
      {children}
    </DepositContext.Provider>
  );
};

// Custom hook to use the deposit context
export const useDeposit = () => {
  return useContext(DepositContext);
};
