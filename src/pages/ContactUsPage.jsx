import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "../bootstrap.css"



export default function ContactUsPage() {

     useEffect(() => {
            AOS.init({ duration: 800 });
          }, []);
  return (
   <>
   <Header/>
   <div className="container-fluid bg-breadcrumb">
      <div className="bg-breadcrumb-single"></div>
      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h4 className="text-white display-4 mb-4" data-aos="fade-down" data-aos-delay="100">
          Contact Us
        </h4>
        <ol className="breadcrumb justify-content-center mb-0" data-aos="fade-down" data-aos-delay="300">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-primary">Contact Us</li>
        </ol>
      </div>
    </div>
   <ContactUs/>
   <Footer/>
   </>
  )
}
