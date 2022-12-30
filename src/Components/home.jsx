import React from "react";
import Hero from "../Components/Home/Heroslide/hero"
import Accla from"../Components/Home/Acclamations/accla"
import Motto from "../Components/Home/motto/motto"
import Web from "../Components/Home/web/web"
import Block from "../Components/Home/ReshapingCards/block"
import Class from "../Components/Home/Recognition/reco"
import Stakes from "../Components/Home/Stakeholders/stake";
import About from "../Components/Home/Testimonals/about";
import From from "../Components/Home/Developmentcost/from"
const Home = () => {
  return <>
  <Hero/>
  <Accla/>
   <Motto/>
      <Web/>
      <Block/>
      <Class/> 
      <Stakes/>
      <About/>
      <From/>
  </>;
};
export default Home;
