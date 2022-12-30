import React from "react";
import Smart from "./Smart Contracts/smart";
import SmartAdvantages from "./Smart Contracts/SmartAdvantages/smartadvance";
import SmartDevelopment from "./Smart Contracts/SmartDevelopment/smartdevelop";
import SmartFAQ from "./Smart Contracts/SmartFAQ/smartfaq";
import SmartMap from "./Smart Contracts/Smartmap/smartmap";
import SmartReadmore from "./Smart Contracts/SmartReadmore/smartread";
import SmartRequest from "./Smart Contracts/SmartRequestFees/smartrequest";
import SmartSparx from "./Smart Contracts/SmartSparx/smartsparx";
import SmartTechnologies from "./Smart Contracts/SmartTechnology/smarttech";
import SmartTestimonals from "./Smart Contracts/SmartTestimonal/smarttestimonal";
const SmartContracts = () => {
  return (
    <>
      <Smart />
      <SmartMap />
      <SmartSparx />
      <SmartAdvantages />
      <SmartTechnologies />
      <SmartTestimonals />
      <SmartDevelopment />
      <SmartFAQ />
      <SmartReadmore />
      <SmartRequest />
    </>
  );
};
export default SmartContracts;
