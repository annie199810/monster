import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./nftfaq.css";
const NFTFAQ = () => {
  const questions = [
    {
      id: " Q",
      title: "Do your NFT marketplaces support the IPFS protocol?",
      ids: "A",
      info: "Yes, we use the IPFS (InterPlanetary File System) to transmit data across an NFT marketplace.",
    },
    {
      id: "Q",
      title:
        "Which Blockchain platforms do you use to create an NFT marketplace?",
      ids: " A",
      info: "Ethereum Polygon Solana Binance And, any other Blockchain framework of your choice.",
    },
    {
      id: " Q",
      title: "Which token standards do you follow? ",
      ids: "A",
      info: "ERC-721 and ERC-1155.",
    },
    {
      id: " Q",
      title: "How much does it cost to develop an NFT marketplace? ",
      ids: "A",
      info: "The cost for developing an NFT marketplace relies upon a number of factors. You can consult our experts to get a precise cost estimation for your project.",
    },
    {
      id: " Q",
      title: "How much time does it take to launch my NFT marketplace? ",
      ids: "A",
      info: "To define an ETA or complete timeline for the project, we recommend you connect with our business team.",
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
export default NFTFAQ;

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
