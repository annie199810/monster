import React from "react";
import "./dappsparx.css";
const DAppSparx = () => {
  const choice = [
    {
      name: "DApp Designing & Integration",
      info: "We specialize in creating interactive decentralized apps that provide a great user experience. Our trained DApp designers craft intuitive applications and also provide quality support for DApp integration to build apps with distinct features.",
    },
    {
      name: "MVP Consultation",
      info: "Our DApp developers maintain a pace with the latest DApp development trends to help your business succeed online. We carefully analyze stakeholders and the technical components and provide an apt Blockchain platform to suit the client’s requirements.",
    },
    {
      name: "Decentralized Exchange Development",
      info: "We are proficient in creating a scalable and customized exchange platform to meet diverse business requirements. The exchange platform will connect with external exchanges with the help of distributed shared books and order APIs.",
    },
    {
      name: "Smart Contracts",
      info: "We offer a comprehensive smart contract service to our clients. This will consist of writing, testing, and deploying contracts on several platforms, such as Ethereum, Neo, etc. We offer clients in selecting the best platform that fits with their business",
    },
    {
      name: "Decentralized Storage",
      info: "A lot of decentralized cloud storage platforms are available that provide end-to-end transactions. It helps in rendering efficient and safe cloud storage. We help to choose the most suitable platform for the projects.",
    },
    {
      name: "EOS Decentralized Apps",
      info: "Decentralization has the capability to save transactions within a public decentralized ledger. Apart from Ethereum DApp, we can create DApp on the EOS platform that empowers decentralized applications to smoothly run multiple transactions in seconds. This will save both programming time and cost.",
    },
    {
      name: "DApp Testing",
      info: "We have a team of testers who are working dedicatedly to check the usability and performance of the DApps. You will get bug-free decentralized applications that are made to deliver superior performance.",
    },
    {
      name: "DApp Porting",
      info: "We provide the best quality support in dApp porting. Our DApp developers perform this by utilizing reusable codes on any OS. We can easily shift your existing app to any Blockchain platform that suits your business requirements.",
    },
    {
      name: "DApp Upgrade Services",
      info: "For the smooth business operations, it is important to update the app timely. We offer our clients with quality migration and up-gradation services whenever required. Our development is experienced in deploying new smart contracts and making the microservices up-to-date.",
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
            Our Effective Range of DApp
            <br /> Development Services
          </h1>
          <p>
            Providing a myriad of services to cater to your DApp development
            needs
          </p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default DAppSparx;
