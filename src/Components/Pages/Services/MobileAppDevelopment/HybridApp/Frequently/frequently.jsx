import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./frequently.css";
const Frequently = () => {
  const questions = [
    {
      id: " Q",
      title: "How much does it cost to develop a mobile app?",
      ids: "A",
      info: "The cost of developing a mobile application may vary depending upon a variety of factors including development complexity, personalization requirements, and scalability. It is recommended to consult app development experts to get a precise cost estimation for your project.",
    },
    {
      id: "Q",
      title: "How much time does it take to develop an app?",
      ids: " A",
      info: "Development complexity may weigh in your project with additional amount of time taken in deployment of plans. It may take weeks or even months to turn a raw app idea into reality.",
    },
    {
      id: " Q",
      title: "What is your mobile application development process?",
      ids: "A",
      info: "We are following agile methodology to enable a fast and sophisticated development of mobile applications. Our project management experts would divide the entire process into sprints and enable a continuous development and delivery of code",
    },
    {
      id: " Q",
      title: "Is it safe to share my app idea with you?",
      ids: " A",
      info: "Yes, our mobile application development process is 100% safe and secure. We are also ready to sign NDA to give you assurance of safety of your app idea. You can rely on us completely.",
    },
    {
      id: "Q",
      title:
        "Who will handle my project during the custom mobile app development process?",
      ids: "A",
      info: "We will assign a project manager who takes care of all client dealings. The manager has the responsibility to communicate with you, gather necessary information and pass it to the team. He also provides updates for your project.",
    },
    {
      id: " Q",
      title:
        "Do you offer to hire mobile app developers for hourly or project based tasks?",
      ids: "A",
      info: " Yes, we allow our clients to hire developers for their projects or on an hourly basis as they please ",
    },
    {
      id: "Q",
      title: "Can I ask for some changes after the launch of the app?",
      ids: "A",
      info: "You can approach us, if you require any minor change, bug-fixing, or maintenance work after the launch of the app. We will try to resolve the minor issues in the app.",
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
export default Frequently;

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
