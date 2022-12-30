import React from "react";
import "./HybridMap.css";
import clutch from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/clutch.svg";
import goodfirms from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/Goodfirm.svg";
import yourstory from "../../../../../../assets/Icons/pages/Services/App Development/Hybrid App/story.svg";
import { Link } from "react-router-dom";
const HybridMap = () => {
  <Link to="/Map"></Link>;
  return (
    <>
      <div className="accla">
        <div className="Acclamations-title">
          <h1>Acclamations</h1>
          <p>Listed among top-rank service providers</p>
        </div>
        <div className="img-clutch">
          <div className="accla-clutch">
            <img src={clutch} alt="" width="70px" height="20px" />
          </div>
          <div className="clutch-text">
            <p>Top App Developers In India</p>
          </div>
        </div>
        <div className="img-goodfirms">
          <div className="accla-goodfirms">
            <img src={goodfirms} alt="" width="134px" height="20px" />
          </div>
          <div className="goodfirm-text">
            <p>Top Blockchain Development Companies in USA</p>
          </div>
        </div>
        <div className="img-yourstory">
          <div className="accla-yourstory">
            <img src={yourstory} alt="" width="98px" height="20px" />
          </div>
          <div className="yourstory-text">
            <p>Most-Trusted Android App Development Companies</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HybridMap;
