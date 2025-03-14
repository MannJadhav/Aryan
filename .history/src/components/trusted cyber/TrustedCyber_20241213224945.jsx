// import React from "react";
import "./trustedcyber.css";
import backgroundImage from "../../assets/planning-success-bg.png"; // Update the path accordingly
import MyCustomButton from "../button/CommonButton";
import { Link } from "react-router-dom";

const TrustedCyber = () => {
  return (
    <div
      className="trusted-container"
      data-aos="fade-up"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="trusted-content" data-aos="fade-up">
          <div className="trusted-left">
            <p className="trusted-head">
              Trusted web development <br /> experts delivering <br /> robust solutions.
            </p>
            <p className="trusted-txt">
						Rely on our experienced team for reliable web development services. We're committed to building high-performance, user-friendly websites and applications, ensuring seamless digital experiences for your business.
            </p>
          </div>
          <div className="trusted-right">
            <Link to={"/services"}>
              <MyCustomButton name={"View All Services"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCyber;
