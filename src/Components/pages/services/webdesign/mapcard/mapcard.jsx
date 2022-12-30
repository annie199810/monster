import React from "react";
import "./mapcard.css";
import { Link } from "react-router-dom";
const Maps = () => {
  <Link to="/map"></Link>;
  const textcard = [
    { title: "Clutch", text: "Top App Developers in India" },
    { title: "GoodFirms", text: "Top Blockchain Development Companies in USA" },
    {
      title: "YOURSTORY",
      text: "Most-Trusted Android App Development Companies",
    },
  ];

  const renderMap = textcard.map((textcard) => {
    return (
      <>
        <div className="cards">
          <h2>{textcard.title}</h2>

          <div className="apps">
            <p>{textcard.text}</p>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="section">
        <div className="hiii">
          <h1>Acclamations</h1>
          <p>
            Listed among top-rank service
            <br />
            providers
          </p>
        </div>
        {renderMap}
      </div>
    </>
  );
};
export default Maps;
