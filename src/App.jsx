import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Home/Footer/Footer";
import Head from "./Components/Home/Header/Head";
import Services from "./Components/pages/services/service";
import Home from "./Components/home";
import Ecom from "./Components/pages/services/ecom";
import Datapack from "./Components/pages/services/hybrid";
import Serving from "./Components/pages/services/design";
import Portfolio from "./Components/pages/work/portfolio";
function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ecom" element={<Ecom />} />
        <Route path="/datapack" element={<Datapack />} />
        <Route path="/webdesign" element={<Serving />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
