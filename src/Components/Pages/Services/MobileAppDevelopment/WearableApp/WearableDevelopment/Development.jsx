import React from "react";
import "./Development.css";
const WearableDevelop = () => {
  const choice = [
    {
      name: "Security",
      info: "Security is a priority for us and we make sure to offer wearable app development that is safe with two-step authentication. Our wearable app is secured with cloud access and browsers protection. This guards wearable apps against data thefts.",
    },
    {
      name: "Smooth Navigation",
      info: "Navigation is an essential factor in which user interactivity depends. With extensive experience, our wearable app developers create apps with proper categorization and search features that allow users to navigate it effortlessly.",
    },
    {
      name: "Wearable app Upgrade",
      info: "The wearable app industry is dynamic which motivates our team to stay apprised of new technologies. This makes us proficient to update and upgrade wearable apps according to specific platforms’ needs. Our developers deliver the latest versions to unleash modern features and improve user experience.",
    },
    {
      name: "Extensive Experience",
      info: "We have extensive experience in wearable app development as we are a decade-old wearable app development company. We have served a myriad of industries with our exclusive solutions. We excel in developing a striking app idea to full-scale application.",
    },
    {
      name: "Support and Maintenance",
      info: "We offer our customers marvelous wearable app development services by maintaining the performance of your app. Our services will be exclusively for the client with our security updates, meticulous testing, and code reviews.",
    },
    {
      name: "Intuitive Design for Wearable App",
      info: "We aim to create an engaging wearable app that is innovative and attractive to users. Our designers have extensive knowledge of Android SDK and Native App SDK empowers them to develop high-end wearable applications.s",
    },
  ];

  const renderSmartwearable = choice.map((choose) => {
    return (
      <>
        <div className="sparx-dev">
          <div className="sparx-cards">
            <div className="sparx-bar"></div>
            <h2>{choose.name}</h2>
            <h3>{choose.info}</h3>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="competitors">
        <div className="competitors-title">
          <h1>Our Impeccable Wearable App Development Services</h1>
          <h3>
            Get our wearable app development services for high-end solutions
          </h3>
        </div>
        <div className="sparxit">{renderSmartwearable}</div>
      </div>
    </>
  );
};

export default WearableDevelop;
