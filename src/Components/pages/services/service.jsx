import React from "react";
import Mobile from "./appdev/mobileapp";
 import Map from "./appdev/map/map";
 import Develop from "./appdev/Development/development";
 import Creat from "./appdev/Creat/creat";
 import Growth from "./appdev/Growth/growth";
 import Steps from "./appdev/Steps/steps";
 import Boost from "./appdev/Boost/boost";
import Request from "./appdev/Request/request";
import Make from "./appdev/make/make";
 //import Frequently from "./appdev/FAQ/faq";
const Services = () => {
  return (
    <>
      <Mobile />
       <Map />
      <Develop />
       <Make />
       <Creat/>
      <Growth />
      <Steps />
      {/* <Frequently/> */}
      <Boost />
      <Request /> 
      
    </>
  );
};
export default Services;
