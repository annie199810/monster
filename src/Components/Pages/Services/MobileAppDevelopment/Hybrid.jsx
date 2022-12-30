import React from "react";
import Hybrid from "../../../../Components/Pages/Services/MobileAppDevelopment/HybridApp/hybrid";
import Advantages from "./HybridApp/Advantages/Advantages";
import Development from "./HybridApp/Development/HybridDevelop";
import HybridMap from "./HybridApp/HybridMap/HybridMap";
import BrowserPortfolio from "./HybridApp/BrowsePortfolio/browse";
import HybridSparx from "./HybridApp/HybridSparx/Sparx";
import HybridProcess from "./HybridApp/Process/Hybridprocess";
import Frequently from "./HybridApp/Frequently/frequently";
import Readmore from "./HybridApp/Readmore/read";
import Requestfees from "./HybridApp/Requestfees/request";

const Datapack = () => {
  return (
    <>
      <Hybrid />
      <HybridMap />
      <Development />
      <Advantages />
      <BrowserPortfolio />
      <HybridSparx />
      <HybridProcess />
      <Frequently />
      <Readmore />
      <Requestfees />
    </>
  );
};
export default Datapack;
