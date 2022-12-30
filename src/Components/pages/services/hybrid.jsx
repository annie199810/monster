import React from "react";
import Hybrid from "../services/HybridApp/hybrid";
import Development from "../services/HybridApp/HybridPackages/develop";
 import Map from "../services/HybridApp/Map/Map";
 import Add from "../services/HybridApp/Advantages/Advantages";
 import Browser from "../services/HybridApp/BrowsePortfolio/Browse";
import Testimonals from "../services/HybridApp/testimonal/testimonal";
 import Sparx from "../services/HybridApp/Hybridsparx/sparx";
 import Process from "../services/HybridApp/hybridapp/hybridapp";
// import Frequently from "../services/HybridApp/Frequently/frequently";
// import Readmore from "../services/HybridApp/Readmore/read";
// import Requestfees from "../services/HybridApp/Requestfees/requestfees"
const Datapack = () => {
  return (
    <>
      <Hybrid />
       <Map /> 
       <Development />
       <Add />
        <Browser />
        {/* <Testimonals /> 
       <Sparx />
        <Process />
       {/* <Frequently />  */}
      {/* <Readmore /> */}
      {/* <Requestfees />   */}
    </>
  );
};
export default Datapack;