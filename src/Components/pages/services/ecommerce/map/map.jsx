import React from "react";
import "./map.css";
import { Link } from "react-router-dom";
const Map = () => {
  <Link to="/map"></Link>;
  const texts = [
    { title: "Clutch", text: "Top App Developers in India" },
    { title: "GoodFirms", text: "Top Blockchain Development Companies in USA" },
    {
      title: "YOURSTORY",
      text: "Most-Trusted Android App Development Companies",
    },
  ];

  const renderMap = texts.map((texts) => {
    return (
      <> 
        <div className="card">
          <h2>{texts.title}</h2>

          <div className="appp">
            <p>{texts.text}</p>
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
export default Map;
