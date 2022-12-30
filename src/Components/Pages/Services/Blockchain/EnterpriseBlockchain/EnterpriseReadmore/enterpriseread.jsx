import React from "react";
import "./enterpriseread.css";
const EnterpriseReadmore = () => {
  const popup = [
    {
      read: "4 mins read",
      name: "Top 5 NFT Marketplace Alternatives to OpenSea",
      info: "OpenSea is the largest NFT marketplace worldwide to trade various crypto collectibles and non-fungible tokens (NFTs), such as Art, Music,...",
      link: "read more",
    },
    {
      read: "5 mins read",
      name: "Your Ultimate Guide to Crypto Arbitrage Trading Bot:All You....",
      info: "When it comes to trading, it seems that risk is an indispensable part of it. However, arbitrage has been a...",
      link: "read more",
    },
    {
      read: "5 mins read",
      name: "Everything You Need to Know About Flash Loans in DeFi",
      info: "As per the latest data available as of March 29, 2022, lending was the highest valued segment on Ethereum Blockchain....",
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
export default EnterpriseReadmore;
