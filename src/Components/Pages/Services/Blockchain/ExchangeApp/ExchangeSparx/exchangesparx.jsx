import React from "react";
import "./exchangesparx.css";
const ExchangeSparx = () => {
  const choice = [
    {
      name: "Crypto Exchange Development",
      info: "With our value-based crypto exchange development services, we help businesses to create safe, user-friendly, and efficient platforms. We are expert in rendering high-grade crypto exchange development to a variety of businesses.",
    },
    {
      name: "Cryptocurrency Wallet Development",
      info: "With a cryptocurrency wallet, it is easy to transfer virtual currency. Our expert developers excels in building a variety of wallets that includes Mobile wallets, Web wallets, Hardware, and Desktop wallets.",
    },
    {
      name: "Ethereum Exchange Development",
      info: "At Sparx IT Solutions, we have proficient Ethereum developers that are maestros in developing innovative and decentralized financial apps. Improve your business productivity by opting for our effective Ethereum exchange development service.",
    },
    {
      name: "Decentralized App Development",
      info: "We develop DApp by deploying Blockchain technology that will work on the P2P network. Our Blockchain experts will create DApps that will change businesses for the betterment. With our Cryptocurrency exchange software development service, you get out-of-the-box solutions.",
    },
    {
      name: "Mobile Crypto Exchange",
      info: "Sparx IT Solutions is renowned for providing innovative mobile solutions. We ensure to maintain consistent quality in our mobile crypto exchange platforms. Our developers offer customizable solutions that are secure and user-friendly.",
    },
    {
      name: "Bitcoin Exchange Platform Development",
      info: "Our talented developers will create a Bitcoin exchange platform swiftly and with perfection. We provide custom solutions that meet the requirements of the varied business size and range.",
    },
  ];

  const renderSparx = choice.map((choose) => {
    return (
      <>
        <div className="sparx-dev">
          <div className="sparx-cards">
            <div className="sparx-bar"></div>
            <h2>{choose.name}</h2>
            <h3>{choose.info}</h3>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="competitors">
        <div className="competitors-title">
          <h1>
            Result-driven Cryptocurrency
            <br /> Exchange Development Services
          </h1>
          <p>
            Our cryptocurrency exchange software development services cater to
            all your needs
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default ExchangeSparx;
