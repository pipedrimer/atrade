// import DepositHistory from "./DepositHistory";
// import WithdrawalHistory from "./WithdrawalHistory";
// import { useState } from "react";

// const TransactionHistory = () => {
//   const [activeTab, setActiveTab] = useState("deposit");

//   return (
//     <div className="vh-100 flex-column mt-5 mr-2">
//       {/* Page Title */}
//       <div className=" p-4 bg-light">
//         <div className="row justify-content-between align-items-center">
//           <div className="col-md-6">
//             <h3 className="h2 m-0">Account transactions history</h3>
//             <p className="m-0">All your transaction history in one place.</p>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="p-1 bg-light border-bottom">
//         <ul className="nav nav-pills nav-justified" role="tablist">
//           <li className="nav-item">
//             <button
//               className={`nav-link ${
//                 activeTab === "deposit" ? "active" : ""
//               } d-flex flex-column align-items-center`}
//               onClick={() => setActiveTab("deposit")}
//             >
//               <i className="bi bi-wallet-fill fs-3"></i>
//               <span className=" d-sm-block text-success">Deposit</span>
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${
//                 activeTab === "withdrawal" ? "active" : ""
//               } d-flex flex-column align-items-center`}
//               onClick={() => setActiveTab("withdrawal")}
//             >
//               <i className="bi bi-graph-down fs-3"></i>
//               <span className="d-sm-block text-danger">Withdrawal</span>
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Tab Content */}
//       <div className="flex-grow-1 p-4 overflow-auto">
//         {activeTab === "deposit" && <DepositHistory />}
//         {activeTab === "withdrawal" && <WithdrawalHistory />}
//       </div>
//     </div>
//   );
// };

// export default TransactionHistory;
import DepositHistory from "./DepositHistory";
import WithdrawalHistory from "./WithdrawalHistory";
import { useState } from "react";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <div className="vh-100 d-flex flex-column w-100 mt-1 mr-1 overflow-hidden">
      {/* Page Title */}
      <div className="p-4 bg-light">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <h3 className="h2 m-0">Account transactions history</h3>
            <p className="m-0">All your transaction history in one place.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-1 bg-light border-bottom">
        <ul className="nav nav-pills nav-justified flex-wrap" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "deposit" ? "active" : ""
              } d-flex flex-column align-items-center`}
              onClick={() => setActiveTab("deposit")}
            >
              <i className="bi bi-wallet-fill fs-3"></i>
              <span className="d-sm-block text-success">Deposit</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "withdrawal" ? "active" : ""
              } d-flex flex-column align-items-center`}
              onClick={() => setActiveTab("withdrawal")}
            >
              <i className="bi bi-graph-down fs-3"></i>
              <span className="d-sm-block text-danger">Withdrawal</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="flex-grow-1 p-4 overflow-auto">
        {activeTab === "deposit" && <DepositHistory />}
        {activeTab === "withdrawal" && <WithdrawalHistory />}
      </div>
    </div>
  );
};

export default TransactionHistory;
