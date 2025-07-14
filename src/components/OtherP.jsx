import React from "react";
import airplain from "../assets/distribution.png";
import securitycam from "../assets/security-camera.png";
import settings from "../assets/settings.png";

// Reusable card component
const ServiceCard = ({ image, title, description, alt }) => (
  <div className="col-12 col-sm-6 col-lg-4 d-flex" id="product">
    <div className="card text-center flex-fill h-100">
      <img
        src={image}
        alt={alt}
        className="mx-auto mt-4 img-fluid"
        style={{ width: "100px", height: "150px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

const OtherP = () => {
  const services = [
    {
      image: airplain,
      alt: "Logistics",
      title: "Logistics Importation",
      description:
        "We offer logistics and importation services to simplify global supply chains.",
    },
    {
      image: securitycam,
      alt: "Security",
      title: "Camera & Surveillance",
      description:
        "We deal in advanced camera systems like CCTV, IP cams, and motion sensors.",
    },
    {
      image: settings,
      alt: "Business",
      title: "Business & Trade",
      description:
        "Supporting business with tools, tech, and expert consultation.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard {...service} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OtherP;
