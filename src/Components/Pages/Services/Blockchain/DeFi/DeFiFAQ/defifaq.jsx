import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./defifaq.css";
const DeFiFAQ = () => {
  const questions = [
    {
      id: " Q",
      title: "Which blockchain are you using to create DeFi apps?",
      ids: "A",
      info: "Ethereum,Polygon,Solana,Binance, Stellar",
    },
    {
      id: "Q",
      title:
        "Do you build DeFi apps that support Yield Farming or Liquidity Mining?",
      ids: " A",
      info: "Of course, we do. We create DeFi apps where investors can add their stakes into the liquidity pool to earn passive incomes.",
    },
    {
      id: " Q",
      title: "Can you help me create a Token?",
      ids: "A",
      info: "Our tokenization services allow our clients to create unique and secure tokens.",
    },
    {
      id: " Q",
      title: "How long does it take to complete a DeFi project?",
      ids: "A",
      info: "The precise answer to the question depends upon your business requirements. It may take from a few weeks to months to build a DeFi app.",
    },
    {
      id: " Q",
      title: "How much does it cost to complete a DeFi project?",
      ids: "A",
      info: "The cost of DeFi app development can rely upon several factors such as technology stack, specific client requirements, and others. We request you to connect with our team for a dedicated cost estimation for your project.",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [heightE1, setHeightEl] = useState();
  const refHeight = useRef();

  const renderfaq = questions.map((faqs) => {
    return <Faq faqs={faqs} />;
  });
  return (
    <React.Fragment>
      <div className="faq">
        <h1>
          Frequently Asked
          <br /> Questions
        </h1>
      </div>
      <div className="faqrender">{renderfaq}</div>
    </React.Fragment>
  );
};
export default DeFiFAQ;

const Faq = ({ faqs }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="acccordion-a">
        <div className="visible-n" onClick={toggleState}>
          <h5>{faqs.id}</h5>
          <h4>{faqs.title}</h4>
          <img
            className={toggle && "active"}
            src={chevron}
            alt=""
            width="20px"
            height="20px"
          />
        </div>
        <div className="faq-bar"></div>
        {toggle && (
          <div className="answer-faq">
            <h5>{faqs.ids}</h5>
            <h4>{faqs.info}</h4>
          </div>
        )}
      </div>
    </>
  );
};
