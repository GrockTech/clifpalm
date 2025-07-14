import React from "react";
import HeroImage from "../heroimage.jpg";
import image1 from "../assets/1.jpeg";
// import image2 from '../assets/2.jpeg'
import image3 from "../assets/3.jpeg";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";
import bg from "../assets/bg1.jpg";
import OtherP from "./OtherP";
import Autoslide from "./Autoslide";
import AboutP from "./AboutP";
import Location from "./Location";
import Management from "./Management";
import CTA from "./CTA";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div
      className=" container text-white text-center mb-8 "
      id="view"
      style={{
        background: `url(${bg}) no-repeat center center`,
        backgroundSize: "cover",
        height: "80vh",
      }}
    >
      <section className=" text-light p-5 text-center  text-sm-start" id="home">
        <div id="movehero" className="container mt-n3">
          {/* Flexbox for text and image side by side on medium+ screens */}
          <div className="d-sm-flex align-items-center justify-content-between m">
            {/* Left Side: Text and Call to Action */}
            <div>
              <h1>
                Your Logistics{" "}
                <span className="text-warning"> & Growth Partner</span>
              </h1>

              <p className="lead">
                Clifplam Group — Driving Excellence Across Industries{" "}
              </p>


              <button
                data-bs-toggle="modal"
                data-bs-target="#enroll"
                className="btn bg-black text-white btn-lg my-2"
              >
                Get Started
              </button>
            </div>

            {/* Right Side: Hero Image, hidden on extra small screens */}
            <img
              className="img-fluid w-50 px-5 d-none d-sm-block"
              src={HeroImage}
              alt="Young person coding on a laptop"
            />
          </div>
        </div>
      </section>
      <div id="givespace"></div>
      <section className="container mt-4 ">
        <div id="magin"></div>
        <div className="block">
          <OtherP />
          <Autoslide />
          <div className="container mt-26" id="service" >
            <div>
              <h2 className="text-black "> Products</h2>
              <p className="text-center text-black">
                we are expect in imports and exports.{" "}
              </p>
            </div>
            <div className="row row-cols-2">
              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image4} alt="caterpillar" className="img-fluid" />
                </div>
              </div>

              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image1} alt="caterpillar" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image3} alt="caterpillar" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="img-fluid p-2">
                  <img src={image5} alt="caterpillar" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <AboutP />
          <Location />
          <Management />
          <CTA />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Hero;
