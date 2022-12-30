import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./smartfaq.css";
const SmartFAQ = () => {
  const questions = [
    {
      id: " Q",
      title: "What is the procedure of smart contracts?",
      ids: "A",
      info: "Smart contracts are computer codes that work with blockchain technology. They represent agreements that are conducted between two parties and then stored on a public database so that they cannot be changed.",
    },
    {
      id: "Q",
      title: "How do you ensure the safety of data of your clients?",
      ids: " A",
      info: "The security of data of our clients is a priority at Sparx IT Solutions. And, we also sign an NDA to provide assurance of data security while taking every string security measure.",
    },
    {
      id: " Q",
      title: "In how much time will my project be completed?",
      ids: "A",
      info: "Since we are also offering customization service, hence the total time for completing your project will depend on numerous factors like the number of features. Typically, completing a basic smart contracts project will take a few weeks to complete.",
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
export default SmartFAQ;

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
