import React from "react";
import "./Sparx.css";
const HybridSparx = () => {
  const choice = [
    {
      name: "Efficient integration",
      info: "Our programmers are apprised of the latest technology update and induce it to develop an advanced Hybrid app by our coding professionals. We can offer our services in a seamless integration that will help to work with different devices like iOS, Android, Desktop & laptop",
    },
    {
      name: "Outcome Focused",
      info: "Whether you want to establish an online presence from scratch or branch out its expansion on multiple platforms, Sparx IT Solutions will render an efficient cross platform app development that fits in your budget",
    },
    {
      name: "Competing Pricing",
      info: "Whether you want to establish an online presence from scratch or branch out its expansion on multiple platforms, Sparx IT Solutions will render an efficient Hybrid application that fits in your budget.",
    },
    {
      name: "Agile Delivery Methods",
      info: "We follow an agile development process to deliver quality products within a set time period. With our experienced professionals and research techniques, we ensure to complete the work on or before time.",
    },
    {
      name: "Customer Satisfication",
      info: "We keep our clients at a top priority and keep them updated with every phase of the development process. We listen to their expectations for the project and then draw a plan-of-action for the same.",
    },
    {
      name: "Offline Use",
      info: "We will create a Hybrid Application for you that would seamlessly run even with a poor internet connection. The data can get stored offline in a device’s API. Sparx IT Solutions assures optimum results with our cost-efficient prices.",
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
            Why Choose Sparx IT Solutions for a <br />
            Hybrid App Development Company?
          </h1>
          <p>
            Choose Us to get ahead of competitors and get top-rated services
            <br /> We know there is fierce competition out there, but here’s why
            choosing us is a<br /> beneficial choice
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default HybridSparx;
