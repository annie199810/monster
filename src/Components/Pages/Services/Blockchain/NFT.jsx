import React from "react";
import NFTMarketplace from "./NFT/nft";
import NFTAdvantages from "./NFT/NFTAdvantages/nftadvance";
import NFTDevelopment from "./NFT/NFTDevelopment/nftdevelop";
import NFTFAQ from "./NFT/NFTFAQ/nftfaq.jsx";
import NFTMap from "./NFT/NFTMap/nftmap";
import NFTProcess from "./NFT/NFTProcess/nftprocess";
import NFTReadmore from "./NFT/NFTReadmore/nftread";
import NFTRequest from "./NFT/NFTRequest/nftrequest";
import NFTSparx from "./NFT/NFTSparx/nftsparx";
import NFTTechnologies from "./NFT/NFTTechnology/nfttech";
import NFTTestimonals from "./NFT/NFTTestimonal/nfttestimonal";
const NFT = () => {
  return (
    <>
      <NFTMarketplace />
      <NFTMap />
      <NFTDevelopment />
      <NFTAdvantages />
      <NFTTechnologies />
      <NFTTestimonals />
      <NFTSparx />
      <NFTProcess />
      <NFTFAQ />
      <NFTReadmore />
      <NFTRequest />
    </>
  );
};
export default NFT;
