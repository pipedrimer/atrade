import "bootstrap/dist/css/bootstrap.min.css";
import {  Link } from "react-router-dom";


const Header = () => {
 

  return (
    <>
      {/* Navbar Start */}
      <div className="sticky-top w-100 bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light container px-3 py-2">
          <Link to="/" className="navbar-brand m-0 p-0">
           <img src="./flip.jpg" alt="logo" style={{width:"100px",marginLeft:"" ,height:'60px'}}/>
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
