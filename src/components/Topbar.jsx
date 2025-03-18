import { Link, useNavigate } from "react-router";
import "../app.css";
import { logout } from "../services/apiAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfiles } from "../hooks/useProfiles";

const TopBar = () => {
  const navigate = useNavigate();

  const { profiles } = useProfiles();

  async function handleLogout(e) {
    e.preventDefault();
    try {
      await logout();

      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out. Please try again.");
    }
  }

  return (
    <div id="content-wrapper" className=" flex-column ">
      <div id="content">
        <ToastContainer />
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar  static-top shadow ">
          <img
            src="../Logo.png"
            alt="logo"
            style={{ width: "90px", paddingLeft: "10px" }}
          />

          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            <li className="navbar dropdown no-arrow ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw pt-2"></i>
                <span className="badge badge-danger badge-counter"></span>
              </a>
              <div
                className="dropdown-list dropdown-menu dropdown-menu-end shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-2">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">
                      {new Date().toISOString().slice(0, 10)}
                    </div>
                    <span className="font-weight-bold">
                      Welcome to your Dashboard
                    </span>
                  </div>
                </a>
              </div>
            </li>

            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="mr-1  d-lg-inline text-gray-600 small">
                  {profiles.username}
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="/undraw_profile.svg"
                  alt="User"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end shadow animated--grow-in "
                aria-labelledby="userDropdown"
              >
                <Link to="/app/profile" className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
                  Profile Settings
                </Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
      </div>
    </div>
  );
};

export default TopBar;
