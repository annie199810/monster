import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./dappfaq.css";
const DAppFAQ = () => {
  const questions = [
    {
      id: " Q",
      title: "What are DApps?",
      ids: "A",
      info: "DApps or Decentralized Applications are software solutions that run on computers with a P2P (Peer-to-Peer) network instead of a single computer. These apps correspond to traditional web applications from the front-end point because they utilize the tech as convention web apps. However, they differ from a back-end perspective as they utilize smart contracts for connecting to a blockchain network.",
    },
    {
      id: "Q",
      title: "What kind of DApps can be suitable for our business?",
      ids: " A",
      info: "These apps are categorized in three types as follows: #1: DApps that have Blockchain technology of their own, Bitcoin is an example.#2: These are protocols and use type 1 apps, Omni protocol is an example of this type.#3: They use the protocol of type 2 DApps, SAFE network is an example.",
    },
    {
      id: " Q",
      title: "How beneficial are DApps than traditional web apps?",
      ids: "A",
      info: "How beneficial are DApps than traditional web apps?The most crucial benefit of DApps is that they cannot be tempered and any record stored in these apps is unalterable. So, they are completely intrusion and hacking proof.DApps are not tied to a single server as opposed to traditional web apps so the risk of failure of the central point is avoided. These apps are controlled through autonomy and any change that occurs in the app happens after the consensus of every member in the network.",
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
export default DAppFAQ;

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
