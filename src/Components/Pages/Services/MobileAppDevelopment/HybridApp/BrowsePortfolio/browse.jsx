import React from "react";
import "./browse.css";
import wonderfruit from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/wonderfruit.jpg";
import carteckh from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/carteckh.jpg";
import amnews from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/amnews.jpg";
import patrick from "../../../../../../assets/Images/Pages/Contact/patrick.jpg";
const BrowserPortfolio = () => {
  const gallery = [
    {
      image: wonderfruit,
      name: "Wonderfruit",
      info: "Automotive & Transport / iOS, Android, React Native",
      events: "Events / Schedule / Explore / Map",
    },
    {
      image: carteckh,
      name: "Carteckh",
      info: "Automotive & Transport / React js, Node js / MongoDB",
      events: "Listings / YMM Search / Rating & Review",
    },
    {
      image: amnews,
      name: "AM News",
      info: "Media & Entertainment / iOS , Android",
      events: "Articles / News Publishing",
    },
  ];
  const renderBrowser = gallery.map((picture) => {
    return (
      <>
        <div className="browsing">
          <img src={picture.image} alt="" />
          <h1>{picture.name}</h1>
          <h3>{picture.info}</h3>
          <h5>{picture.events}</h5>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="snap-app">
        <div className="browser-heading">
          <div className="exclusive">
            <h1>Created 500+ Exclusive Mobile Apps</h1>
            <button className="browser-btn">Browse Our Portfolio</button>
          </div>
          <div className="gall">{renderBrowser}</div>
        </div>
      </div>
      <div className="visiting-customers">
        <div className="customers-known">
          <h1>Know What Our Customers Say</h1>
          <p>Bringing the Best to Our Customers & Making Them the Happiest.</p>
          <div className="border-testimonal"></div>
          <div className="patrick-usa">
            <div className="viewer-details">
              <div className="viewer-img">
                <img src={patrick} alt="" />
              </div>
              <div className="viewerz">
                <p>Patrick Moriarty</p>
                <h2> United States</h2>
              </div>
            </div>
            <div className="side-border"></div>
            <div className="viewer-testimonals">
              <p>
                “The new site is excellent, receiving good feedback from its
                users that is reflected in an increase in business sales. All
                bugs were addressed with technical skill, while the new design
                is modern and attractive. The team was active and communicative,
                providing good, regular updates."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrowserPortfolio;
