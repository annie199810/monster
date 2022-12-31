import React from "react";
import "./smart.css";
import { Link } from "react-router-dom";
const Smart = () => {
  return (
    <>
      <div className="smartcontract">
        <div className="smart-info">
          <div className="smart-app">
            <div className="smart-title">
              <h1>Smart Contract Development Company</h1>
            </div>
            <br />
            <div className="smart-bar"></div>
            <div className="smart-products">
              <div className="smart-items">
                <p>01</p>
                <p>Automation</p>
              </div>
              <div className="smart-items">
                <p>02</p>
                <p>Trust</p>
              </div>
              <div className="smart-items">
                <p>03</p>
                <p>Savings</p>
              </div>

              <div className="smart-items">
                <p>04</p>
                <p>Accurancy</p>
              </div>
              <div className="smart-items">
                <p>05</p>
                <p>Backup</p>
              </div>
              <div className="smart-items">
                <p>06</p>
                <p>Autonomy</p>
              </div>
            </div>
            <div className="smart-end"></div>
          </div>

          <div className="smart-para">
            <div className="smart-small"></div>
            <h2>Delivering Efficient Smart Contract Development Services</h2>
            <p>
              Sparx IT Solutions is an eminent name in the realm of smart
              contract development and auditing. We are committed to developing
              unrivaled smart contracts on famous blockchain platforms such as
              Ethereum, TRON, EOS, Chaincode, and so on.
            </p>
            <button className="smart-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Smart;
