

// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check initial screen width
//   const dropdownRef = useRef(null); // Reference for the dropdown menu

//   useEffect(() => {
//     // Handle window resize to toggle sidebar visibility
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobile) {
//       setIsSidebarOpen(false);
//     } else {
//       setIsSidebarOpen(true);
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     // Function to close dropdown when clicking outside
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     // Attach event listener when dropdown is open
//     if (isDropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   return (
//     <>
//       {/* Toggle Button - Only visible on small screens */}
//       <button
//         id="sidebarToggle"
//         className="btn btn-link d-md-none rounded-circle top-0 start-0 m-3"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         <i className="fa fa-bars"></i>
//       </button>

//       {/* Sidebar */}
//       <ul
//         className={`navbar-nav bg-gradient-primary sidebar sidebar-dark mr-1 accordion ${
//           isSidebarOpen ? "" : "d-none"
//         }`}
//         id="accordionSidebar"
//       >
//         {/* Sidebar - Brand */}
//         <Link
//           className="sidebar-brand d-flex align-items-center justify-content-center"
//           to="/app/dashboard"
//         >
//           <div className="sidebar-brand-icon rotate-n-15">
//             <i className="fas fa-laugh-wink"></i>
//           </div>
//           <div className="sidebar-brand-text mx-3">A-Trade</div>
//         </Link>

//         {/* Divider */}
//         <hr className="sidebar-divider my-0" />

//         {/* Nav Item - Dashboard */}
//         <li className="nav-item active">
//           <Link className="nav-link" to="/app/dashboard">
//             <i className="fas fa-fw fa-tachometer-alt"></i>
//             <span>Dashboard</span>
//           </Link>
//         </li>

//         {/* Divider */}
//         <hr className="sidebar-divider" />

//         {/* Heading */}
//         <div className="sidebar-heading">Funds</div>

//         <li className="nav-item">
//           <Link className="nav-link" to="/app/deposit">
//             <i className="fa fa-envelope-open"></i>
//             <span>Deposit</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link" to="/app/withdraw">
//             <i className="fas fa-credit-card"></i>
//             <span>Withdraw</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link" to="/app/history">
//             <i className="fa fa-history"></i>
//             <span>Transaction History</span>
//           </Link>
//         </li>

//         {/* Divider */}
//         <hr className="sidebar-divider" />

//         {/* Heading */}
//         <div className="sidebar-heading">ACCOUNT INFO</div>

//         {/* Investments Dropdown */}
//         <li className="nav-item" ref={dropdownRef}>
//           <a
//             className={`nav-link ${isDropdownOpen ? "" : "collapsed"}`}
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               setIsDropdownOpen(!isDropdownOpen);
//             }}
//             aria-expanded={isDropdownOpen}
//           >
//             <i className="fa fa-usd"></i>
//             <span>Investments</span>
//           </a>
//           {isDropdownOpen && (
//             <div className="collapse show">
//               <div className="bg-white py-2 collapse-inner rounded">
//                 <Link className="collapse-item" to="/app/my-investments">
//                   My Investments
//                 </Link>
//                 <Link className="collapse-item" to="/app/investments">
//                   Buy Investment
//                 </Link>
//               </div>
//             </div>
//           )}
//         </li>

//         {/* KYC */}
//         <li className="nav-item">
//           <Link className="nav-link" to="/app/kyc">
//             <i className="fa fa-book"></i>
//             <span>KYC</span>
//           </Link>
//         </li>

//         {/* Divider */}
//         <hr className="sidebar-divider d-none d-md-block" />

//         {/* Sidebar Message */}
//         <div className="sidebar-card d-none d-lg-flex mt-5">
//           <img
//             className="sidebar-card-illustration mb-2"
//             src="/undraw_investor2.png"
//             alt="..."
//           />
//         </div>
//       </ul>
//     </>
//   );
// };

// export default Sidebar;

import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    // Close the dropdown when the location (route) changes
    setIsDropdownOpen(false);
  }, [location]); // Reset dropdown state on route change

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="fixed">
      {/* Toggle Button - Only visible on small screens */}
      {/* <button
        id="sidebarToggle"
        className="btn btn-link d-md-none rounded-circle top-0 start-0 m-3"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="fa fa-bars"></i>
      </button> */}

      {/* Sidebar */}
      
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark mr-1 accordion ${
          isSidebarOpen ? "" : "d-none"
        }`}
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/app/dashboard"
        >
          
          <div  className="text-center mb-4 fw-bold text-uppercase"
            style={{
              fontSize: '0.6rem',
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '2px',
              marginTop:"40px"
            }}>Win While You Sleep</div>
        </Link>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/app/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="sidebar-heading">Funds</div>

        <li className="nav-item">
          <Link className="nav-link" to="/app/deposit">
            <i className="fa fa-envelope-open"></i>
            <span>Deposit</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/app/withdraw">
            <i className="fas fa-credit-card"></i>
            <span>Withdraw</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/app/history">
            <i className="fa fa-history"></i>
            <span>Transaction History</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="sidebar-heading">ACCOUNT INFO</div>

        {/* Investments Dropdown */}
        <li className="nav-item" ref={dropdownRef}>
          <a
            className={`nav-link ${isDropdownOpen ? "" : "collapsed"}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            aria-expanded={isDropdownOpen}
          >
            <i className="fa fa-usd"></i>
            <span>Investments</span>
          </a>
          {isDropdownOpen && (
            <div className="collapse show">
              <div className="bg-white py-2 collapse-inner rounded">
                <Link
                  className="collapse-item"
                  to="/app/my-investments"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                >
                  My Investments
                </Link>
                <Link
                  className="collapse-item"
                  to="/app/investments"
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                >
                  Buy Investment
                </Link>
              </div>
            </div>
          )}
        </li>

        {/* KYC */}
        <li className="nav-item">
          <Link className="nav-link" to="/app/kyc">
            <i className="fa fa-book"></i>
            <span>KYC</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* Sidebar Message */}
        <div className="sidebar-card d-none d-lg-flex mt-5">
          <img
            className="sidebar-card-illustration mb-2"
            src="/undraw_investor2.png"
            alt="..."
          />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;

