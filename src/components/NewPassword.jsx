// import supabase from "../helper/supabaseClient"
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function NewPassword() {
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Supabase automatically detects the token in the URL and sets the session
//     async function verifySession() {
//       const { data, error } = await supabase.auth.getUser();

//       if (error || !data.user) {
//         setError("Invalid or expired reset link. Please request a new one.");
//       }
//     }

//     verifySession();
//   }, []);

//   async function handleResetPassword(event) {
//     event.preventDefault();
//     setLoading(true);
//     setError("");
//     setMessage("");

//     const { error } = await supabase.auth.updateUser({ password: newPassword });

//     if (error) {
//       setError(error.message);
//     } else {
//       setMessage("Password updated successfully! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 3000); // Redirect after 3s
//     }

//     setLoading(false);
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-lg p-4">
//             <h2 className="text-center mb-4">Reset Your Password</h2>
//             {error && <p className="alert alert-danger">{error}</p>}
//             {message && <p className="alert alert-success">{message}</p>}
//             <form onSubmit={handleResetPassword}>
//               <div className="form-group">
//                 <label>New Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-block mt-3"
//                 disabled={loading}
//               >
//                 {loading ? "Resetting..." : "Reset Password"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import supabase from "../helper/supabaseClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function verifySession() {
      const params = new URLSearchParams(window.location.search);
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (access_token && refresh_token) {
        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) {
          setError("Invalid or expired reset link. Please request a new one.");
          return;
        }
      }

      const { data, error } = await supabase.auth.getUser();
      if (error || !data.user) {
        setError("Invalid or expired reset link. Please request a new one.");
      }
    }

    verifySession();
  }, []);

  async function handleResetPassword(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password updated successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000); // Redirect after 3s
    }

    setLoading(false);
  }

  return (
    <div className="row align-items-center justify-content-center min-vh-100 bg-gradient-secondary">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Reset Your Password</h2>
            {error && <p className="alert alert-danger">{error}</p>}
            {message && <p className="alert alert-success">{message}</p>}
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mt-3"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
