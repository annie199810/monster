import React from "react";
import "./smart.css";
import { Link } from "react-router-dom";
const Smart = () => {
  return (
    <>
      <div className="hybrid">
        <div className="hybrid-info">
          <div className="hybrid-app">
            <div className="hybrid-title">
              <h1>Smart Contract Development Company</h1>
            </div>
            <br />
            <div className="hybrid-bar"></div>
            <div className="hybrid-products">
              <div className="hybrid-items">
                <p>01</p>
                <p>Automation</p>
              </div>
              <div className="hybrid-items">
                <p>02</p>
                <p>Trust</p>
              </div>
              <div className="hybrid-items">
                <p>03</p>
                <p>Savings</p>
              </div>

              <div className="hybrid-items">
                <p>04</p>
                <p>Accurancy</p>
              </div>
              <div className="hybrid-items">
                <p>05</p>
                <p>Backup</p>
              </div>
              <div className="hybrid-items">
                <p>06</p>
                <p>Autonomy</p>
              </div>
            </div>
            <div className="hybrid-end"></div>
          </div>

          <div className="hybrid-para">
            <div className="hybrid-small"></div>
            <h2>Delivering Efficient Smart Contract Development Services</h2>
            <p>
              Sparx IT Solutions is an eminent name in the realm of smart
              contract development and auditing. We are committed to developing
              unrivaled smart contracts on famous blockchain platforms such as
              Ethereum, TRON, EOS, Chaincode, and so on.
            </p>
            <button className="hybrid-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Smart;
