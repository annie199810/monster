import React from "react";
import DeFiApp from "./DeFi/defi";
import DeFiAdvantages from "./DeFi/DeFiAdvantages/defiadvantages";
import DeFiDevelopment from "./DeFi/DeFiDevelopment/defidevelop";
import DeFiFAQ from "./DeFi/DeFiFAQ/defifaq";
import DeFiMap from "./DeFi/DeFiMap/defimap";
import DeFiProcess from "./DeFi/DeFiProcess/defiprocess";
import DeFiReadmore from "./DeFi/DeFiReadmore/defiread";
import DeFiRequest from "./DeFi/DeFiRequestFees/defirequest";
import DeFiSparx from "./DeFi/DeFiSparx/defisparx";
import DeFiTechnologies from "./DeFi/DeFiTechnology/defitech";
import DeFiTestimonals from "./DeFi/DeFiTestimonals/defitestimonal";
const DeFi = () => {
  return (
    <>
      <DeFiApp />
      <DeFiMap />
      <DeFiDevelopment />
      <DeFiAdvantages />
      <DeFiTechnologies />
      <DeFiTestimonals />
      <DeFiSparx />
      <DeFiProcess />
      <DeFiFAQ />
      <DeFiReadmore />
      <DeFiRequest />
    </>
  );
};
export default DeFi;
