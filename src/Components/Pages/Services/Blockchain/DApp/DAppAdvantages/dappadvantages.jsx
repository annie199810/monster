import React from "react";
import "./dappadvantages.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const DAppAdvantages = () => {
  const Benefits = [
    {
      title: "Security",
      info: "We build DApps that offer a top level of security while transactions.",
    },
    {
      title: "Speed & Reliablity",
      info: "We can create DApps that provide fast and cheaper transactions",
    },
    {
      title: "Superb UI/UX",
      info: "Our designers can develop simple and easy to use DApp",
    },
    {
      title: "Robust Experience",
      info: "Our developers have expertise in creating a robust experience with DApps",
    },
    {
      title: "Higher Satisfaction",
      info: "We build technically advanced DApps to render greater satisfaction.",
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
        <h1>Advantages of Choosing Our DApp Development Company</h1>
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
export default DAppAdvantages;
