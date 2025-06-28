import { useState, useEffect } from "react";
import supabase from "../helper/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
    referralId: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all/name/{USA, Australia, Canada}")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-right" });
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          username: formData.username,
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          country: formData.country,
          referralId: formData.referralId,
          email: formData.email,
        },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message, { position: "top-right" });
    } else {
      toast.success("Signup successful! Check your email for verification.", {
        position: "top-right",
      });
      setFormData({
        username: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        country: "",
        referralId: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="container ">
      <ToastContainer />
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            {/* Left Side - Image */}
            <div
              className="col-lg-6 d-none d-lg-block "
              style={{
                background:
                  "url('/Investing-bro.png') center center / cover no-repeat",
                minHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                paddingBottoma: "20px",
              }}
            ></div>

            {/* Right Side - Form */}
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <Link to="/">
                    <img
                      src="../Logo.png"
                      alt="logo"
                      style={{ width: "100px", marginBottom: "20px" }}
                    />
                  </Link>
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form onSubmit={handleSubmit} className="user">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      required
                      style={{
                        height: "50px",
                        fontSize: "1rem",
                        padding: "10px",
                        borderRadius: "25px",
                        border: "1px solid #ced4da",
                        backgroundColor: "#fff",
                        color: "#495057",
                        outline: "none",
                        transition:
                          "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                        appearance: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#007bff")}
                      onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
                    >
                      <option value="" disabled>
                        Choose Country
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Referral ID (Optional)"
                      value={formData.referralId}
                      onChange={(e) =>
                        setFormData({ ...formData, referralId: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Repeat Password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Register Account"}
                  </button>
                </form>
                <hr />
                {/* <a href="#" className="btn btn-google btn-user btn-block">
                  <i className="fab fa-google fa-fw"></i> Register with Google
                </a> */}

                <div className="text-center">
                  <Link className="small" to="/password-reset">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link className="small" to="/login">
                    Already have an account? Login!
                  </Link>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
