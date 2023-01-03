import React from "react";
import "./nft.css";
import { Link } from "react-router-dom";
const NFTMarketplace = () => {
  return (
    <>
      <div className="nft">
        <div className="nft-info">
          <div className="nft-app">
            <div className="nft-title">
              <h1>NFT Marketplace Development Company</h1>
            </div>
            <br />
            <div className="nft-bar"></div>
            <div className="nft-products">
              <div className="nft-items">
                <p>01</p>
                <p>Transparency</p>
              </div>
              <div className="nft-items">
                <p>02</p>
                <p>Authencity</p>
              </div>
              <div className="nft-items">
                <p>03</p>
                <p>Auction Integration</p>
              </div>

              <div className="nft-items">
                <p>04</p>
                <p>Smart Contracts</p>
              </div>
              <div className="nft-items">
                <p>05</p>
                <p>Security & Compliances</p>
              </div>
              <div className="nft-items">
                <p>06</p>
                <p>Mult-Standard Support</p>
              </div>
            </div>
            <div className="nft-end"></div>
          </div>

          <div className="nft-para">
            <div className="nft-small"></div>
            <h2>Reshaping Businesses With NFT Marketplace Solutions</h2>
            <p>
              Sparx IT Solutions is a well-established NFT Marketplace
              development company serving clients from across the globe &
              different industry domains. The company has created secure,
              efficient, and revenue-generating Blockchain solutions.
            </p>
            <button className="nft-btn">Let's Discuss Your Idea</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NFTMarketplace;
