import React from "react";
import Frequently from "./WearableApp/FrequentlyQuestions/Frequently";
import WearableApp from "./WearableApp/wearable";
import Advantages from "./WearableApp/WearableAdvantages/Advantages";
import Browser from "./WearableApp/WearableBrowser/BrowserPortfolio";
import WearableDevelop from "./WearableApp/WearableDevelopment/Development";
import WearableMap from "./WearableApp/WearableMap/werablemap";
import WearableSparx from "./WearableApp/WearableSparx/wearablesparx";
import WearableProcess from "./WearableApp/WearableProcess/wearableprocess";
import Readmore from "./WearableApp/WearableReadmore/readmore";
import Requestform from "./WearableApp/WearableRequestfees/requestfees";

const Wearable = () => {
  return (
    <>
      <WearableApp />
      <WearableMap />
      <WearableSparx />
      <Advantages />
      <Browser />
      <WearableDevelop />
      <Frequently />
      <WearableProcess />
      <Readmore />
      <Requestform />
    </>
  );
};
export default Wearable;
