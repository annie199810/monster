import React from "react";
import "./wearable.css";
import { Link } from "react-router-dom";
const WearableApp = () => {
  return (
    <>
      <div className="wearable">
        <div className="wearable-info">
          <div className="wearable-app">
            <div className="wearable-title">
              <h1>Wearable App Development Company</h1>
            </div>
            <br />
            <div className="wearable-bar"></div>
            <div className="wearable-products">
              <div className="wearable-items">
                <p>01</p>
                <p>IoT Based Apps</p>
              </div>
              <div className="wearable-items">
                <p>02</p>
                <p>AR & VR</p>
              </div>
              <div className="wearable-items">
                <p>03</p>
                <p>Multimedia</p>
              </div>

              <div className="wearable-items">
                <p>04</p>
                <p>iOS & Android</p>
              </div>
              <div className="wearable-items">
                <p>05</p>
                <p>Enterprise Apps</p>
              </div>
              <div className="wearable-items">
                <p>06</p>
                <p>Native Development</p>
              </div>
            </div>
            <div className="wearable-end"></div>
          </div>
          <div className="wearable-para">
            <div className="wearable-small"></div>
            <h2>Delivering Efficient Wearable App Development Services</h2>
            <p>
              Sparx IT Solutions is proficient in wearable app development with
              advanced technology integration. Our adept professionals are
              versed in this futuristic technology and contributing dedicatedly
              to the digital revolution. We offer high-end IoT solutions and
              techniques to deliver an app compatible with the latest wearable
              devices. We are a reputed wearable app development company and has
              catered to lots of clients around the world.
            </p>
            <button className="wearable-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WearableApp;
