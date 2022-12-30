import React from "react";
import DApp from "./DApp/DApp";
import DAppAdvantages from "./DApp/DAppAdvantages/dappadvantages";
import DAppDevelopment from "./DApp/DAppDeelopment/dappdevelop";
import DAppFAQ from "./DApp/DAppFAQ/dappfaq";
import DAppMap from "./DApp/DAppMap/dappmap";
import DAppProcess from "./DApp/DAppProcess/dappprocess";
import DAppReadmore from "./DApp/DAppReadmore/dappreadmore";
import DAppRequest from "./DApp/DAppRequestfees/dapprequestfees";
import DAppSparx from "./DApp/DAppSparx/dappsparx";
import DAppTechnologies from "./DApp/DAppTechnologies/dapptech";
import DAppTestimonals from "./DApp/DAppTestimonals/dapptestimonals";
const DAppdev = () => {
  return (
    <>
      <DApp />
      <DAppMap />
      <DAppSparx />
      <DAppAdvantages />
      <DAppTechnologies />
      <DAppTestimonals />
      <DAppDevelopment />
      <DAppProcess />
      <DAppFAQ />
      <DAppReadmore />
      <DAppRequest />
    </>
  );
};
export default DAppdev;
