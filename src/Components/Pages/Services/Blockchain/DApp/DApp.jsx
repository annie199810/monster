import React from "react";
import "./DApp.css";
import { Link } from "react-router-dom";
const DApp = () => {
  return (
    <>
      <div className="hybrid">
        <div className="hybrid-info">
          <div className="hybrid-app">
            <div className="hybrid-title">
              <h1>DApp Development Company</h1>
            </div>
            <br />
            <div className="hybrid-bar"></div>
            <div className="hybrid-products">
              <div className="hybrid-items">
                <p>01</p>
                <p>DApp Porting</p>
              </div>
              <div className="hybrid-items">
                <p>02</p>
                <p>Decentralized Storage</p>
              </div>
              <div className="hybrid-items">
                <p>03</p>
                <p>Cloud Services</p>
              </div>

              <div className="hybrid-items">
                <p>04</p>
                <p>iOS & Android</p>
              </div>
              <div className="hybrid-items">
                <p>05</p>
                <p>Decentralized Exchange Development</p>
              </div>
              <div className="hybrid-items">
                <p>06</p>
                <p>User Interface</p>
              </div>
            </div>
            <div className="hybrid-end"></div>
          </div>

          <div className="hybrid-para">
            <div className="hybrid-small"></div>
            <h2>Providing Growth to Businesses With Custom DApp Services</h2>
            <p>
              Sparx IT Solutions is rendering peerless DApp development services
              to global clients. We are committed to building powerful,
              scalable, and extensible decentralized apps by using cutting-edge
              technology.
            </p>
            <button className="hybrid-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DApp;
