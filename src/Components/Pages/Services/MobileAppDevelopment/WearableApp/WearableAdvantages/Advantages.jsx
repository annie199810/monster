import React from "react";
import "./Advantages.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const Advantages = () => {
  const Benefits = [
    {
      title: " Agile Development Process",
      info: " We have adopted an agile development methodology that offers high-quality solutions to our customers.",
    },
    {
      title: "Utility Tools",
      info: "We have integrated utility tools such as maps & navigations, calculators, timers, and more for wearable devices..",
    },
    {
      title: "High-end Technology",
      info: "Our developers stay updated with the latest technologies in order to offer optimum solutions to meet your requirements.",
    },
    {
      title: "Seamless Functioning",
      info: "We assure your wearable app works efficiently irrespective of the wearable device.",
    },
    {
      title: "On-time Delivery",
      info: "Our developers will deliver tailor-made solutions for your wearable app without a delay in the decided time.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="wearable-benefits">
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
        <h1>Top Benefits of our Wearable App Development</h1>
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
export default Advantages;
