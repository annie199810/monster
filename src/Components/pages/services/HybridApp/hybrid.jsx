import React from "react";
import "./hybrid.css";
import { Link } from "react-router-dom";
const Hybrid = () => {
  return (
    <>
      <div className="hybrid">
        <div className="hybrid-info">
          <div className="hybrid-app">
            <div className="hybrid-title">
              <h1>
                Hybrid App Development
                <br /> Company
              </h1>
            </div>
            <div className="hybrid-bar"></div>
            <div className="hybrid-products">
              <div className="hybrid-items">
                <p>01</p>
                <p>IoT Based Apps</p>
              </div>
              <div className="hybrid-items">
                <p>02</p>
                <p>AR & VR</p>
              </div>
              <div className="hybrid-items">
                <p>03</p>
                <p>Multimedia</p>
              </div>

              <div className="hybrid-items">
                <p>04</p>
                <p>iOS & Android</p>
              </div>
              <div className="hybrid-items">
                <p>05</p>
                <p>Enterprise Apps</p>
              </div>
              <div className="hybrid-items">
                <p>06</p>
                <p>Native Development</p>
              </div>
            </div>
            <div className="hybrid-bar"></div>
          </div>
          <div className="hybrid-para">
            <h2>Delivering Efficient Hybrid App Development Services</h2>
            <p>
              Sparx IT Solutions is proficient in wearable app development with
              advanced technology integration. Our adept professionals are
              versed in this futuristic technology and contributing dedicatedly
              to the digital revolution. We offer high-end IoT solutions and
              techniques to deliver an app compatible with the latest wearable
              devices. We are a reputed wearable app development company and has
              catered to lots of clients around the world.
            </p>
            <button className="hybrid-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hybrid;
