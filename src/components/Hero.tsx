import React from "react";
import Image from "next/image";
import "../app/styles/Hero.css";
const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-grid">
        <div className="hero-pic">
          <Image src={"/mypic.png"} width={650} height={350} alt="pic" />
        </div>

        <div className="hero-right">
          <div className="hero-color">
            <p
              className="hero-text"
              data-aos="zoom-in-up"
            >
              I'm
            </p>
            <p
              className="hero-text"
              data-aos="zoom-in-up"
            >
              M. Jamil
            </p>
            <p
              className="hero-text"
              data-aos="zoom-in-up"
            >
              Raza Attari
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
