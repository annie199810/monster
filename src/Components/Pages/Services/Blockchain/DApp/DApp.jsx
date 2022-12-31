import React from "react";
import "./DApp.css";
import { Link } from "react-router-dom";
const DApp = () => {
  return (
    <>
      <div className="dapp">
        <div className="dapp-info">
          <div className="dapp-app">
            <div className="dapp-title">
              <h1>DApp Development Company</h1>
            </div>
            <br />
            <div className="dapp-bar"></div>
            <div className="dapp-products">
              <div className="dapp-items">
                <p>01</p>
                <p>DApp Porting</p>
              </div>
              <div className="dapp-items">
                <p>02</p>
                <p>Decentralized Storage</p>
              </div>
              <div className="dapp-items">
                <p>03</p>
                <p>Cloud Services</p>
              </div>

              <div className="dapp-items">
                <p>04</p>
                <p>iOS & Android</p>
              </div>
              <div className="dapp-items">
                <p>05</p>
                <p>Decentralized Exchange Development</p>
              </div>
              <div className="dapp-items">
                <p>06</p>
                <p>User Interface</p>
              </div>
            </div>
            <div className="dapp-end"></div>
          </div>

          <div className="dapp-para">
            <div className="dapp-small"></div>
            <h2>Providing Growth to Businesses With Custom DApp Services</h2>
            <p>
              Sparx IT Solutions is rendering peerless DApp development services
              to global clients. We are committed to building powerful,
              scalable, and extensible decentralized apps by using cutting-edge
              technology.
            </p>
            <button className="dapp-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DApp;
