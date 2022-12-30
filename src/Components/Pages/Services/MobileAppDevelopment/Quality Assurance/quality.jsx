import React from "react";
import "./quality.css";
import { Link } from "react-router-dom";
const Quality = () => {
  return (
    <>
      <div className="Quality">
        <div className="Quality-info">
          <div className="Quality-app">
            <div className="Quality-title">
              <h1>Mobile & Web Application Testing Company</h1>
            </div>
            <br />
            <div className="Quality-bar"></div>
            <div className="Quality-products">
              <div className="Quality-items">
                <p>01</p>
                <p>Latest Testing Tools</p>
              </div>
              <div className="Quality-items">
                <p>02</p>
                <p>Best Testing Methods</p>
              </div>
              <div className="Quality-items">
                <p>03</p>
                <p>Testing For All Kinds of Apps</p>
              </div>

              <div className="Quality-items">
                <p>04</p>
                <p>Experienced Team</p>
              </div>
              <div className="Quality-items">
                <p>05</p>
                <p>UI/UX Testing</p>
              </div>
              <div className="Quality-items">
                <p>06</p>
                <p>Localization Testing</p>
              </div>
            </div>
            <div className="Quality-end"></div>
          </div>

          <div className="Quality-para">
            <div className="Quality-small"></div>
            <h2>We Offer End-To-End Web & Mobile App Testing Services</h2>
            <p>
              Sparx IT Solutions is a renowned web & mobile app testing company.
              We provide comprehensive testing and quality assurance solutions
              as well as quick support and maintenance. We employ the best
              testing methodologies along with managed crowd testing and mobile
              app testing automation frameworks that enable us to reach maximum
              test capacity in the least possible time.
            </p>
            <button className="Quality-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quality;
