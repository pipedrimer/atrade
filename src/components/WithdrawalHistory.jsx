// import useTransactions from "../services/useTransaction";

// const WithdrawalHistory = () => {
//   const { data, loading, error } = useTransactions("withdrawal");

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="table-responsive">
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Amount requested</th>
//             <th>Amount - charges</th>
//             <th>Receiving mode</th>
//             <th>Status</th>
//             <th>Date created</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>${transaction.amount}</td>
//               <td>${transaction.amount - (transaction.amount*0.01)}</td>
//               <td>{transaction.cryptocurrency}</td>
//               <td>
//                 <span className={`badge bg-${transaction.status ==="completed" ? "success" : "warning"}`}>
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

// export default WithdrawalHistory;
import useTransactions from "../services/useTransaction";
import Spinner from "./Spinner";
import { Alert } from "react-bootstrap";

const WithdrawalHistory = () => {
  const { data, loading, error } = useTransactions("withdrawal");

  if (loading) return <Spinner />; // Show a spinner while loading
  if (error) return <Alert variant="danger">Error: {error}</Alert>; // Show an error alert
  if (data.length === 0)
    return <Alert variant="info">No Withdrawal History Found.</Alert>;

  // Function to format numbers with commas
  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-responsive-sm">
        <thead>
          <tr>
            <th className="d-none d-sm-table-cell">Amount requested</th>
            <th>Amount</th>
            <th>Mode </th>
            <th>Date</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.id}>
              {/* Hide on small devices */}
              <td className="d-none d-sm-table-cell">
                ${formatNumberWithCommas(transaction.amount)}
              </td>
              {/* Always visible */}
              <td>
                $
                {formatNumberWithCommas(
                  transaction.amount - transaction.amount * 0.01
                )}
              </td>
              <td>
                {transaction.cryptocurrency}
              </td>
             
              {/* Hide on small devices */}
              <td>
                {new Date(transaction.created_at).toLocaleString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false, // Use 24-hour format for time
                })}
              </td>
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

export default WithdrawalHistory;
