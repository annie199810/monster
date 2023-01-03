import React from "react";
import "./walletadvantage.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const WalletAdvantages = () => {
  const Benefits = [
    {
      title: "Quality Assurance",
      info: "We offer superior Blockchain wallet development services with 100% satisfaction.",
    },
    {
      title: "Regular Updates",
      info: "Our high-end Cryptocurrency Wallet App Development Company keeps it’s clients updated with the project’s progress status timely.",
    },
    {
      title: "Superb Product",
      info: "We build a feature-packed digital wallet that is foremost for businesses.",
    },
    {
      title: "Transparency",
      info: "We provide complete transparency to our clients throughout the development.",
    },
    {
      title: "Reliable",
      info: "We offer a safe and secure cryptocurrency wallet development service to our clients.",
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
          Perks of Choosing Our Cryptocurrency Wallet App Development Service
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
export default WalletAdvantages;
