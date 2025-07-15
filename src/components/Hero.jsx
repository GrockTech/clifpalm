import React, { useRef } from "react";
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
import { useState } from "react";
import { useEffect } from "react";
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";

const Hero = () => {
  // const navigate = useNavigate();
  const typewriterRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(false); // Reset
        requestAnimationFrame(() => {
          void typewriterRef.current.offsetWidth; // Reflow
          setTimeout(() => setAnimate(true), 50); // Delay re-trigger
        });
      }
    },
    { threshold: 0.5 }
  );

  const element = typewriterRef.current;
  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);


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
          <div className="d-sm-flex ms-0 align-items-center justify-content-between">
  <div className="mb-4 mb-sm-0"> {/* Adds bottom margin only on mobile */}
    <h1 
      ref={typewriterRef}
      className={`typewriter ${animate ? "animate" : ""} mb-3`} 
    >
      Your Logistics{" "}
      <span className="text-warning"> & <br/> Growth Partner</span>
    </h1>

    <p className={`lead ${animate ? "animate-delay" : ""} mt-3`}> {/* Adds spacing above paragraph */}
      Clifpalm Group — Driving Excellence Across Industries
    </p>

              
              <button
                onClick={() => {
                  const section = document.getElementById("service");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn bg-black text-white btn-lg my-2 hover-effect"
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
          <div className="container mt-26" id="service">
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
