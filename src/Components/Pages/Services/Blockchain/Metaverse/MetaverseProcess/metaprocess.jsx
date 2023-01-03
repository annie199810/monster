import React from "react";
import "./metaprocess.css";
import process from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/process.svg";
const MetaverseProcess = () => {
  const app = [
    {
      title: "Share your vision",
      info: "Got big plans on Metaverse? Connect with our experts for a productive Q&A talk to turn things into reality.",
    },
    {
      title: "Validate sustainability",
      info: "Can you sustain your Metaverse idea in the market? All it takes is constructive discussion validating your plans.",
    },
    {
      title: "Design",
      info: "With clear project plans, you can build your Metaverse that features comprehensive interaction among all peers.",
    },
    {
      title: "Testing",
      info: "Indulge in a sophisticated functioning by testing the Metaverse app and environment on different standards.",
    },
    {
      title: "Deployment & maintenance",
      info: "Once you have a ready-to-use Metaverse, you can deploy and maintain the app through a streamlined process.",
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
        <h1>Our dApp Development Process</h1>
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
export default MetaverseProcess;
