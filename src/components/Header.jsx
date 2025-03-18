// import "bootstrap/dist/css/bootstrap.min.css";

// import { useAuth } from "../contexts/FakeAuthContext";

// const Header = () => {
//    const {isAuthenticated} = useAuth()
//   return (
//     <>
//       {/* Topbar Start */}
//       <div className="container-fluid topbar px-0 d-none d-lg-block">
//         <div className="container px-0">
//           <div
//             className="row gx-0 align-items-center"
//             style={{ height: "45px" }}
//           >
//             <div className="col-lg-8 text-center text-lg-start mb-lg-0">
//               <div className="d-flex flex-wrap">
//                 <a href="#" className="text-muted me-4">
//                   <i className="fas fa-map-marker-alt text-primary me-2"></i>
//                   Find A Location
//                 </a>
//                 <a href="#" className="text-muted me-4">
//                   <i className="fas fa-phone-alt text-primary me-2"></i>
//                   +01234567890
//                 </a>
//                 <a href="#" className="text-muted me-0">
//                   <i className="fas fa-envelope text-primary me-2"></i>
//                   Example@gmail.com
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-4 text-center text-lg-end">
//               <div className="d-flex align-items-center justify-content-end">
//                 {[
//                   { icon: "facebook-f", href: "#" },
//                   { icon: "twitter", href: "#" },
//                   { icon: "instagram", href: "#" },
//                   { icon: "linkedin-in", href: "#" },
//                 ].map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     className="btn btn-primary btn-square rounded-circle nav-fill me-3 px-2"
//                   >
//                     <i className={`fab fa-${social.icon} text-white `}></i>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Topbar End */}

//       {/* Navbar & Hero Start */}
//       <div className=" sticky-top px-0">
//         <div
//           className="position-absolute bg-dark"
//           style={{ left: 0, top: 0, width: "100%", height: "100%" }}
//         ></div>
//         <div className="container px-0 ">
//           <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-5">
//             <a href="index.html" className="navbar-brand p-0">
//               <h1 className="text-primary m-0">
//                 <i className="fas fa-donate me-3"></i>Atrade
//               </h1>
//               {/* <img src="img/logo.png" alt="Logo" /> */}
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse"
//             >
//               <span className="fa fa-bars"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarCollapse">
//               <div className="navbar-nav ms-auto py-0">
//                 {[
//                   { label: "Home",  path: "/" },
//                   { label: "About", path: "/about" },
//                   { label: "Services", path: "/services" },
//                   { label: "Pricing", path: "/pricing" },
//                 ].map((navItem, index) => (
//                   <NavLink
//                     to={navItem.path}
//                     key={index}
//                     href={navItem.href}
//                     className={`nav-item nav-link ${
//                       navItem.active ? "active" : ""
//                     }`}
//                   >
//                     {navItem.label}
//                   </NavLink>
//                 ))}
//                 <div className="nav-item dropdown">
//                   <a
//                     href="#"
//                     className="nav-link dropdown-toggle"
//                     data-bs-toggle="dropdown"
//                   >
//                     More
//                   </a>
//                   <div className="dropdown-menu m-0">
//                     {[
//                       { label: "Testimonial", href: "/testimonial" },
//                       { label: "FAQs", href: "/faq" },
                     
//                     ].map((page, index) => (
//                       <NavLink key={index} to={page.href} className="dropdown-item">
//                         {page.label}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//                 <Link to="/contact" className="nav-item nav-link">
//                   Contact Us
//                 </Link>
//               </div>
//               <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                
//                 <Link
//                   to={"/login"}
//                   className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
     
//     </>
//   );
// };

// export default Header;
import "bootstrap/dist/css/bootstrap.min.css";
import {  Link } from "react-router-dom";


const Header = () => {
 

  return (
    <>
      {/* Navbar Start */}
      <div className="sticky-top w-100 bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light container px-3 py-2">
          <Link to="/" className="navbar-brand m-0 p-0">
           <img src="./Logo.png" alt="logo" style={{width:"100px",marginLeft:"" }}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Pricing", path: "/pricing" },
              ].map((navItem, index) => (
                <Link
                  to={navItem.path}
                  key={index}
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  {navItem.label}
                </Link>
              ))}
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  More
                </a>
                <div className="dropdown-menu">
                  {[
                    { label: "Testimonial", href: "/testimonial" },
                    { label: "Services", href: "/services" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((page, index) => (
                    <Link key={index} to={page.href} className="dropdown-item">
                      {page.label}
                    </Link>
                  ))}
                </div>
              </div>
              
            </div>
            <div className="d-flex align-items-center ms--5">
              <Link
                to="/login"
                className="btn btn-primary rounded-pill text-white py-2 px-4"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Header;
