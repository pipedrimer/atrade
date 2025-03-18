// import useTransactions from "../services/useTransaction";

// const DepositHistory = () => {
//   const { data, loading, error } = useTransactions("deposits");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="table-responsive">
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Amount</th>
//             <th>Payment mode</th>
//             <th>Status</th>
//             <th>Date created</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>${transaction.amount}</td>
//               <td>{transaction.payment_method}</td>
//               <td>
//                 <span className={`badge bg-${transaction.status === "completed" ? "success" : "warning"}`}>
//                   {transaction.status}
//                 </span>
//               </td>
//               <td>{new Date(transaction.created_at).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DepositHistory;
import useTransactions from "../services/useTransaction";
import Spinner from "./Spinner"; 
import { Alert } from "react-bootstrap";

const DepositHistory = () => {
  const { data, loading, error } = useTransactions("deposits");

  if (loading) return <Spinner/>;
  if (error) return <Alert variant="danger">Error: {error}</Alert>;
  if (data.length === 0) return <Alert variant="info">No Deposit History Found.</Alert>;
  

  // Function to format numbers with commas
  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-responsive-sm">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Mode</th>
            <th>Date</th>
            <th>Status</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.id}>
              <td>${formatNumberWithCommas(transaction.amount)}</td>
              {/* Hide on small devices */}
              <td>{transaction.payment_method}</td>
              <td>{new Date(transaction.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false, // Use 24-hour format for time
                })}</td>
                 
                 <td>
                <span
                  className={`badge bg-${
                    transaction.status === "completed" ? "success" :
                    transaction.status === "failed" ? "danger" : "warning"
                  }`}
                  
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepositHistory;