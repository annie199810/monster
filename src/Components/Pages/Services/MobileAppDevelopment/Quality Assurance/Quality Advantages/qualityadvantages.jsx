import React from "react";
import "./qualityadvantages.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const QualityAdvantages = () => {
  const Benefits = [
    {
      title: "End-To-End App Testing",
      info: "With adept and diligent mobile app testers in our team, we provide end-to-end app testing solutions ",
    },
    {
      title: "On-time Delivery/Cost-effective",
      info: "We provide cost-effective mobile application testing solutions and deliver every project on time",
    },
    {
      title: "Well-equipped Testing Lab",
      info: "Sparx IT Solutions has a well-equipped testing facility with testing tools, emulators, simulators, & real devices",
    },
    {
      title: "Experienced & Talented Developers",
      info: "Our team of application testing services professionals consists of well-experienced and knowledgeable mobile app testers.",
    },
    {
      title: "Quality Technical Support",
      info: "You can obtain quick and quality technical support as well as maintenance service for your mobile application",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="Quality-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="Quality-content">
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
          Advantages of Hybrid App
          <br /> Development
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
export default QualityAdvantages;
