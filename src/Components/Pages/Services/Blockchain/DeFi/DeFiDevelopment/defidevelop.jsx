import React from "react";
import "./defidevelop.css";
import { Link } from "react-router-dom";
const DeFiDevelopment = () => {
  return (
    <>
      <div className="defi-dev">
        <div className="defidev-title">
          <h1>
            An Array of Our DeFi Development
            <br /> Services
          </h1>
          <h2>We deliver cutting-edge DeFi solutions meeting the end goals.</h2>
        </div>
        <div className="defi-discovery">
          <div className="discovery-dev">
            <div className="defi-bar"></div>
            <h2>Discovery</h2>
            <p>
              Ideate materials, collectibles, virtual lands, and a lot more into
              digitally subscribed assets by analyzing the overall project
              potential.
            </p>
          </div>
          <div className="MVP-dev">
            <div className="defi-bar"></div>
            <h2>MVP</h2>
            <p>
              Drive growth with no burdensome time and money investments through
              our DeFi MVP development services.
            </p>
          </div>
          <div className="continous-dev">
            <div className="defi-bar"></div>
            <h2>Continous Development</h2>
            <p>
              Utilize our development expertise to build robust DeFi
              applications facilitating fast-paced, effective, and continuous
              delivery of codes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeFiDevelopment;
