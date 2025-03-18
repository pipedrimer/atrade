// import Card from "./Card";
// import { useProfiles } from "../hooks/useProfiles";
// import Spinner from "./Spinner";
// import TradingViewWidget from "../services/TradingRealMarket";

// const Dashboard = () => {

//    const {profiles, loading} = useProfiles();

//     if(loading) return <Spinner/>
//     const cardData = [
//         { title: "Account Balance", value: "$31,000", color: "primary", icon: "dollarsack" },
//         { title: "Total Profit", value: "$15,000", color: "success", icon: "dollar" },
//         { title: "Total Deposited", value: "$20,000", color: "warning", icon: "deposit" },
//         { title: "Total Withdrawn", value: "$5,000", color: "danger", icon: "withdraw" },
//         { title: "Total Bonus", value: "$1,000 ", color: "dark", icon: "gift" },
//         { title: "Referral Bonus", value: "$18", color: "info", icon: "comments" },
//       ];

//   return (
//     <div className="container-fluid px-1 mt-4">
//       <h5 className="mb-5">Welcome, {profiles.full_name}</h5>

//       <div className="row">
//       {cardData.map((card, index) => (
//         <Card key={index} {...card} />
//       ))}
//     </div>
//     <p className="mt-4 mt-md-5">Active Investment(s)</p>
//       <div className="card mt-3 p-4 w-100">
//         <div className="text-center">
//           <p className="mb-3">You do not have an active investment at the moment.</p>
//           <button className="btn btn-success">Invest Now</button>
//         </div>
//       </div>

//       {/* Recent Transactions Section */}
//       <p className="mt-4 mt-md-5">Recent Transaction(s)</p>
//       <div className="card mt-3 p-4 w-100">
//         <h5>Recent Transactions</h5>
//         <p className="mb-0">No record yet</p>
//       </div>
//       <strong>REAL MARKET DATA</strong>
//       <TradingViewWidget/>
//     </div>

//   );
// };

// export default Dashboard;

import Card from "./Card";
import { useProfiles } from "../hooks/useProfiles";
import Spinner from "./Spinner";
import TradingViewWidget from "../services/TradingRealMarket";
import { toast } from "react-toastify";
import { Link } from "react-router";
import useInvestment from "../services/useInvestment";

const formatCurrency = (amount) => {
  return Number(amount).toLocaleString(); // Adds commas to numbers
};

const Dashboard = () => {
  const { profiles, loading, error } = useProfiles();
  const { investments } = useInvestment();

  if (loading) return <Spinner />;
  if (error) {
    toast.error(error);
    return <p className="text-danger">{error}</p>;
  }

  const cardData = [
    {
      title: "Account Balance",
      value: `$${formatCurrency(profiles.balance)}`,
      color: "primary",
      icon: "dollarsack",
    },
    {
      title: "Total Profit",
      value: `$${formatCurrency(profiles.total_profit)}`,
      color: "success",
      icon: "dollar",
    },
    {
      title: "Total Deposited",
      value: `$${formatCurrency(profiles.total_deposited)}`,
      color: "warning",
      icon: "deposit",
    },
    {
      title: "Total Withdrawn",
      value: `$${formatCurrency(profiles.total_withdrawn)}`,
      color: "danger",
      icon: "withdraw",
    },
    {
      title: "Total Bonus",
      value: `$${formatCurrency(profiles.bonus)}`,
      color: "dark",
      icon: "gift",
    },
    {
      title: "Referral Bonus",
      value: `$${formatCurrency(0)}`,
      color: "info",
      icon: "comments",
    }, // If referral bonus exists in DB, update this
  ];
  const activeInvestments = investments?.active?.slice(0, 2) || [];

  return (
    <div className="container-fluid px-1 mt-4">
      <h5 className="mb-5">Welcome, {profiles.full_name}</h5>

      <div className="row">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <hr></hr>

      <p className="mt-4 mt-md-5">Active Investment(s)</p>
      {activeInvestments?.length === 0 ||
      activeInvestments === null ||
      activeInvestments === "" ? (
        <div
          className="card mt-3 p-4 w-100"
          style={{ backgroundColor: "#f9f9f9", borderColor: "#e0e0e0" }}
        >
          <div className="text-center">
            <p className="mb-3" style={{ color: "#6c757d" }}>
              You do not have an active investment at the moment.
            </p>
            <Link to="/app/investments">
              <button className="btn btn-success">Invest Now</button>
            </Link>
          </div>
        </div>
      ) : (
        activeInvestments.map((investment, index) => (
          <div
            key={index}
            className="card mt-3 p-4 w-50  container justify-content-center d-flex"
            style={{ backgroundColor: "#f4f4f9", borderColor: "#dcdfe1" }}
          >
            <div className="text-center">
              <p
                className="mb-2"
                style={{ color: "#495057", fontWeight: "bold" }}
              >
                Investment Type: {investment.type}
              </p>
              <p
                className="mb-2"
                style={{ color: "#28a745", fontWeight: "bold" }}
              >
                Status: {investment.status}
              </p>
            </div>
          </div>
        ))
      )}
      <hr></hr>

      <strong>REAL MARKET DATA</strong>
      <TradingViewWidget />
    </div>
  );
};

export default Dashboard;
