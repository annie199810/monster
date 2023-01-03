import React from "react";
import "./wallets.css";
import { Link } from "react-router-dom";
const WalletApp = () => {
  return (
    <>
      <div className="WalletApp">
        <div className="wallet-info">
          <div className="wallet-app">
            <div className="wallet-title">
              <h1>Cryptocurrency Wallet App Development Company</h1>
            </div>
            <br />
            <div className="wallet-bar"></div>
            <div className="wallet-products">
              <div className="wallet-items">
                <p>01</p>
                <p>Secure & Scalable</p>
              </div>
              <div className="wallet-items">
                <p>02</p>
                <p>Thorough Quality</p>
              </div>
              <div className="wallet-items">
                <p>03</p>
                <p>Fast Transcations</p>
              </div>

              <div className="wallet-items">
                <p>04</p>
                <p>QR Scanner</p>
              </div>
              <div className="wallet-items">
                <p>05</p>
                <p>2-Factor Authentication</p>
              </div>
              <div className="wallet-items">
                <p>06</p>
                <p>Customized Solution</p>
              </div>
            </div>
            <div className="wallet-end"></div>
          </div>

          <div className="wallet-para">
            <div className="wallet-small"></div>
            <h2>
              Providing Full-scale Cryptocurrency Wallet Development Services
            </h2>
            <p>
              At Sparx IT Solutions, we are committed to delivering secure
              storage and management of crypto for a longer span. Our crypto
              wallets have advanced payment integration solutions that provide
              flawless transaction facilities. We are the best-in-class
              Cryptocurrency Wallet App Development Company for all digital
              currencies transactions.
            </p>
            <button className="wallet-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletApp;
