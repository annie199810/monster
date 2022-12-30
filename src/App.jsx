import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footer/Footer";
import Head from "./Components/Home/Header/Head";
import ContactPage from "./Components/Pages/Contact";
import DAppdev from "./Components/Pages/Services/Blockchain/DAppdev";
import DeFi from "./Components/Pages/Services/Blockchain/DeFi";
import SmartContracts from "./Components/Pages/Services/Blockchain/Smartcontract";
import Datapack from "./Components/Pages/Services/MobileAppDevelopment/Hybrid";
import Assurance from "./Components/Pages/Services/MobileAppDevelopment/Quality";
import Wearable from "./Components/Pages/Services/MobileAppDevelopment/Wearable";
import EnterpriseBlockchain from "./Components/Pages/Services/Blockchain/Enterprise";
function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/datapack" element={<Datapack />} />
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
