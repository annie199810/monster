import React from "react";
import "./defi.css";
import { Link } from "react-router-dom";
const DeFiApp = () => {
  return (
    <>
      <div className="defi">
        <div className="defi-info">
          <div className="defi-app">
            <div className="defi-title">
              <h1>DeFi Development Company</h1>
            </div>
            <br />
            <div className="defi-bar"></div>
            <div className="defi-products">
              <div className="defi-items">
                <p>01</p>
                <p>Token</p>
              </div>
              <div className="defi-items">
                <p>02</p>
                <p>Wallet</p>
              </div>
              <div className="defi-items">
                <p>03</p>
                <p>Exchange</p>
              </div>

              <div className="defi-items">
                <p>04</p>
                <p>DAO</p>
              </div>
              <div className="defi-items">
                <p>05</p>
                <p>Smart Contract</p>
              </div>
              <div className="defi-items">
                <p>06</p>
                <p>Marketplace</p>
              </div>
            </div>
            <div className="defi-end"></div>
          </div>

          <div className="defi-para">
            <div className="defi-small"></div>
            <h2>
              Ascertain Growth With Decentralized Finance App Development
              Services
            </h2>
            <p>
              Sparx IT Solutions is a credible DeFi app development company with
              extensive clientele, including diversified niches and sizes of
              businesses.
            </p>
            <button className="defi-btn">Contact A Defi Expert</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeFiApp;
