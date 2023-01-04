import React from "react";
import "./dappdevelop.css";
import { Link } from "react-router-dom";
const DAppDevelopment = () => {
  return (
    <>
      <div className="dapp-dev">
        <div className="dappdev-title">
          <h1>
            Why Should You Choose our DApp
            <br /> Development Services?
          </h1>
          <h2>
            Our DApp development team helps businesses to get a competitive edge
          </h2>
        </div>
        <div className="trained-dapp">
          <div className="dapp-developers">
            <div className="dapp-bar"></div>
            <h2>Trained DApp Developers</h2>
            <p>
              We are bestowed with experienced DApp developers who are apprised
              in modern development trends. They have relevant experience in
              creating flawless decentralized applications for the business size
              of all types.
            </p>
          </div>
          <div className="strong-portfolio">
            <div className="dapp-bar"></div>
            <h2>Strong Portfolio</h2>
            <p>
              Being a leading DApp development service provider, we have
              successfully completed multiple decentralized app development
              projects with a higher client satisfaction rate. Just have a look
              at our portfolio to know our competency.
            </p>
          </div>
          <div className="engagement-models">
            <div className="dapp-bar"></div>
            <h2>Affordable Engagement Models</h2>
            <p>
              Since every business has different requirements, we provide them
              cost-efficient hiring solutions. They can choose dedicated
              professionals to work on their projects on hourly, weekly, or
              monthly basis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DAppDevelopment;
