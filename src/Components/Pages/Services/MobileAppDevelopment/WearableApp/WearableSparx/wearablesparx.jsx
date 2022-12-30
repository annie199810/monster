import React from "react";
import "./wearablesparx.css";
const WearableSparx = () => {
  const choice = [
    {
      name: "Android Wearable App Development",
      info: "Our experts develop platform-specific wearable apps for Android. At Sparx IT Solutions, we deliver value-based android wearable applications with the help of advanced technologies including HTML, JavaScript, Firebase Analytics, Android sensors, GPU tools, and more.",
    },
    {
      name: "Fitness App Development",
      info: "We offer our services for a myriad of industries and fitness is one of them. We deliver out-of-the-box wearable mobile app development services to offer competent fitness gadget solutions. Specialists use high-end tools to build apps for truckers, chest straps, wristbands, smartwatches, armbands.",
    },
    {
      name: "Custom App Development",
      info: "We take pride in delivering bespoke solutions to fulfill the expectations of our clients. Sparx IT Solutions offers customized wearable applications that run seamlessly on any wearable device like glasses, smartwatches, bands, and more",
    },
    {
      name: "Integration",
      info: "Our esteemed experts develop wearable apps that integrate with any wearable device and existing mobile applications. The quick integration services by our professionals elicit new revenue streams.",
    },
    {
      name: "Apple Watch App Development",
      info: "We provide captivating mobile applications for wearable devices with agile iOS & Android technologies. Our experienced developers specialize in iOS wearable app development and they can create high-performing and robust apps for apple watches.",
    },
    {
      name: "Wearable App Development with IoT",
      info: "As we work on contemporary technologies, our experts are well-versed with IoT integration in our apps. This allows effective profile management, data collection, seamless transfer of data, etc. We provide end-to-end wearable device app development services.",
    },
  ];

  const renderImpeccable = choice.map((choose) => {
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
          <h1>Our Impeccable Wearable App Development Services</h1>
          <h3>
            Get our wearable app development services for high-end solutions
          </h3>
        </div>
        <div className="sparxit">{renderImpeccable}</div>
      </div>
    </>
  );
};

export default WearableSparx;
