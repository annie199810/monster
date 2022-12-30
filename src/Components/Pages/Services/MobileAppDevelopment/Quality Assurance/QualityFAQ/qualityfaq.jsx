import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./qualityfaq.css";
const Qualityfaq = () => {
  const questions = [
    {
      id: " Q",
      title: "What QA is all about?",
      ids: "A",
      info: "Quality Assurance (QA) and testing services basically are aimed at maintaining software products and applications to ensure that they are free from any defect or bugs while these developed applications and software meet all the standards and quality specifications",
    },
    {
      id: "Q",
      title: "Do you perform testing with real devices?",
      ids: " A",
      info: "We perform stringent tests using varied testing tools and frameworks. We utilize both real devices and emulated devices in testing procedures to ensure the best quality of every digital product.",
    },
    {
      id: " Q",
      title: "What are the QA standards?",
      ids: "A",
      info: "Typically, QA standards are the set of standards defined by businesses to show their commitment to the creation of high-quality products for customers.",
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
export default Qualityfaq;

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
