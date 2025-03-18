import Pricing from "../components/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import "../bootstrap.css"

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="container-fluid bg-breadcrumb">
      <div className="bg-breadcrumb-single"></div>
      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
        <h4 className="text-white display-4 mb-4" data-aos="fade-down" data-aos-delay="100">
          Pricing
        </h4>
        <ol className="breadcrumb justify-content-center mb-0" data-aos="fade-down" data-aos-delay="300">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-primary">Pricing</li>
        </ol>
      </div>
    </div>
      <Pricing/>
      <Footer/>
    </>
  );
}
