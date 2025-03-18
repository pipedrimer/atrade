// import  { useEffect } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./projects.css"

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
//   }, []);

//   // Project data
//   const projects = [
//     {
//       imgSrc: "img/projects1.png",
//       icon: "fas fa-chart-line",
//       category: "Business Growth",
//       title: "Business Strategy And Investment Planning Growth Consulting",
//     },
//     {
//       imgSrc: "img/projects2.png",
//       icon: "fas fa-signal",
//       category: "Marketing Strategy",
//       title: "Product Sailing Marketing Strategy For Improve Business",
//     },
//     {
//       imgSrc: "img/projects3.png",
//       icon: "fas fa-signal",
//       category: "Marketing Strategy",
//       title: "Product Sailing Marketing Strategy For Improve Business",
//     },
//     {
//         imgSrc: "img/projecs3.png",
//         icon: "fas fa-signal",
//         category: "Marketing Strategy",
//         title: "Product Sailing Marketing Strategy For Improve Business",
//       }
//   ];

//   // Function to render project items
//   const renderProjects = () =>
//     projects.map((project, index) => (
//       <div className="project-item h-100" key={index}>
//         <div className="project-img">
//           <img
//             src={project.imgSrc}
//             className="img-fluid w-100 rounded"
//             alt={project.title}
//           />
//         </div>
//         <div className="project-content bg-light rounded p-4">
//           <div className="project-content-inner">
//             <div className="project-icon mb-3">
//               <i className={`${project.icon} fa-4x text-primary`}></i>
//             </div>
//             <p className="text-dark fs-5 mb-1">{project.category}</p>
//             <a href="#" className="h4">
//               {project.title}
//             </a>
            
//           </div>
//         </div>
//       </div>
//     ));

//   return (
//     <div className="container-fluid project">
//       <div className="container">
//         {/* Section Title */}
//         <div
//           className="text-center mx-auto pb-5"
//           data-aos="fade-up"
//           style={{ maxWidth: "800px" }}
//         >
//           <h4 className="text-primary">Our Projects</h4>
//           <h1 className="display-4">Explore Our Latest Projects</h1>
//         </div>

//         {/* Owl Carousel */}
//         <div data-aos="fade-up">
//           <OwlCarousel
//             className="project-carousel"
//             loop
//             margin={20}
//             nav
//             dots={true}
//             dotsClass="owl-dots custom-dots" 
//             autoplay
//             responsive={{
//               0: { items: 1 },
//               768: { items: 2 },
//               1024: { items: 3 },
//             }}
//           >
//             {renderProjects()}
//           </OwlCarousel>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  // Project data
  const projects = [
        {
          imgSrc: "/projects1.png",
          icon: "fas fa-chart-line",
          category: "$500M+ Assets Under Management",
          title: "Over the last decade, we have grown our clients’ investments, reaching over $500 million in assets under management",
        },
        {
          imgSrc: "/projects2.png",
          icon: "fas fa-signal",
          category: "Wealth Management & Retirement Success",
          title: "Helped 1,000+ clients achieve financial independence through structured investment plans",
        },
        {
          imgSrc: "/projects3.png",
          icon: "fas fa-chart-line",
          category: "Consistently Beating Market Benchmarks",
          title: "Our investment portfolios have outperformed the S&P 500 and Nasdaq Composite by 3-5% annually ",
        },
        {
            imgSrc: "/project-4.png",
            icon: "fas fa-signal",
            category: "Successful Private Equity Investments",
            title: "We have funded and scaled over 20 high-potential startups, with several reaching valuations exceeding $100 million, providing exceptional returns for early investors.",
          }
      ];

  // Configuration for react-multi-carousel
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const renderProjects = () =>
        projects.map((project, index) => (
          <div className="project-item p-4 h-2" key={index}>
            <div className="project-img">
              <img
                src={project.imgSrc}
                className="img-fluid w-100 rounded"
                alt={project.title}
              />
            </div>
            <div className="project-content bg-light rounded p-4">
              <div className="project-content-inner">
                <div className="project-icon mb-3">
                  <i className={`${project.icon} fa-4x text-primary`}></i>
                </div>
                <h2 className="text-dark  mb-1">{project.category}</h2>
                <a href="#" className="h6 mt-2">
                  {project.title}
                </a>
                
              </div>
            </div>
          </div>
        ));

  return (
    <div className="container-fluid project">
      <div className="container">
        {/* Section Title */}
        <div
          className="text-center mx-auto pb-5"
          data-aos="fade-up"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Projects</h4>
          <h1 className="display-4">Explore Our Latest Projects</h1>
        </div>

        {/* Multi Carousel */}
        <div data-aos="fade-up">
          <Carousel
            className="project-carousel"
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            arrows={true}
            showDots={true}
          >
             {renderProjects()}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;

