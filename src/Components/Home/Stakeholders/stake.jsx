import React from "react";
import "./stake.css";
const Stakes = () => {
  return (
    <div className="stake">
      <h1>
        The Stakeholders of Futuristic Technology Solutions
      </h1>
      <p>Your Ideas, Our Expertise = Maximum Customer Success</p>

      <div className="grid">
        <div className="chain">
          <div className="name"></div>
          <h3>
            Blockchain 
            Development
          </h3>
          <h4>
            Enhancing and securing the ways to store and modify data of transactions with
             Blockchain-powered solutions for banking, finance, healthcare, and other industries.
          </h4>
        </div>
        <div className="unfold">
        <div className="name"></div>
          <h3>IoT</h3>
          <h4>
            Unfold the incredible abilities of the internet-of-things to transfer data without
             human intervention. A well-architectured  IoT ecosystem
            transforms the business.
          </h4>
        </div>
        <div className=" Augmented">
        <div className="name"></div>
          <h3>
            Augmented Reality
          </h3>
          <h4>
            Mingle technology and real-world with 
            supreme Augmented reality solutions to increase the emotional interaction and 
            appeal of your brand.
          </h4>
        </div>
        <div className="power">
        <div className="name"></div>
          <h3>
            Data Intelligence
          </h3>
          <br />
          <h4>
            Analyze your business roadmap and possible outcomes more sophisticatedly
            using the power of data.
          </h4>
        </div>
        <div className="artificial">
        <div className="name"></div>
          <h3>
            Artificial Intelligence
          </h3>
          <h4>
            Delivering AI-driven solutions to ensure 
            smart interaction with your consumers through digital assets like chatbots, voice 
            interfaces, etc.
          </h4>
        </div>
        <div className="Virtual">
        <div className="name"></div>
          <h3>Virtual Reality</h3>
           <h4>
            Create your own world of possibilities using our advanced VR solutions focusing on
            varying enterprise needs.
          </h4>
        </div>
      </div>
      <button>Share your project Idea</button>
    </div>
  );
};
export default Stakes;
