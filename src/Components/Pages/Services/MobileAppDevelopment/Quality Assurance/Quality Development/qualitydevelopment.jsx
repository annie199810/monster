import React from "react";
import "./qualitydevelopment.css";
import { Link } from "react-router-dom";
const QualityDevelopment = () => {
  return (
    <>
      <div className="MobileApp-dev">
        <div className="Mobiledev-title">
          <h1>
            Factors That Make Us A Unique Web & <br />
            Mobile App Testing Company
          </h1>
          <h2>
            Keep you brand reputation high by ensuring quality across your site
            At Sparx IT Solutions, we provide unrivaled mobile & web application
            testing services to ensure that your app remains secure,
            competitive, and flawless for good.
          </h2>
        </div>
        <div className="Real-device">
          <div className="Device-Coverage">
            <div className="Real-bar"></div>
            <h2>Real Device Coverage</h2>
            <p>
              Unlike the other mobile app testing service providers that heavily
              utilize simulator software to assess the quality and performance
              of an app, we test applications on real devices too. Our testing
              experts run a quality check of apps on Android and iOS devices
              before delivery.
            </p>
          </div>
          <div className="Smart-Testing">
            <div className="Real-bar"></div>
            <h2>Smart Testing Tools</h2>
            <p>
              We utilize the best mobile application testing strategy & varied
              tools such as Kobiton, Appium, Calabash, Testdroid, Selendroid,
              Robotium, MonkeyTalk, etc. Our experts also have cloud-based
              mobile app testing solutions to assess the quality, performance,
              and security of your app.
            </p>
          </div>
          <div className="Facility">
            <div className="Real-bar"></div>
            <h2>Best-In-Class Testing Facility</h2>
            <p>
              We have the best testing facility with our talented app testing
              professionals who are highly-experienced and equipped with
              advanced technical skills. Our testing experts are well-versed in
              various tools and we have world-class app testing facilities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default QualityDevelopment;
