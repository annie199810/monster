import React from "react";
import "./smartsparx.css";
const SmartSparx = () => {
  const choice = [
    {
      name: "Smart Contract Development",
      info: "We understand the importance of smart contracts and own a development team who will provide full-suite smart contract development solutions. We adhere to the latest smart contracts guidelines and renders customizable solutions with excellent features.",
    },
    {
      name: "Smart Contract Audit",
      info: "Within the smart contract audit, the developers thoroughly check the code that is deployed for underwriting the smart contract terms. We are developing and auditing smart contracts on popular blockchain platforms. Our team inspects the smart contract security vulnerabilities beforehand.",
    },
    {
      name: "Smart Contract Optimization",
      info: "Smart contract transactions are done in the absence of third parties. While deploying an implementing smart contract, it will utilize gas cost that will be counted in the smart contract cost. To combat this problem, we will perform the optimization of smart contracts to fix gas issues and decrease network congestion.",
    },
    {
      name: "Smart Contract DApp Development",
      info: "A decentralized app comes with its own backend protocol known as smart contracts. This can be deployed on blockchain platforms such as Ethereum. We offer unmatched smart contract solutions that will ensure superb performance and quality of the DApp.",
    },
    {
      name: "Smart Contract DEX Development",
      info: "We create decentralized exchange smart contracts for big blockchain platforms that will cover aspects like end-user data privacy, business logic, data maintenance, etc. This will provide robust security in exchange business within the decentralized ECO systems.",
    },
    {
      name: "Smart Contract Digital Wallet",
      info: "We are proficient in building smart contracts on digital wallets in less time. This helps in allowing credible transactions without a third party. With some talented developers on-board, we can create multi-signature digital wallets that can securely store digital assets.",
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
            Our Winning Smart Contract
            <br /> Development Services
          </h1>
          <p>Choose our services to get accurately coded smart contracts</p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default SmartSparx;
