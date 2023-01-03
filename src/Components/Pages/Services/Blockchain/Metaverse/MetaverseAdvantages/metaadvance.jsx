import React from "react";
import "./metaadvance.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const MetaverseAdvantages = () => {
  const Benefits = [
    {
      title: "AR Compatible",
      info: "Our expertise in building enterprise-oriented Metaverse solutions has led us to utilize AR capabilities in our deliverables.",
    },
    {
      title: "Advanced VR",
      info: "Evolving space of immersive design technology, we are adapting advanced VR solutions to ensure an enriched experience.",
    },
    {
      title: "Digital Economies",
      info: "Implementing futuristic solutions, i.e., DeFi, NFTs, and Blockchain, our clients get one step closer to a fully-fledged decentralized economy.",
    },
    {
      title: "Secure Storage",
      info: "To sustain ourselves in complex and transformative infrastructure, we have prioritized building and utilizing secure storage solutions.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="hybrid-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="benefits">
              <h2>{adding.title}</h2>
              <h3>{adding.info}</h3>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="advantages">
        <h1>
          Why Choose Us as Your Metaverse
          <br /> Development Partner
        </h1>
        <div className="add-benefits">
          <div className="benefits-img">{renderAdd}</div>
          <div className="bene-fits">
            <img src={benefits} alt="" width="600px" height="400px" />
          </div>
        </div>
      </div>
    </>
  );
};
export default MetaverseAdvantages;
