import React from "react";
import "./exchangeadvantage.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const ExchangeAdvantages = () => {
  const Benefits = [
    {
      title: "Scalable Architecture",
      info: "We render scalable cryptocurrency exchange services that expand as business grows.",
    },
    {
      title: "Adaptability",
      info: "Our developed solutions are web and mobile compatible to ensure smooth user experience.",
    },
    {
      title: "Platform Stack",
      info: "We build decentralized exchanges using platforms like EOS, Stellar, Ethereum, and Hyperledger.",
    },
    {
      title: "Hot Wallet",
      info: "Our exchange solutions come with hot wallets that offer smooth transactions and secure storage.",
    },
    {
      title: "Multi-layer Security",
      info: "We leverage SSL, two-factor authentication, encryption, etc, to build highly secure solutions.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="excchange-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="exchange-content">
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
          Avail Multiple Benefits With Our
          <br /> Cryptocurrency Exchange Solutions
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
export default ExchangeAdvantages;
