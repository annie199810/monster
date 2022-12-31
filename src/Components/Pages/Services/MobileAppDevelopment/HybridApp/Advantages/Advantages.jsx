import React from "react";
import "./Advantages.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const Advantages = () => {
  const Benefits = [
    {
      title: "Attractive UX/UI",
      info: " Our designers create a Hybrid app that is aesthetically appealing and interactive",
    },
    {
      title: "Fast speed",
      info: "The Hybrid application that we create loads faster and provides seamless functionality. They are efficient without the support of network communication",
    },
    {
      title: "User experience",
      info: "Our experts develop a hybrid application with an optimum user experience guarantee.",
    },
    {
      title: "Latest Technology",
      info: "We have proficient professionals who keep themselves updated all the time with the latest trends and technology.",
    },
    {
      title: "Quality Work",
      info: "We offer a premium Hybrid application development service that ensures the growth of your business.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="hybrid-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="hybrid-content">
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
        <h1>Advantages of Hybrid App Development</h1>
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
