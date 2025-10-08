import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const TestimonialFull = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      quote:
        "Investing with FlipStack has been a game-changer for me. Their expert guidance and strategic approach have significantly grown my portfolio while ensuring my investments remain secure. I highly recommend them to anyone looking for smart, profitable, and risk-managed financial growth.",
      name: "Emily Dawson",
      profession: "Entrepreneur",
      image: "/testimonial-1.jpg",
    },
    {
      quote:
        "I have trusted FlipStack with my investments for years, and they have consistently delivered exceptional results. Their expertise, transparency, and commitment to client success make them stand out in the industry. A truly reliable partner in wealth growth!",
      name: "Sophia Reynolds",
      profession: "Financial Analyst",
      image: "/testimonial-2.jpg",
    },
    {
      quote:
        "Choosing FlipStack was the best financial decision I've ever made. Their strategic insights and risk management have helped me achieve steady and impressive returns. I feel confident knowing my investments are in expert hands.",
      name: "Daniel Thompson",
      profession: "Real Estate Investor",
      image: "/testimonial-3.jpg",
    },
    {
      quote:
        "I was initially hesitant about investing, but FlipStack made the entire process seamless and stress-free. Their team took the time to understand my goals and provided clear, honest advice. Thanks to them, I’ve seen steady growth and feel more secure about my financial future.",
      name: "Michael Carter",
      profession: "Small Business Owner",
      image: "/undraw_profile.svg",
    },
  ];

  // Configuration for react-multi-carousel (One item at a time)
  const responsive = {
    allScreens: { breakpoint: { max: 4000, min: 0 }, items: 1 },
  };

  return (
    <div className="container-fluid testimonial bg-light py-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4" data-aos="fade-left" data-aos-delay="100">
            <div className="h-100 rounded">
              <h4 className="text-primary">Our Feedbacks</h4>
              <h1 className="display-4 mb-4">Clients are Talking</h1>
              <p className="mb-4 lh-lg">
                At FlipStack, we take immense pride in the trust our clients place in us, and their feedback speaks volumes about our
                commitment to excellence. Time and again, we have received glowing reviews from investors who appreciate our strategic
                approach, transparency, and dedication to securing their financial growth. Their success stories and positive experiences
                drive us to keep raising the bar, ensuring that every investment decision leads to long-term prosperity and financial security.
              </p>
            </div>
          </div>
          <div className="col-xl-8">
            <Carousel
              className="testimonial-carousel"
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              arrows={true}
              showDots={true}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  className="bg-white rounded"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 200 + 300}`} // Adjust delay dynamically
                  key={index}
                >
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3"></i>
                    </div>
                    <p className="mt-4 lh-lg">{testimonial.quote}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>{testimonial.name}</h5>
                      <p className="mb-0">{testimonial.profession}</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src={testimonial.image}
                        className="rounded-circle p-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          border: "1px solid",
                          borderColor: "var(--bs-primary)",
                        }}
                        alt={testimonial.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFull;
