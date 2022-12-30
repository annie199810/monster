import React from "react";
import "./enterprisedevelop.css";
import { Link } from "react-router-dom";
const EnterpriseDevelopment = () => {
  return (
    <>
      <div className="hybrid-dev">
        <div className="dev-title">
          <h1>
            Our Multitude of Enterprise Blockchain <br />
            Development Services
          </h1>
          <h2>Developing future-ready enterprise Blockchain solutions</h2>
        </div>
        <div className="hybrid-stakes">
          <div className="react-native">
            <div className="stakes-bar"></div>
            <h2>DApps Development</h2>
            <p>
              We are proficient in building your business to a decentralized
              network with the help of p2p DApp’s development. Our developers
              have rich exposure in handling such types of projects with a
              higher success rate.
            </p>
          </div>
          <div className="flutter-dev">
            <div className="stakes-bar"></div>
            <h2>Private Blockchain Development</h2>
            <p>
              With our private blockchain development, we ensure the safe and
              secure transactions. We offer high-grade solutions that are
              equipped with the features such as permission entry, confidential
              transactions, just to name a few.
            </p>
          </div>
          <div className="maintenance">
            <div className="stakes-bar"></div>
            <h2>Crypto Wallet Development</h2>
            <p>
              Our development professionals have prior knowledge of developing
              multi-cryptocurrency wallet using 2-factor authentication. We
              build crypto wallets that support transactions with the help of
              end-to-end encryption.
            </p>
          </div>
          <div className="exchange">
            <div className="stakes-bar"></div>
            <h2>Exchange Platform Development</h2>
            <p>
              Our Blockchain developers have extensive experience in developing
              an effective crypto exchange software. Our rendered solutions are
              bestowed with features like multi cryptocurrencies trading, order
              sharing, etc.
            </p>
          </div>
          <div className="smart-contract">
            <div className="stakes-bar"></div>
            <h2>Smart Contract Development</h2>
            <p>
              We develop efficient ethereum based smart contract solutions for
              businesses of varied nature and sizes. This has completely
              replaced the traditional contract which has ultimately decreased
              the time and cost.
            </p>
          </div>
          <div className="smart-audit">
            <div className="stakes-bar"></div>
            <h2>Smart Contract Audit</h2>
            <p>
              At Sparx IT Solutions, we offer high-grade smart contract
              validation services to businesses. We also verify that smart
              contract functions as intended by vigorously auditing it and offer
              valuable feedback for the issues.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default EnterpriseDevelopment;
