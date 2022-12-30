import React from "react";
import "./Enterprise.css";
import { Link } from "react-router-dom";
const Enterprise = () => {
  return (
    <>
      <div className="hybrid">
        <div className="hybrid-info">
          <div className="hybrid-app">
            <div className="hybrid-title">
              <h1>Enterprise Blockchain Development Company</h1>
            </div>
            <br />
            <div className="hybrid-bar"></div>
            <div className="hybrid-products">
              <div className="hybrid-items">
                <p>01</p>
                <p>Token</p>
              </div>
              <div className="hybrid-items">
                <p>02</p>
                <p>Wallet</p>
              </div>
              <div className="hybrid-items">
                <p>03</p>
                <p>Exchange</p>
              </div>

              <div className="hybrid-items">
                <p>04</p>
                <p>DAO</p>
              </div>
              <div className="hybrid-items">
                <p>05</p>
                <p>Smart Contract</p>
              </div>
              <div className="hybrid-items">
                <p>06</p>
                <p>Marketplace</p>
              </div>
            </div>
            <div className="hybrid-end"></div>
          </div>

          <div className="hybrid-para">
            <div className="hybrid-small"></div>
            <h2>
              Providing Growth-driven Enterprise Blockchain Development Services
            </h2>
            <p>
              Sparx IT Solutions is a recognized enterprise Blockchain
              development firm that has been serving businesses in various
              industries. We deliver secure and robust products or solutions by
              harnessing the potential of this advanced technology.
            </p>
            <button className="hybrid-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Enterprise;
