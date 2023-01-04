import React from "react";
import "./defiadvantages.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const DeFiAdvantages = () => {
  const Benefits = [
    {
      title: "Automation",
      info: "Carry out a smooth execution of automated financial infrastructure in a decentralized ecosystem.",
    },
    {
      title: "Interoperability",
      info: "Engage in a seamless cross-chain communication amongst the participating nodes in a DeFi network.",
    },
    {
      title: "Transparency",
      info: "Ensuring maximum transparent across transactions, data and code on the foundation of DeFi.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="defi-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="defi-content">
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
          What Makes Us a Credible DeFi
          <br /> Development Company
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
export default DeFiAdvantages;
