import React from "react";
import "./dappreadmore.css";
const DAppReadmore = () => {
  const popup = [
    {
      read: "5 mins read",
      name: "Your Ultimate Guide to Crypto Arbitrage Trading Bot:All you....",
      info: "When it comes to trading, it seems that risk is an indispensable part of it. However, arbitrage has been a...",
      link: "read more",
    },
    {
      read: "5 mins read",
      name: "Everything You Need to /know About Flash Loans in DeFi",
      info: "As per the latest data available as of March 29, 2022, lending was the highest valued segment on Ethereum Blockchain....",
      link: "read more",
    },
    {
      read: "5 mins read",
      name: "How Can Blockchain Technology Transform Logistics Industry",
      info: "The logistics industry is growing at a staggering pace each year. However, despite the lucrative payouts, companies are losing out...",
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
export default DAppReadmore;
