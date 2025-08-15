// import useInvestment from "../services/useInvestment"; // Adjust the import path
// import Spinner from "./Spinner";

// const MyInvestments = () => {
//   const { investments, loading, error } = useInvestment();

//   if (loading) {
//     return <Spinner/>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="row mt-6 g-4">
//       <h2 className="text-center mb-4">My Investments</h2>

//       {/* Active Investments */}
//       <h3>Active Investments</h3>
//       {investments.active.length === 0 ? (
//         <p className="text-center">No active investments.</p>
//       ) : (
//         investments.active.map((investment) => (
//           <div className="col-xl-4" key={investment.id}>
//             <div className="card border-0 py-6 px-4">
//               <div className="card-body d-flex flex-column">
//                 <h2 className="card-title h3 text-uppercase text-primary text-center mb-3">
//                   Investment #{investment.id}
//                 </h2>
//                 <h3 className="card-text display-6 text-primary text-center mb-3">
//                   {investment.type}{" "}
//                   <span className="fs-3 fw-normal text-success">
//                     {investment.status}
//                   </span>
//                 </h3>
//                 <hr />
//                 <ul className="list-unstyled mb-4 flex-grow-1">
//                   <li>Amount: ${investment.amount}</li>
//                   <li>Start Date: {new Date(investment.start_date).toLocaleDateString()}</li>
//                   <li>End Date: {new Date(investment.end_date).toLocaleDateString()}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))
//       )}

//       {/* Completed Investments */}
//       <h3>Completed Investments</h3>
//       {investments.completed.length === 0 ? (
//         <p className="text-center">No completed investments.</p>
//       ) : (
//         investments.completed.map((investment) => (
//           <div className="col-xl-4" key={investment.id}>
//             <div className="card border-0 py-6 px-4">
//               <div className="card-body d-flex flex-column">
//                 <h2 className="card-title h3 text-uppercase text-primary text-center mb-3">
//                   Investment #{investment.id}
//                 </h2>
//                 <h3 className="card-text display-6 text-primary text-center mb-3">
//                   {investment.type}{" "}
//                   <span className="fs-3 fw-normal text-success">
//                     {investment.status}
//                   </span>
//                 </h3>
//                 <hr />
//                 <ul className="list-unstyled mb-4 flex-grow-1">
//                   <li>Amount: ${investment.amount}</li>
//                   <li>Start Date: {new Date(investment.start_date).toLocaleDateString()}</li>
//                   <li>End Date: {new Date(investment.end_date).toLocaleDateString()}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyInvestments;

// import "./myinvestment.css";
// import Spinner from './Spinner'; // Assuming Spinner component is available
// import useInvestment from "../services/useInvestment"; // Adjust according to your file structure

// const MyInvestments = () => {
//   const { investments, loading, error } = useInvestment();

//   if (loading) {
//     return <Spinner />;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   // Function to calculate progress percentage
//   const calculateProgress = (startDate, endDate) => {
//     const now = new Date();
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     if (now <= start) return 0; // If the current date is before the start date
//     if (now >= end) return 100; // If the current date is after the end date

//     const totalDuration = end - start;
//     const elapsedDuration = now - start;

//     return Math.min((elapsedDuration / totalDuration) * 100, 100); // Percentage of progress
//   };

//   return (
//     <div className="row mt-6 g-4">
//       <h2 className="text-center mb-4">My Investments</h2>

//       {/* Active Investments */}
//       <h3 className="pl-4">Active Investments</h3>
//       {investments.active.length === 0 ? (
//         <p className="text-center">No active investments.</p>
//       ) : (
//         investments.active.map((investment) => {
//           const progress = calculateProgress(investment.start_date, investment.end_date); // Get the progress
//           return (
//             <div className="col-xl-4 p-4" key={investment.id}>
//               <div className="card l-bg-green-dark">
//                 <div className="card-statistic-3 p-4">
//                   <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
//                   <div className="mb-4">
//                     <h5 className="card-title mb-0 text-black">ID: #{investment.id}</h5>
//                   </div>
//                   <div className="row align-items-center mb-2 d-flex">
//                     <div className="col-8">
//                       <h2 className="d-flex text-white align-items-center mb-0">
//                         {investment.type}
//                       </h2>
//                     </div>
//                     <div className="col-4 text-right">
//                       <span>{investment.status} <i className="fa fa-arrow-up"></i></span>
//                     </div>
//                   </div>
//                   <div className="progress mt-1" data-height="8" style={{ height: '8px' }}>
//                     <div
//                       className="progress-bar l-bg-orange"
//                       role="progressbar"
//                       aria-valuenow={progress}
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                       style={{ width: `${progress}%` }} // Set progress width dynamically
//                     ></div>
//                   </div>
//                   <ul className="list-unstyled mt-3">
//                     <li>Amount: ${Number(investment.amount).toLocaleString()}</li>
//                     <li>Start Date: {new Date(investment.start_date).toLocaleDateString()}</li>
//                     <li>End Date: {new Date(investment.end_date).toLocaleDateString()}</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}

//       {/* Completed Investments */}
//       <h3>Completed Investments</h3>
//       {investments.completed.length === 0 ? (
//         <p className="text-center">No completed investments.</p>
//       ) : (
//         investments.completed.map((investment) => {
//           const progress = calculateProgress(investment.start_date, investment.end_date); // Get the progress
//           return (
//             <div className="col-xl-4 p-4" key={investment.id}>
//               <div className="card l-bg-blue-dark">
//                 <div className="card-statistic-3 p-4">
//                   <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
//                   <div className="mb-4">
//                     <h5 className="card-title mb-0">ID: #{investment.id}</h5>
//                   </div>
//                   <div className="row align-items-center mb-2 d-flex">
//                     <div className="col-8">
//                       <h2 className="d-flex align-items-center mb-0">
//                         {investment.type}
//                       </h2>
//                     </div>
//                     <div className="col-4 text-right">
//                       <span>{investment.status} <i className="fa fa-arrow-up"></i></span>
//                     </div>
//                   </div>
//                   <div className="progress mt-1" data-height="8" style={{ height: '8px' }}>
//                     <div
//                       className="progress-bar l-bg-green"
//                       role="progressbar"
//                       aria-valuenow={progress}
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                       style={{ width: `${progress}%` }} // Set progress width dynamically
//                     ></div>
//                   </div>
//                   <ul className="list-unstyled mt-3">
//                     <li>Amount: ${Number(investment.amount).toLocaleString()}</li>
//                     <li>Start Date: {new Date(investment.start_date).toLocaleDateString()}</li>
//                     <li>End Date: {new Date(investment.end_date).toLocaleDateString()}</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default MyInvestments;

import "./myinvestment.css";
import Spinner from "./Spinner"; // Assuming Spinner component is available
import useInvestment from "../services/useInvestment"; // Adjust according to your file structure
import { useState } from "react"; // We need state to manage error messages

const MyInvestments = () => {
  const { investments, loading, error } = useInvestment(); // Assuming cancelInvestment is available in the hook
  const [errorMessage, setErrorMessage] = useState(""); // State to handle the error message

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Function to calculate progress percentage
  const calculateProgress = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now <= start) return 0; // If the current date is before the start date
    if (now >= end) return 100; // If the current date is after the end date

    const totalDuration = end - start;
    const elapsedDuration = now - start;

    return Math.min((elapsedDuration / totalDuration) * 100, 100); // Percentage of progress
  };

  // Function to handle cancel button click
  const handleCancel = (investmentId, startDate) => {
    const now = new Date();
    const start = new Date(startDate);

    // Check if the investment has been active for at least 21 days
    const daysActive = (now - start) / (1000 * 60 * 60 * 24); // Convert ms to days
    if (daysActive < 60) {
      setErrorMessage(
        "You can't end this Investment until after 21 business days."
      );
    } else {
      setErrorMessage(" Please Contact Support to cancel your Investment Plan");
    }
  };

  return (
    <div className="container-fluid row mt-1 gap-3 d-flex justify-content-center align-items-center vh-100 ">
      <h3
        className="text-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          padding: "2px",
          borderRadius: "8px",
          color: "black",
          display: "inline-block",
          margin: "0",
          width: "auto",
          letterSpacing: "4px"
        }}
      >
        My Investments
      </h3>

      {/* Error Message */}
      {errorMessage && (
        <div className="alert alert-danger text-center container">
          {errorMessage}
        </div>
      )}
  <hr></hr>
      {/* Active Investments */}
      <h6
        className=""
      >
        Active Investments
      </h6>
      {investments.active.length === 0 ? (
        <p
          className="text-center"
          style={{
            backgroundColor: "rgba(74, 91, 101, 0.544)",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "white",
            display: "inline-block",
            margin: "0",
            width: "auto",
          }}
        >
          No active investments.
        </p>
      ) : (
        investments.active.map((investment) => {
          const progress = calculateProgress(
            investment.start_date,
            investment.end_date
          ); // Get the progress
          return (
            <div className="col-xl-4 p-4" key={investment.id}>
              <div className="card l-bg-green-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-ticket-alt"></i>
                  </div>
                  <div className="mb-4">
                    <h6 className="card-title mb-0 text-black">
                      ID: #{investment.id}
                    </h6>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex text-white align-items-center mb-0">
                        {investment.type}
                      </h2>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        {investment.status} <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress mt-1"
                    data-height="8"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-bar l-bg-orange"
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${progress}%` }} // Set progress width dynamically
                    ></div>
                  </div>
                  <ul className="list-unstyled mt-3">
                    <li>
                      Amount: ${Number(investment.amount).toLocaleString()}
                    </li>
                    <li>
                      Start Date:{" "}
                      {new Date(investment.start_date).toLocaleDateString()}
                    </li>
                    <li>
                      End Date:{" "}
                      {new Date(investment.end_date).toLocaleDateString()}
                    </li>
                  </ul>
                  {/* Cancel Button */}
                  <div className="text-right mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleCancel(investment.id, investment.start_date)
                      }
                    >
                      Cancel Investment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      <hr></hr>

      {/* Completed Investments */}
      <h6 className="">Completed Investments</h6>
      {investments.completed.length === 0 ? (
        <p
          className="text-center"
          style={{
            backgroundColor: "rgba(69, 77, 83, 0.544)",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "white",
            display: "inline-block",
            margin: "0",
            width: "auto",
          }}
        >
          No completed investments.
        </p>
      ) : (
        investments.completed.map((investment) => {
          const progress = calculateProgress(
            investment.start_date,
            investment.end_date
          ); // Get the progress
          return (
            <div className="col-xl-4 p-4" key={investment.id}>
              <div className="card l-bg-blue-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">
                      Investment #{investment.id}
                    </h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        {investment.type}
                      </h2>
                    </div>
                    <div className="col-4 text-right">
                      <span>
                        {investment.status} <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress mt-1"
                    data-height="8"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${progress}%` }} // Set progress width dynamically
                    ></div>
                  </div>
                  <ul className="list-unstyled mt-3">
                    <li>
                      Amount: ${Number(investment.amount).toLocaleString()}
                    </li>
                    <li>
                      Start Date:{" "}
                      {new Date(investment.start_date).toLocaleDateString()}
                    </li>
                    <li>
                      End Date:{" "}
                      {new Date(investment.end_date).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyInvestments;
