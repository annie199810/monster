import React, { useEffect, useRef, useState } from "react";
//import chevronright from "../../../../../assets/icons/pages/services/mobile app development/chevron-up.svg";
import "./faqs.css";
//import chevron from "../../../../../assets/icons/pages/services/mobile app development/chevron-down.svg";
const Question = () => {
  const questions = [
    {
      id: " Q",
      title: "Why should I choose you for my eCommerce web development project?",
      ids: "A",
      info: "14+ years of experience, agile processes, competent team of developers, several recognitions by leading institutions including ISO 9001:2008 & NASSCOM make us a choice for you.",
    },
    {
      id: "Q",
      title: "Do you provide technical support post development?",
      ids: " A",
      info: "Yes, we help our clients to maintain their applications.",
    },
    {
      id: " Q",
      title: "What is your specification in creating eCommerce web apps?",
      ids: "A",
      info: "For impressive eCommerce web development you primarily need to focus on user-friendliness. Make sure that your website is easy to use, interactive and engaging. Your website must- have the potential to meet users needs without any delay, showcase your products and services in a better way.",
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
      <div className="faqrender">{renderfaq}</div>
    </React.Fragment>
  );
};
export default Question;

const Faq = ({ faqs }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="acccordion">
      <div className="accordion-visible" onClick={toggleState}>
        <h5>{faqs.id}</h5>
        <h4>{faqs.title}</h4>
        <img className={toggle && "active"} src={chevron} alt="" />
      </div>
      {toggle && (
        <div>
          <div className="accordion-para">
            <div>
              <h5>{faqs.ids}</h5>
              <h4>{faqs.info}</h4>
            </div>
          </div>
          <div className="bar"></div>
        </div>
      )}
    </div>
  );
};
