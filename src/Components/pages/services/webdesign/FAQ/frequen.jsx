import React, { useEffect, useRef, useState } from "react";
//import chevronright from "../../../../../assets/icons/pages/services/mobile app development/chevron-up.svg";
import "./frequen.css";
//import chevron from "../../../../../assets/icons/pages/services/mobile app development/chevron-down.svg";
const Frequentlys = () => {
  const questions = [
    {
      id: " Q",
      title: "How long have you been offering web design services?",
      ids: "A",
      info: "We have been serving our customers with our website design services for more than 14 years.",
    },
    {
      id: "Q",
      title: "Will I get ownership of my website?",
      ids: " A",
      info: "We consider the right of ownership an ideal component of project management which means each and every project we work on assures complete ownership to the respective clients.",
    },
    {
      id: " Q",
      title: "How much will it cost me for your web design services?",
      ids: "A",
      info: "The cost of crafting a website depends on multiple variables and elements. We built a website in accordance with the requirements of clients and the duration you will be working with us.",
    },
    {
      id: " Q",
      title: "Will I be able to spot my website on the search engine results?",
      ids: " A",
      info:"Yes, you will be able to wave hello at your website on the search engines. We design every website SEO-friendly.",
    },
    {
      id: "Q",
      title:
        "Will there be any additional cost that I’d have to bear after the work is complete?",
      ids: "A",
      info: "No, we make sure to discuss our terms at the initial stage of the process itself. This allows us to work flexibly and smoothly.",
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
export default Frequentlys;

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
