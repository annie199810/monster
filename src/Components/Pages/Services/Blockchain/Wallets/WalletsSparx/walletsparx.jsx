import React from "react";
import "./walletsparx.css";
const WalletSparx = () => {
  const choice = [
    {
      name: "Highly Customized Solution",
      info: "We are experts in the cryptocurrency exchange platform development that can be integrated without any hassle. This helps in providing error-free virtual transactions to prevent fraudulent activities.",
    },
    {
      name: "Professional Team",
      info: "We have staffed efficient Cryptocurrency wallet developer who are apprised with the latest emerging trends. They have prior experience in building a fast, secure, and robust cryptocurrency wallet for many businesses.",
    },
    {
      name: "Swift Response",
      info: "We have a talented and enthusiastic team of cryptocurrency wallet developers. They are highly responsive and resolve all the issues at the earliest. Thus, helping businesses to achieve their goals faster.",
    },
    {
      name: "Always on Time",
      info: "We hold a good reputation for delivering projects within a stipulated time frame. Our cryptocurrency developers study the project’s requirements in detail and work in a systematic way to render great results in less time.",
    },
    {
      name: "Technical Excellence",
      info: "We have skilled cryptocurrency developers on board. They maintain a pace with all the latest trends in Bitcoin wallet app development. This has helped them to stay one step ahead of the competitors.",
    },
    {
      name: "Cost-effective",
      info: "We offer quality cryptocurrency wallet development services at an affordable price. We have different pricing models that are designed by keeping in mind the diverse business requirements of the clients.",
    },
  ];

  const renderSparx = choice.map((choose) => {
    return (
      <>
        <div className="sparx-dev">
          <div className="sparx-cards">
            <div className="sparx-bar"></div>
            <h2>{choose.name}</h2>
            <h3>{choose.info}</h3>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="competitors">
        <div className="competitors-title">
          <h1>
            Why You Should Pick Our
            <br /> Cryptocurrency Wallet Development
            <br /> Company?
          </h1>
          <p>
            We are proficient in creating highly secure cryptocurrency wallet
            appss
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default WalletSparx;
