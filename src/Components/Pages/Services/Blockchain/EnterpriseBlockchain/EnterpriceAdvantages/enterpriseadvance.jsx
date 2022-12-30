import React from "react";
import "./enterpriceadvance.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const EnterpriseAdvantages = () => {
  const Benefits = [
    {
      title: "Security",
      info: "We craft tamper-proof blockchains that members have the permission to access.",
    },
    {
      title: "Reliability",
      info: "Our developers build blockchain-built apps that generate trust while doing trading.",
    },
    {
      title: "Scalability",
      info: "We create blockchain solutions that are equipped with top features along with scalability.",
    },
    {
      title: "Improved Speed",
      info: "We build blockchain solutions that enhance the transactional speed between parties.",
    },
    {
      title: "Quality",
      info: "We utilize the best functionality of Blockchain to render high-quality solutions.",
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
        <h1>What Makes Us a Credible DeFi Development Company</h1>
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
export default EnterpriseAdvantages;
