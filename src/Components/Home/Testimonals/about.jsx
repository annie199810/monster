import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <h1>What People Say About Us</h1>
      <div className="about-us">
        <div className="mur">
          <img src="https://www.sparxitsolutions.com/assets-style/images/Martino-Raco.jpg" alt="" 
           width="150px" height="150px"/>
          <h2>Brandon-J.-Murray</h2>
          <h3>Germany</h3>
        </div>
        <p>
          I built my website using Joomla. It was around 10 months that I spent
          on this website. The time I started facing problem, I thought to hire
          an expert. I must say that you guys worked wonders. You hard work and
          dedication made me work with you for more three projects. Your
          expertise, hard work and custom-script are worth-appreciating.
        </p>

        <div className="rated"></div>
        <div className="favourite">
          <p>
            We are our customersâ€™ favourite which makes us a best-rated
            solutions provider.
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default About;
