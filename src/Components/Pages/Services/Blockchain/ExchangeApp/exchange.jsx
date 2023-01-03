import React from "react";
import "./exchange.css";
import { Link } from "react-router-dom";
const ExchangeApp = () => {
  return (
    <>
      <div className="ExchangeApps">
        <div className="exchange-info">
          <div className="exchange-app">
            <div className="exchange-title">
              <h1>Cryptocurrency Exchange Development Company</h1>
            </div>
            <br />
            <div className="exchange-bar"></div>
            <div className="exchange-products">
              <div className="exchange-items">
                <p>01</p>
                <p>Robust Admin Panel</p>
              </div>
              <div className="exchange-items">
                <p>02</p>
                <p>Impregnable Security</p>
              </div>
              <div className="exchange-items">
                <p>03</p>
                <p>Multi-language Support</p>
              </div>

              <div className="exchange-items">
                <p>04</p>
                <p>Data encryption</p>
              </div>
              <div className="exchange-items">
                <p>05</p>
                <p>Customized Solution</p>
              </div>
              <div className="exchange-items">
                <p>06</p>
                <p>2-Factor Authentication</p>
              </div>
            </div>
            <div className="exchange-end"></div>
          </div>

          <div className="exchange-para">
            <div className="exchange-small"></div>
            <h2>
              Delivering End-to-End Cryptocurrency Exchange Development Services
            </h2>
            <p>
              Sparx IT Solutions specializes in rendering fast, scalable, and
              robust cryptocurrency exchange software development solutions. We
              cater to diverse requirements with our customized solutions. This
              makes us a leading Cryptocurrency exchange development company.
            </p>
            <button className="exchange-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExchangeApp;
