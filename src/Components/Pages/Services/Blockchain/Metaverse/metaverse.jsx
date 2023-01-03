import React from "react";
import "./metaverse.css";
import { Link } from "react-router-dom";
const MetaverseApp = () => {
  return (
    <>
      <div className="MetaverseApps">
        <div className="meta-info">
          <div className="meta-app">
            <div className="meta-title">
              <h1>Metaverse Development Company</h1>
            </div>
            <br />
            <div className="meta-bar"></div>
            <div className="meta-products">
              <div className="meta-items">
                <p>01</p>
                <p>Interactive experience</p>
              </div>
              <div className="meta-items">
                <p>02</p>
                <p>Decentralization</p>
              </div>
              <div className="meta-items">
                <p>03</p>
                <p>Tokenization</p>
              </div>

              <div className="meta-items">
                <p>04</p>
                <p>Wallet Integration</p>
              </div>
              <div className="meta-items">
                <p>05</p>
                <p>Multi-Layer Security</p>
              </div>
              <div className="meta-items">
                <p>06</p>
                <p>Interoperability</p>
              </div>
            </div>
            <div className="meta-end"></div>
          </div>

          <div className="meta-para">
            <div className="meta-small"></div>
            <h2>Build Your Universe With Metaverse</h2>
            <p>
              SparxIT is a premier technology solutions company designing and
              developing custom and enterprise Metaverse spaces and
              applications.
            </p>
            <button className="meta-btn">Connect With Metaverse App</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MetaverseApp;
