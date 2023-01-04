import React from "react";
import "./walletdevelop.css";
import { Link } from "react-router-dom";
const WalletDevelopment = () => {
  return (
    <>
      <div className="wallet-dev">
        <div className="plethora-title">
          <h1>
            Our Plethora of Cryptocurrency Wallet
            <br /> Development Services
          </h1>
          <h2>
            Hire Our cryptocurrency wallet developer for world-class services
          </h2>
        </div>
        <div className="crypto-wallet">
          <div className="currency-wallet">
            <div className="wallet-bar"></div>
            <h2>Cryptocurrency Wallet Development</h2>
            <p>
              Our Cryptocurrency Wallet App Development Company have a team of
              professionals with proven expertise in building multiple
              cryptocurrency wallets like web, mobile, desktop, and hardware
              wallets. This has leveraged businesses to make the crypto payments
              simpler.
            </p>
          </div>
          <div className="payment-wallet">
            <div className="wallet-bar"></div>
            <h2>Payment Gateway Development</h2>
            <p>
              We can develop a cryptocurrency wallet that can accept payment on
              multiple gateways. This has enabled businesses to make payments
              across different payment platforms without any difficulty.
            </p>
          </div>
          <div className="integration-wallet">
            <div className="wallet-bar"></div>
            <h2>Wallet Integration</h2>
            <p>
              We offer extended support in the integration of cryptocurrency
              wallets with POS. This facilitates seamless fund transfer across
              all your products. The good part is that it eases out the process
              of making payments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletDevelopment;
