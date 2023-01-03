import React from "react";
import "./nftsparx.css";
const NFTSparx = () => {
  const choice = [
    {
      name: "NFT for Art",
      info: "Become a part of the NFT revolution by providing artists a platform to share their work with their audience at its right value and secured ownership.",
    },
    {
      name: "NFT For Celebrities",
      info: "Celebrities can now become a part of the NFT revolution by sharing their collectibles such as images, personal art, videos, and GIFs on a public NFT marketplace.",
    },
    {
      name: "NFT For Fashion Industry",
      info: "Introduce digital fashion and collectibles on your marketplace with rich user experience, advanced imagery, and cryptographic capabilities of NFT.",
    },
    {
      name: "NFT For Sports",
      info: "Enable sports professionals to share important sports moments, sports cards, video clips, and other digital collectibles in the form of NFT.",
    },
    {
      name: "NFT For Gaming",
      info: "Simplify the purchasing of unique or limited in-game assets e.g. avatars, cars, clothes, and weapons through an impactful NFT marketplace that meets the multilateral demands of users.",
    },
    {
      name: "NFT For Real Estate",
      info: "Revolutionize real estate trade by tendering the ownership of virtual lands listed through a secure and feature-rich infrastructure on the NFT marketplace.",
    },
    {
      name: "NFT For Music",
      info: "Allow musicians to cherish their collectibles, album incentives, or access to special live music streams without posing any threats or illegal claims.",
    },
    {
      name: "NFT For Video",
      info: "Rare moments, historic moments, exclusive music albums, sports moments, and art, there is a lot to offer in the form of tokenized videos on your NFT marketplace.",
    },
    {
      name: "NFT For Domain",
      info: "Trading of Blockchain domains is the new trend in NFT marketplace. No one wants to overlook the inclusion of the highly-valued commodities, domain names, on their NFT marketplaces. ",
    },
    {
      name: "NFT For Licensing",
      info: "Enhance the authentication process of Software products through unique digital certificates available in the form of non-fungible tokens.",
    },
    {
      name: "NFT For Content Subscription",
      info: "Content creators can monetize their content on a subscription-based NFT marketplace and can share their content directly with the NFT buyers. ",
    },
    {
      name: "Governance Token",
      info: "Carve your NFT marketplace into a community-driven use case i.e. DAO by introducing governance tokens. The platform would allow token holders to contribute to the empowerment and sustainable development of the DAO.",
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
            The Epitome of Quality-Oriented NFT
            <br /> Marketplace Products
          </h1>
          <p>
            Work with our team of NFT experts utilizing their command in
            Blockchain to the fullest.
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default NFTSparx;
