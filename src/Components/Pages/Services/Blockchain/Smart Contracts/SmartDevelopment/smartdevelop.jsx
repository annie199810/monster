import React from "react";
import "./smartdevelop.css";
import { Link } from "react-router-dom";
const SmartDevelopment = () => {
  return (
    <>
      <div className="hybrid-dev">
        <div className="dev-title">
          <h1>
            Why Choose Sparx IT Solutions for
            <br /> Smart Contract Development?
          </h1>
          <h2>We are a renowned smart contract development company.</h2>
        </div>
        <div className="hybrid-stakes">
          <div className="react-native">
            <div className="stakes-bar"></div>
            <h2>Experienced Team</h2>
            <p>
              With some experienced developers on-board, we have successfully
              completed several smart contract development projects. They
              maintain a constant pace with the latest technology trends to
              provide high-grade results.
            </p>
          </div>
          <div className="flutter-dev">
            <div className="stakes-bar"></div>
            <h2>Reasonable Hiring Plans</h2>
            <p>
              Since every project has different requirements, we provide them
              with varied engagement models. The clients can opt for
              professionals based on an hourly, weekly, or monthly basis
            </p>
          </div>
          <div className="maintenance">
            <div className="stakes-bar"></div>
            <h2>Clear Communication</h2>
            <p>
              A crystal clear communication between clients and the development
              team leads to successful results. That’s why we provide them
              timely progress reports to ensure our clients that their project
              has been handled in the smoothest way possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmartDevelopment;
