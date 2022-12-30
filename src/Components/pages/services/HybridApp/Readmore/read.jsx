import React from "react";
import "./read.css";
const Readmore = () => {
  const popup = [
    {
      read: "5 mins read",
      name: "How Much Does It Cost to Develop a SaaS Product?",
      info: "Today, SaaS products are booming and have a massive demand in the market. After the coronavirus outbreak at the beginning...",
      link: "read more",
    },
    {
      read: "5 mins read",
      name: "Social Media App Development Cost in 2023 (Real Figures)",
      info: "One of the most lucrative and well-targeted markets is social media. All the popular social media apps, including Facebook, Twitter,...",
      link: "read more",
    },
    {
      read: "5 mins read",
      name: "Wellness App Development Cost, All You Need to Know",
      info: "From physical health to mental wellness, people these days are striving for a healthy lifestyle. They are practicing everything that...",
      link: "read more",
    },
  ];

  const renderReadmore = popup.map((message) => {
    return (
      <>
        <div className="message-container">
          <div className="message">
            <div className="message-bar"></div>
            <h4>{message.read}</h4>
            <h2>{message.name}</h2>
            <h3>{message.info}</h3>
            <a href="#">
              <h6>{message.link}</h6>
            </a>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="message-content">{renderReadmore}</div>
    </>
  );
};
export default Readmore;
