

const Services = () => {
  return (
    <div className="container-fluid service py-5 px-5">
      <div className="py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-6">
            Catering for your Investment Needs
          </h1>
        </div>
        <div className="row g-4 justify-content-center text-center">
          {[
            {
              imgSrc: "/service-1.jpg",
              title: "Business Strategy",
              delay: "0.1s",
              content: "We help businesses develop winning strategies, optimize operations, and achieve sustainable growth through expert insights and market analysis."
            },
            {
              imgSrc: "/service-2.jpg",
              title: "Consultancy & Advice",
              delay: "0.3s",
              content: "Expert financial and business advice tailored to your needs, helping you make informed decisions and maximize success."
            },
            {
              imgSrc: "/service-3.jpg",
              title: "Investments Planning",
              delay: "0.5s",
              content: "Strategic investment planning to grow your wealth, manage risks, and secure long-term financial stability."
            },
            {
              imgSrc: "/service-4.jpg",
              title: "Private Investment",
              delay: "0.7s",
              content: "Exclusive investment opportunities designed to build personal wealth with tailored financial strategies."
            }
          ].map((service, index) => (
            <div
              className="col-md-6  col-xl-3 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={service.imgSrc}
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a
                      href="#"
                      className="h4 mb-4 d-inline-flex text-start"
                    >
                      <i className="fas fa-donate fa-2x me-2"></i>
                      {service.title}
                    </a>
                    <p className="mb-4">
                      {service.content}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <a
              className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
              data-wow-delay="0.1s"
              href="#"
            >
              Services More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
