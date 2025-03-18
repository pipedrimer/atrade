


// const Caro = () => {

  

//   const options = {
//     loop: true, // Disables infinite loop
//     margin: 10,
//     // Enables navigation
    
//     dots: false, // Disables dots (optional)
//     autoplay: true,
//     smartSpeed: 1500,
//     autoplayTimeout: 10000,
//     items: 1,
//     navText: [
//       '<button style="background-color:#102147; color:white; border:none; padding:8px 12px; font-size:16px; cursor:pointer; border-radius:5px; outline:none; "><</button>',
//       '<button style="background-color:#102147; color:white; border:none; padding:8px 12px; font-size:16px; cursor:pointer; border-radius:5px; outline:none; ">></button>',
//     ],
//   };

//   return (
//     <OwlCarousel className="header-carousel owl-theme" {...options}>
//       {/* Carousel Item 1 */}
//       <div className="header-carousel-item">
//         <div className="header-carousel-item-img-1">
//           <img
//             src="img/carousel-1.jpg"
//             className="img-fluid w-100"
//             alt="Image 1"
//           />
//         </div>
//         <div className="carousel-caption">
//           <div className="carousel-caption-inner text-start p-3">
//             <h1
//               className="display-4 text-capitalize text-white mb-4 animate__animated animate__fadeInUp"
//               style={{ animationDelay: "1.3s" }}
//             >
//               The World's Leading Partner in Profitable Investments.
//             </h1>
//             <p
//               className="mb-5 fs-5 animate__animated animate__fadeInUp"
//               style={{ animationDelay: "1.5s" }}
//             >
//               Emphasizes our global reputation for excellence and success. We
//               are committed to providing innovative, high-yield solutions that
//               help clients achieve their financial ambitions.
//             </p>
//             <Link
//               className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 animate__animated animate__fadeInUp"
//               style={{ animationDelay: "1.7s" }}
//               to="/signup"
//             >
//               Join Now
//             </Link>
//             <a
//               className="btn btn-dark rounded-pill py-3 px-5 mb-4 animate__animated animate__fadeInUp"
//               style={{ animationDelay: "1.7s" }}
//               href="#"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Item 2 */}
//       <div className="header-carousel-item">
//         <div className="header-carousel-item-img-2">
//           <img
//             src="img/carousel-2.jpg"
//             className="img-fluid w-100"
//             alt="Image 2"
//           />
//         </div>
//         <div className="carousel-caption">
//           <div className="carousel-caption-inner text-center p-3">
//             <h1 className="display-4 text-capitalize text-white mb-4">
//               Your Vision, Our Expertise, Unmatched Returns
//             </h1>
//             <p className="mb-5 fs-5">
//               Highlights our dedication to turning your financial goals into
//               reality. With tailored strategies and a focus on maximizing
//               profitability.
//             </p>
//             <a
//               className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
//               href="#"
//             >
//               Join Now
//             </a>
//             <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Carousel Item 3 */}
//       <div className="header-carousel-item">
//         <div className="header-carousel-item-img-3">
//           <img
//             src="img/carousel-3.jpg"
//             className="img-fluid w-100"
//             alt="Image 3"
//           />
//         </div>
//         <div className="carousel-caption">
//           <div className="carousel-caption-inner text-end p-3">
//             <h1 className="display-4 text-capitalize text-white mb-4">
//               Empowering Growth, Protecting Investments
//             </h1>
//             <p className="mb-5 fs-5">
//               Reflects our commitment to driving financial success while
//               ensuring the security of your assets
//             </p>
//             <a
//               className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
//               href="#"
//             >
//               Join Now
//             </a>
//             <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     </OwlCarousel>
//   );
// };

// export default Caro;


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  // Configuration for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel  className="header-carousel owl-theme"
      responsive={responsive}
      infinite={true} // Enables infinite loop
      autoPlay={true} // Enables auto scrolling
      autoPlaySpeed={5000} // Autoplay interval (5 seconds)
      arrows={false} // Hides navigation arrows
      showDots={false} // Hides navigation dots
      renderButtonGroupOutside={false} // No external buttons
      
    >
      {/* Carousel Item 1 */}
      <div className="header-carousel-item ">
        <div className="header-carousel-item-img-1">
          <img src="/carousel-1.jpg" className="img-fluid w-100" alt="Image 1" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-start p-3">
            <h1 className="display-4 text-capitalize text-white mb-4">
              The World's Leading Partner in Profitable Investments.
            </h1>
            <p className="mb-5 fs-5">
              Emphasizes our global reputation for excellence and success. We are committed to providing innovative, high-yield solutions.
            </p>
            <Link className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" to="/signup">
              Join Now
            </Link>
            <Link className="btn btn-dark rounded-pill py-3 px-5 mb-4" to="/services">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Item 2 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img-2">
          <img src="/carousel-2.jpg" className="img-fluid w-100" alt="Image 2" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-center p-3">
            <h1 className="display-4 text-capitalize text-white mb-4">
              Your Vision, Our Expertise, Unmatched Returns
            </h1>
            <p className="mb-5 fs-5">
              Highlights our dedication to turning your financial goals into reality with tailored strategies.
            </p>
            <Link className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" to="/signup">
              Join Now
            </Link>
            <Link className="btn btn-dark rounded-pill py-3 px-5 mb-4" to="/services">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Item 3 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img-3">
          <img src="/carousel-3.jpg" className="img-fluid w-100" alt="Image 3" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-end p-3">
            <h1 className="display-4 text-capitalize text-white mb-4">
              Empowering Growth, Protecting Investments
            </h1>
            <p className="mb-5 fs-5">
              Reflects our commitment to driving financial success while ensuring the security of your assets.
            </p>
            <Link className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" to="/signup">
              Join Now
            </Link>
            <Link className="btn btn-dark rounded-pill py-3 px-5 mb-4" to="/services">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
