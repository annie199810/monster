import React from "react";
import "./metasparx.css";
import { Link } from "react-router-dom";
const MetaverseSparx = () => {
  return (
    <>
      <div className="hybrid-dev">
        <div className="dev-title">
          <h1>
            What We Can Do For You in Metaverse
            <br /> Development?
          </h1>
          <h2>
            We deliver unified technology space for meeting transforming
            consumer goals.
          </h2>
        </div>
        <div className="hybrid-stakes">
          <div className="react-native">
            <div className="stakes-bar"></div>
            <h2>Infrastructure Development</h2>
            <p>
              Deploy your Metaverse in a reliable, high-bandwidth, decentralized
              network facilitating various data operations through a consistent
              process architecture.
            </p>
          </div>
          <div className="flutter-dev">
            <div className="stakes-bar"></div>
            <h2>Technology Enablement</h2>
            <p>
              Metaverse has a large and extensive scope of technological
              improvements in its structure. You can build design-oriented apps
              showcasing immersive experiences.
            </p>
          </div>
          <div className="maintenance">
            <div className="stakes-bar"></div>
            <h2>Simplified Value Transfer</h2>
            <p>
              Smoothen cross-channel trades of digital assets with utmost
              credibility in a peer-to-peer transactions environment in
              Metaverse.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MetaverseSparx;
