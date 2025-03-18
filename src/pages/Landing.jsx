import Header from "../components/Header";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import TradingWidget from "../services/TradingWidget";
import "../bootstrap.css"



export default function Landing() {
  
  return (
    <div style={{overflow:"hidden"}}> 
      <Header />
      <Carousel />
      <div style={{padding:' 0 20px'}}>
      <About />
      <Services />
      <Projects />
      <Testimonial />
      
      <div
        style={{
          display: "grid",
          placeItems: "center", 
          backgroundColor: "#f8f9fa",
          marginBottom: "30px"
        }}
      >
        <TradingWidget />
      </div>
      <Faq />
      </div>
      <Footer />
    </div>
  );
}
