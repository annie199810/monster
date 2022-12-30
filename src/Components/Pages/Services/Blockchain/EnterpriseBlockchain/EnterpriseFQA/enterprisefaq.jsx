import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./enterprisefaq.css";
const EnterpriseFAQ = () => {
  const questions = [
    {
      id: " Q",
      title: "How Blockchain is utilized in business?",
      ids: "A",
      info: "Blockchain offers a new kind of data storage capacity that as well as provides high-level security to those records. So, this technology is a boon for businesses that can leverage it for storing, retrieving, and managing business records in a well-protected form. It offers data decentralization, so no third party even a hacker can access these records.",
    },
    {
      id: "Q",
      title: "Can a separate Blockchain be created for businesses?",
      ids: " A",
      info: "Yes, it can be done. In spite of the public blockchain being open-source,it cannot be used for storing private data of any organization or business. Moreover, the open-source feature of the blockchain can be harnessed to create a private blockchain after performing necessary customization. The resulting tech can be utilized to store critical business data.",
    },
    {
      id: " Q",
      title: "What are the Blockchain platforms that you have expertise with?",
      ids: "A",
      info: "Our Blockchain developers are adept at several Blockchain platforms like Hyperledger, Ethereum, Cosmos, Stellar, R3 Corda, Solidity, Osiz excel, Ripple, OpenChain, and a lot more. We can build consortium/public/private blockchain applications.",
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
export default EnterpriseFAQ;

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
