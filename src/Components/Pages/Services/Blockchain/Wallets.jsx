import React from "react";
import WalletDevelopment from "./Wallets/WalletDevelopment/walletdevelop";
import WalletFAQ from "./Wallets/WalletFAQ/walletfaq";
import WalletReadmore from "./Wallets/WalletReadmore/walletread";
import WalletRequest from "./Wallets/WalletRequest/walletrequest";
import WalletApp from "./Wallets/wallets";
import WalletAdvantages from "./Wallets/WalletsAdvantages/walletadvantage";
import WalletMap from "./Wallets/WalletsMap/walletmap";
import WalletSparx from "./Wallets/WalletsSparx/walletsparx";
import WalletTechnologies from "./Wallets/WalletTechnology/wallettech";
import WalletTestimonals from "./Wallets/WalletTestimonal/wallettestimonal";
const Wallets = () => {
  return (
    <>
      <WalletApp />
      <WalletMap />
      <WalletDevelopment />
      <WalletAdvantages />
      <WalletTechnologies />
      <WalletTestimonals />
      <WalletSparx />
      <WalletFAQ />
      <WalletReadmore />
      <WalletRequest />
    </>
  );
};
export default Wallets;
