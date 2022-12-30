import React from "react";
import "./HybridDevelop.css";
import { Link } from "react-router-dom";
const Development = () => {
  return (
    <>
      <div className="hybrid-dev">
        <div className="dev-title">
          <h1>
            Our Package of Hybrid App
            <br /> Development Services
          </h1>
          <h2>Our services are tailored to fulfill your needs</h2>
        </div>
        <div className="hybrid-stakes">
          <div className="react-native">
            <div className="stakes-bar"></div>
            <h2>
              React Native
              <br /> Development
            </h2>
            <p>
              Sparx IT Solutions uses this eminent hybrid mobile app framework
              for app development to take advantage of its exemplary fast
              development and robust performance. Our developers can take your
              business to a new height by creating a Hybrid app with React
              Native Framework.
            </p>
          </div>
          <div className="flutter-dev">
            <div className="stakes-bar"></div>
            <h2>Flutter App Development</h2>
            <p>
              Our developers aim to develop a Hybrid mobile app with the help of
              Flutter to deliver efficient cross-platform applications to the
              customer. Our applications offer high performance and scalable
              solutions under an allocated budget.
            </p>
          </div>
          <div className="maintenance">
            <div className="stakes-bar"></div>
            <h2>Maintenance and Support</h2>
            <p>
              We offer exceptional hybrid app maintenance and support services
              to ensure the optimal performance of the apps even in peak traffic
              times. Our developers resolve every issue you experience even
              after the launch of the app. We also provide responsive
              maintenance support for 24*7
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Development;
