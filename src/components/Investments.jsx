
// import PlanDetail from "./Plandetail";
// import PlanForm from "./Planform";

// const InvestmentPlans = () => {
//   return (
//     <div className="row mb-6 g-4">
//       {/* Standard Plan Card */}
//       <div className="col-xl-4">
//         <div className="card border-0 py-6 px-4n">
//           <div className="card-body d-flex flex-column">
//             <h2 className="card-title h3 text-uppercase text-primary text-center mb-3">7.1 % ROI</h2>
//             <h3 className="card-text display-6 text-primary text-center mb-3">
//               Standard Plan <span className="fs-3 fw-normal text-success">Regular</span>
//             </h3>
//             <hr />
//             <ul className="list-unstyled mb-4 flex-grow-1">
//               <PlanDetail text="Minimum amount: $10,000" />
//               <PlanDetail text="Maximum amount: $49,999" />
//               <PlanDetail text="10% Monthly for 3 months" />
//               <PlanDetail text="Charges Amount:" />
//               <PlanDetail text="Duration: 3 months" />
//             </ul>
//             <PlanForm minAmount={10000} maxAmount={49999} duration="1 year" planId={13} />
//           </div>
//         </div>
//       </div>

//       {/* Premium Plan Card */}
//       <div className="col-xl-4">
//         <div className="card border-0 py-6 px-4 ">
//           <div className="card-body d-flex flex-column">
//             <h2 className="card-title h3 text-uppercase text-primary text-center mb-3">9 % ROI</h2>
//             <h3 className="card-text display-6 text-primary text-center mb-3">
//               Premium Plan <span className="fs-3 fw-normal text-success">Vip</span>
//             </h3>
//             <hr />
//             <ul className="list-unstyled mb-4 flex-grow-1">
//               <PlanDetail text="Minimum amount: $50,000" />
//               <PlanDetail text="Maximum amount: $499,999" />
//               <PlanDetail text="15% Monthly for 3 months" />
//               <PlanDetail text="Charges Amount:" />
//               <PlanDetail text="Duration: 3 months" />
//             </ul>
//             <PlanForm minAmount={50000} maxAmount={499999} duration="6 months" planId={14} />
//           </div>
//         </div>
//       </div>

//       {/* Super Plan Card */}
//       <div className="col-xl-4">
//         <div className="card border-0 py-6 px-4 ">
//           <div className="card-body d-flex flex-column">
//             <h2 className="card-title h3 text-uppercase text-primary text-center mb-3">12 % ROI</h2>
//             <h3 className="card-text display-6 text-primary text-center mb-3">
//               Super Plan <span className="fs-3 fw-normal text-success">Special</span>
//             </h3>
//             <hr />
//             <ul className="list-unstyled mb-4 flex-grow-1">
//               <PlanDetail text="Minimum amount: $500,000" />
//               <PlanDetail text="Maximum amount: $1,000,000" />
//               <PlanDetail text="25% Monthly for 1 month" />
//               <PlanDetail text="Charges Amount:" />
//               <PlanDetail text="Duration: 1 month" />
//             </ul>
//             <PlanForm minAmount={500000} maxAmount={1000000} duration="1 month" planId={15} />
//           </div>
//         </div>
//       </div>

//       {/* Modal for No Plans */}
//       <div
//         id="withdrawdisabled"
//         className="modal fade"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3 className="modal-title" id="exampleModalCenterTitle">No Plans</h3>
//             </div>
//             <div className="modal-footer m-0">
//               <button type="button" className="btn btn-light" data-bs-dismiss="modal">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestmentPlans;


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBalance from "../services/useBalance";
import supabase from "../helper/supabaseClient";
import PlanDetail from "./PlanDetail";
import Spinner from "./Spinner";
import { useNavigate } from "react-router";

const InvestmentPlans = () => {
  // Fetch user's balance

  const navigate = useNavigate()
  const { balance, error, loading} = useBalance(); // Added refetchBalance
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


  // Check if the data is still loading
  if (loading) {
    return <Spinner />;
  }

  // Handle any errors
  if (error) {
    console.error("Error fetching balance:", error.message);
    toast.error("Failed to fetch user balance.");
    return;
  }

  // Handle the balance value
  if (balance === null) {
    toast.error("Balance not available.");
    return;
  }

  const handleJoinPlan = async (plan, amount) => {
    amount = Number(amount); // Convert input to number

    if (amount < plan.minAmount || amount > plan.maxAmount) {
      toast.error("Investment amount is out of allowed range.");
      return;
    }

    if (balance === null) {
      toast.error("Balance not available.");
      return;
    }

    if (balance < amount) {
      toast.error("Insufficient balance to join this plan.");
      return;
    }

    try {
      const { error: userError } = await supabase.auth.getUser();
      if (userError) throw new Error(userError.message);

      const { error } = await supabase.from("user_investment").insert([
        {
          type: plan.type,
          start_date: new Date(),
          end_date: new Date(Date.now() + plan.durationInMilliseconds),
          amount: amount,
          status: "active",
        },
      ]);

      if (error) {
        console.error("Error joining plan:", error.message);
        toast.error("Failed to join plan.");
      } else {
        toast.success("Plan joined successfully!");
        await delay(3000)
        navigate("/app/dashboard")

       
      }
    } catch (err) {
      console.error("Error:", err.message);
      toast.error("An unexpected error occurred.");
    }
  };

  const handleSubmit = (e, plan) => {
    e.preventDefault();
    const amount = e.target.elements.iamount.value; // Get value directly from form input

    // Balance check before proceeding
    if (balance < amount) {
      toast.error("Insufficient balance to join this plan.");
      return;
    }

    handleJoinPlan(plan, amount); // Proceed with joining the plan if balance is sufficient
  };

  const plans = [
    {
      id: 100,
      name: "Standard Plan",
      type: "Standard",
      roi: "15% Bi-Weekly",
      minAmount: 10000,
      maxAmount: 49999,
      duration: "3 months",
      durationInMilliseconds: 3 * 30 * 24 * 60 * 60 * 1000, // 3 months in milliseconds
    },
    {
      id: 102,
      name: "Premium Plan",
      type: "Premium",
      roi: "20% Bi-Weekly",
      minAmount: 50000,
      maxAmount: 499999,
      duration: "3 months",
      durationInMilliseconds: 3 * 30 * 24 * 60 * 60 * 1000, // 3 months in milliseconds
    
    },
    {
      id: 103,
      name: "Super Plan",
      type: "VIP",
      roi: "25% Bi-Weekly",
      minAmount: 500000,
      maxAmount: 1000000,
      duration: "3 months",
      durationInMilliseconds: 3 * 30 * 24 * 60 * 60 * 1000, // 3 month in milliseconds
  
    },
  ];

  return (
    <div className="row mb-6 g-4 pt-5">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Render Plan Cards */}
      {plans.map((plan) => (
        <div className="col-xl-4" key={plan.id}>
          <div className="card border-0 py-6 px-4">
            <div className="card-body d-flex flex-column">
              <h2 className="card-title h3 text-uppercase text-primary text-center mb-3">
                {plan.roi} ROI
              </h2>
              <h3 className="card-text display-6 text-primary text-center mb-3">
                {plan.name} <span className="fs-3 fw-normal text-success">{plan.type}</span>
              </h3>
              <hr />
              <ul className="list-unstyled mb-4 flex-grow-1">
                <PlanDetail text={`Minimum amount: $${Number(plan.minAmount).toLocaleString()}`} />
                <PlanDetail text={`Maximum amount: $${Number(plan.maxAmount).toLocaleString()}`} />
                <PlanDetail text={`Duration: ${plan.duration}`} />
              </ul>

              {/* Investment Form */}
              <form method="post" onSubmit={(e) => handleSubmit(e, plan)}>
                <input
                  type="number"
                  min={plan.minAmount}
                  max={plan.maxAmount}
                  name="iamount"
                  placeholder={`$${plan.minAmount} - $${plan.maxAmount}`}
                  className="form-control h3"
                  required
                />
                <br />
                <input type="submit" className="btn btn-block pricing-action btn-primary" value="Join Plan" />
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentPlans;


