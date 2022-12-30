import React from "react";
import "./enterprisesparx.css";
const EnterpriseSparx = () => {
  const choice = [
    {
      name: "Skilled Workforce",
      info: "Our development team is bestowed with experienced and knowledgeable blockchain developers. They have developed several blockchain solutions for any array of industry verticals with a great client satisfaction rate.",
    },
    {
      name: "Streamlined Operations",
      info: "Our team of developers adopt a systematic work approach when it comes to the development. Right from the ideation to deployment, our business operations are highly streamlined that leads to quality results.",
    },
    {
      name: "Robust Communication",
      info: "We have a strong communication system that empowers us to maintain good coordination with our clients. We update them regularly with the project reports via mail or call so we both stay on the same path.",
    },
    {
      name: "Technical Proficiency",
      info: "We maintain a pace with the latest technical trends in the app development. This leverages us to deliver advanced blockchain solutions that will guarantee business growth in the long run.",
    },
    {
      name: "NDA Policy",
      info: "With us, you don’t have to worry about the security of your blockchain project idea. Before signing any deal, we sign an agreement with all our clients to ensure their project idea is safe with us.",
    },
    {
      name: "Cost-effective Hiring Solutions",
      info: "We fully understand that every business segment has diverse requirements. By considering this, we offer different hiring models where clients can choose professionals on an hourly, weekly, or monthly basis.",
    },
  ];

  const renderSparx = choice.map((choose) => {
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
          <h1>
            Why Should You Choose Our
            <br /> Enterprise Blockchain Development
            <br /> Company?
          </h1>
          <p>
            We are counted as a leading enterprise blockchain development
            company worldwide
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default EnterpriseSparx;
