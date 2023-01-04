import React from "react";
import "./smartadvance.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const SmartAdvantages = () => {
  const Benefits = [
    {
      title: "Scalable Solutions",
      info: "We develop smart contract solutions with the best features and scalability.",
    },
    {
      title: "Bug-free Solutions",
      info: "We render flawless smart contract security code with full safety and flexibility.",
    },
    {
      title: "Technical Skill Set",
      info: "Our developers have command on the advanced tech stack for smart contract development.",
    },
    {
      title: "Reliability",
      info: "We build smart contracts that offer a secure transactional experience to the users.",
    },
    {
      title: "Optimized Solutions",
      info: "We provide optimized smart contract solutions that help in wasting less Ethereum gas.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="smart-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="smart-content">
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
          Advantages of Choosing Our DApp
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
export default SmartAdvantages;
