import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../helper/supabaseClient";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handlePasswordReset(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");


    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://atrade.it.com/reset', // Ensure this matches your route
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password reset link sent! Check your email.");
    }

    setLoading(false);
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient-primary">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-lg p-5 text-center">
            <Link to="/">
              <img
                src="./Logo.png"
                alt="logo"
                style={{ width: "100px", marginBottom: "20px" }}
              />
            </Link>
            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
            <p className="mb-4">
              We get it, stuff happens. Just enter your email address below, 
              and we'll send you a link to reset your password!
            </p>
            {error && <p className="alert alert-danger">{error}</p>}
            {message && <p className="alert alert-success">{message}</p>}
            <form className="user" onSubmit={handlePasswordReset}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  placeholder="Enter Email Address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-user btn-block mt-3"
                disabled={loading}
              >
                {loading ? "Sending..." : "Reset Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
