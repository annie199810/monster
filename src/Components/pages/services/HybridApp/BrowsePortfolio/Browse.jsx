import React from "react";
import "./Browse.css";
 import wonderfruit from "../../../../../assets/images/wonder-fruit.jpg";
 import carteckh from "../../../../../assets/images/carteckh.jpg";
import amnews from "../../../../../assets/images/am-news.jpg";

const Browser = () => {
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
    </>
  );
};
export default Browser;
