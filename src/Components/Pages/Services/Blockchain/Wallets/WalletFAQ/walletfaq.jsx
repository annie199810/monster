import React, { useEffect, useRef, useState } from "react";
import chevron from "../../../../../../assets/Images/Pages/Services/App Development/Hybrid App/chevronright.jpg";
import "./walletfaq.css";
const WalletFAQ = () => {
  const questions = [
    {
      id: " Q",
      title:
        "I don’t have any knowledge of Crypto Wallet, where should I start from?",
      ids: "A",
      info: "Crypto wallets have become very popular. If you wish to create a crypto wallet of your own, make sure to have a well-thought out business model so that you can integrate technical and security features in it. By associating with a cryptocurrency wallet development company, you can turn the idea into reality.",
    },
    {
      id: "Q",
      title: "What is the cost of creating a cryptocurrency wallet?",
      ids: " A",
      info: "The cost of creating a crypto wallet relies on many factors such as the features you want in the wallet and level of complexity. You can contact us to know the complete details about the estimated cost and time for developing crypto wallet.",
    },
    {
      id: " Q",
      title: "Can you describe the functioning of a crypto wallet?",
      ids: "A",
      info: "When one person (a sender) provides another person (a receiver) with some crypto asset through the wallet, that person sends his/her coins to the second person and these coins go in the receiver’s wallet. If the receiver wants to spend these coins, he The receiver needs to have the private key that corresponds with the receiver’s public address to use these coins.",
    },
    {
      id: " Q",
      title:
        "Is it possible to store more than one cryptocurrencies in a wallet?",
      ids: "A",
      info: "Yes, storing more than one type of currency is possible in a multi-currency wallet. But the wallet should also support the type of cryptocurrency that you are looking to store in it.",
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
export default WalletFAQ;

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
