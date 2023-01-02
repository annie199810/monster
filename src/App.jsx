import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footer/Footer";
import Head from "./Components/Home/Header/Head";
import Services from "./Components/pages/services/service";
import Home from "./Components/home";
import Ecom from "./Components/pages/services/ecom";
import Serving from "./Components/pages/services/design";
import Portfolio from "./Components/pages/work/portfolio";
import Wearable from "./Components/Pages/Services/MobileAppDevelopment/Wearable";
import DAppdev from "./Components/Pages/Services/Blockchain/DAppdev";
import SmartContracts from "./Components/Pages/Services/Blockchain/Smartcontract";
import DeFi from "./Components/Pages/Services/Blockchain/DeFi";
import ContactPage from "./Components/Pages/Contact";
import HybridApps from "./Components/Pages/Services/MobileAppDevelopment/Hybrid";
import Assurance from "./Components/Pages/Services/MobileAppDevelopment/Quality";
import EnterpriseBlockchain from "./Components/Pages/Services/Blockchain/Enterprise";
function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ecom" element={<Ecom />} />
        <Route path="/HybridApps" element={<HybridApps />} />
        <Route path="/webdesign" element={<Serving />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/wear" element={<Wearable />} />
        <Route path="/quality" element={<Assurance />} />
        <Route path="/dapp" element={<DAppdev />} />
        <Route path="/smart" element={<SmartContracts />} />
        <Route path="/defi" element={<DeFi />} />
        <Route path="/enterprise" element={<EnterpriseBlockchain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
