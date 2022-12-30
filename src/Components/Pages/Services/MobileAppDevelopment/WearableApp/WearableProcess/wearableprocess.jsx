import React from "react";
import "./wearableprocess.css";
import process from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/process.svg";
const WearableProcess = () => {
  const app = [
    {
      title: "Discovery",
      info: "We start by requirement gathering, competitive analysis, finding business goals, etc., to discover your project feasibility",
    },
    {
      title: "Design",
      info: "After understanding the requirement, we create high fidelity wireframes and prototypes if applicable for your website design",
    },
    {
      title: "Development",
      info: "We implement all your website pages and content in a CMS. All the webpages and other website components are developed.",
    },
    {
      title: "Testing",
      info: "Your website goes through a stringent test procedure where various aspects, including appearance & performance, are tested.",
    },
    {
      title: "Deployment",
      info: "After creating and testing the website successfully, we help you deploy your site on any desired platform and complete the setup.",
    },
  ];

  const renderProcess = app.map((adding) => {
    return (
      <>
        <div className="hybrid-process">
          <div className="title-process">
            <div className="process-bar"></div>
            <div className="app-bar"></div>
            <div className="process">
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
      <div className="appdev-title">
        <h1>Our Hybrid App Development Services</h1>
        <div className="app-process">
          <div className="process-img">
            <img src={process} alt="" width="600px" height="400px" />
          </div>
          <div className="benefits-img">{renderProcess}</div>
        </div>
      </div>
    </>
  );
};
export default WearableProcess;
