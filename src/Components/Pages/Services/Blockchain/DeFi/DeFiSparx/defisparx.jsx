import React from "react";
import "./defisparx.css";
const DeFiSparx = () => {
  const choice = [
    {
      name: "Wallet",
      info: "As a DeFi wallet development company, we utilize the core parameters of decentralized computing to create an open transaction architecture for an under-banked or unbanked audience.",
    },
    {
      name: "Exchange",
      info: "Build highly scalable DeFi exchange development solutions for a variety of exchange processes i.e., margin trading, derivatives trading, and token swapping.",
    },
    {
      name: "Token&ICO",
      info: "Established ourselves as a prominent DeFi token development company to mint and crowdfund tokens through a digital infrastructure built with our DeFi development services.",
    },
    {
      name: "DAO",
      info: "Set up a decentralized organizational structure, eliminating the role of a third-party regulatory operation and engage in a community-oriented administration with our DAO solutions.",
    },
    {
      name: "Staking",
      info: "Create an app infrastructure that enables users to earn rewards for their stakes. As a DeFi staking platform development company, we design immersive UIs with reduced cognitive load.",
    },
    {
      name: "Lending & Borrowing",
      info: "Providing business-focused DeFi lending and borrowing platform development services that enable lenders and borrowers to utilize a transparent, autonomous, and secure process infrastructure.",
    },
    {
      name: "Gaming",
      info: "Leverage the unmatched benefits of built-in economies and user-engaging incentive models - all packed within a gamified app architecture.",
    },
    {
      name: "Insurance",
      info: "Being a leading DeFi insurance platform development services provider, we provide autonomous control to users, rather than a third-party regulator.",
    },
    {
      name: "Marketplace",
      info: "Join in the revolution of setting up an open and independent digital infrastructure for selling and purchasing real products, services, or digital collectibles.",
    },
    {
      name: "Identity",
      info: "Smooth user authentication with reduced collaterals fastens and simplifies the delivery of loan services, account security, and peer-to-peer sharing of data.",
    },
    {
      name: "Stablecoins",
      info: "Allow investors to earn high yields on your Stablecoins developed under a volatile pricing structure, enabling fast and easy payment solutions.",
    },
    {
      name: "Prediction Market",
      info: "Develop DeFi apps where business enthusiasts with the platform can monetize their understanding of the market by voting and trading the value of possible outcomes of the market.",
    },
    {
      name: "Crowdfunding",
      info: "As a DeFi crowdfunding platform development company, we build next-generation digital solutions to establish growth for your upcoming venture.",
    },
    {
      name: "Yield Farming",
      info: "Maximize your crypto returns by availing yield farming app development services to build robust and futuristic DeFi solutions with augmented yield.",
    },
    {
      name: "Prediction Market",
      info: "From tokenizing properties, creating mortgage solutions to identifying valuable property assets, avail our DeFi real estate platform development services.",
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
          <h1>DeFi Solutions We Deliver</h1>
          <p>
            DeFi has become a unified technology space for meeting futuristic
            finance goals.
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default DeFiSparx;
