import React from "react";
import "./nftadvamce.css";
import benefits from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/benefits.svg";
const NFTAdvantages = () => {
  const Benefits = [
    {
      title: "Tradability",
      info: "Establish advanced utilization of tools, bidding & selling capabilities through robust NFT marketplace solutions.",
    },
    {
      title: "Interoperability",
      info: "Indulge in smooth and flawless compatibility in the process of operating multiple chains of NFT trading.",
    },
    {
      title: "Liquidity",
      info: "We create a lightweight strategy for NFT marketplace platform development that complements the liquidity goals of the trading process.",
    },
    {
      title: "Scarcity ",
      info: "Maintain the financial properties of all NFTs purchased by users through a package of advanced Blockchain tools.",
    },
    {
      title: "Standardization",
      info: "Acquire a credible set of compliances that standardize your NFT marketplace with evolving industry trends.",
    },
  ];

  const renderAdd = Benefits.map((adding) => {
    return (
      <>
        <div className="nft-benefits">
          <div className="title-benefits">
            <div className="benefits-bar"></div>
            <div className="add-bar"></div>
            <div className="nft-content">
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
        <h1>
          Avail Multiple Benefits With Our
          <br /> Cryptocurrency Exchange Solutions
        </h1>
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
export default NFTAdvantages;
