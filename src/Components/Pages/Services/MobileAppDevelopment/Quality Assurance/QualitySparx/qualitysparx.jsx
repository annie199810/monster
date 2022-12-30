import React from "react";
import "./qualitysparx.css";
const QualitySparx = () => {
  const choice = [
    {
      name: "Web & Mobile Functional Testing",
      info: "Our QA team performs tests under real user conditions to make sure that your app works flawlessly and fulfills all the requirements of a user. They also make sure that the backend functionality of the app is at par to clients’ expectations and it runs smoothly. ",
    },
    {
      name: "Web & Mobile Usability Testing",
      info: "Our usability testing team makes sure that your mobile app has simple UI entailing key features along with pleasing UX design. By performing stringent UX/UI tests on your mobile application our QA team ensures that the product is both handy and easy-to-use for the target audience.",
    },
    {
      name: "Mobile App Security Testing",
      info: "Our QA team is equipped with robust mobile application security testing tools and methods to ensure that your app is completely secure. They simulate a hacking attack and identify loopholes. They perform complete security checks for both the app and the backend system.",
    },
    {
      name: "Mobile App Test Automation",
      info: "We follow a data-driven approach to implement test automation for performance, regression, and functional testing. Our QA professionals also provide backend automation testing services. Our team will ensure efficiency & high-quality of your app and make sure it is released on time",
    },
    {
      name: "Mobile App Performance Test",
      info: "Mobile apps may suffer performance issues due to weak signals, excess load, interference from other devices, etc. Our app testing team find & fix bugs related to scalability, load, stress, & reliability to ensure the best app performance. They also conduct backend performance tests. ",
    },
    {
      name: "Cloud-Based App Testing",
      info: "We have expertise in cloud-based testing solutions like AWS Device Farm, Firebase Test Lab, Xamarin Test Cloud, Kobiton, and more. By using the potential of these cloud-based mobile testing facilities, we test your app thoroughly and ensure that it is of the best quality.",
    },
    {
      name: "Accessibility & Compatibility Test",
      info: "By performing compatibility tests various tools and methods, we make sure that your hybrid or cross-platform mobile app is ready to be used on multiple mobile platforms. We also perform quality tests for accessibility to ensure that the app can be used by people with disabilities.",
    },
    {
      name: "Bug Tracking & Fixing",
      info: "With index auditing, performance monitoring, and semantic source maintenance, we perform regular app maintenance chores such as managing patches, source code, and fixing crashes to ensure that your mobile app is completely bug-free. We provide full support for bug fixing",
    },
    {
      name: "Mobile App Maintenance",
      info: "We offer extensive mobile app maintenance solutions that include app up-gradation, pre- and post-launch support & maintenance, on-demand support, backup & recovery, etc. Our experts provide suggestions for version upgrade, security patches, and functional enhancements.",
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
            Our Full-Suite of Web & Mobile App <br />
            Testing Services
          </h1>
          <p>We provide robust testing services</p>
        </div>
        <div className="sparxit">{renderSparx}</div>
      </div>
    </>
  );
};

export default QualitySparx;
