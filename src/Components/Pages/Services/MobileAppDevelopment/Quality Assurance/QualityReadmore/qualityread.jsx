import React from "react";
import "./qualityread.css";
const QualityReadmore = () => {
  const popup = [
    {
      read: "9 mins read",
      name: "Ultimate Guide To Ceowfunding Platform Developent in 2023",
      info: "Do you actually know the worth of your ideas? There are always risks involved in creating something unique. Every idea..",
      link: "read more",
    },
    {
      read: "9 mins read",
      name: "FinTech App Development Cost in 2023[Cost Breakdown Guide]",
      info: "FinTech apps utilize technology to simplify financial management. These apps make it simple for users to transfer and receive money...",
      link: "read more",
    },
    {
      read: "9 mins read",
      name: "Mobile App Development Trends for 2023",
      info: "Over the years, the mobile app development industry has changed a lot. Nowadays, the mobile app provides faster access to...",
      link: "read more",
    },
  ];

  const renderReadmore = popup.map((message) => {
    return (
      <>
        <div className="message-container">
          <div className="message">
            <div className="message-bar"></div>
            <h4>{message.read}</h4>
            <h2>{message.name}</h2>
            <h3>{message.info}</h3>
            <a href="#">
              <h6>{message.link}</h6>
            </a>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="message-read">{renderReadmore}</div>
    </>
  );
};
export default QualityReadmore;
