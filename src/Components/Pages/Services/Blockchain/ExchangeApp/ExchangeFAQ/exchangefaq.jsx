import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./exchangefaq.css";
const ExchangeFAQ = () => {
  const questions = [
    {
      id: " Q",
      title:
        "What is the total time that it takes to create cryptocurrency exchange?",
      ids: "A",
      info: "Building a cryptocurrency exchange involves several processes and the time taken in developing such a solution relies on many things like the type of crypto exchange you want to build and your customization preferences. Contact us to get complete details on estimated time and budget of developing a cryptocurrency exchange solution.",
    },
    {
      id: "Q",
      title: "How is the security of every cryptocurrency exchange ensured?",
      ids: " A",
      info: "These crypto exchange solutions are prone to hacking. We integrate robust security features in every cryptocurrency exchange we build to ensure 100% safety from hacking and other threats. We deliver solutions after thorough tests.",
    },
    {
      id: " Q",
      title:
        "How much money does it take in terms of costs to create cryptocurrency exchanges?",
      ids: "A",
      info: "It also depends on a number of factors including your customization needs, requirements, features, etc. Get in touch with us to get a quick estimate of the cost.",
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
export default ExchangeFAQ;

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
