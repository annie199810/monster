import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import linkedin from "../../../assets/Icons/Footer/linkedin.svg";
import twitter from "../../../assets/Icons/Footer/twitter.svg";
import instagram from "../../../assets/Icons/Footer/instagram.svg";
import facebook from "../../../assets/Icons/Footer/facebook.svg";
import youtube from "../../../assets/Icons/Footer/youtube.svg";
import chat from "../../../assets/Icons/Footer/chat.svg.svg";
import brandlogo from "../../../assets/Images/Header/brandlogo.png";
import guardian from "../../../assets/Icons/Footer/guardian.svg";
import forbes from "../../../assets/Icons/Footer/forbes.svg";
import telegraph from "../../../assets/Icons/Footer/telegraph.svg";
import india from "../../../assets/Icons/Footer/india-flag.svg";
import usa from "../../../assets/Icons/Footer/us-flag.svg";
import uk from "../../../assets/Icons/Footer/uk-flag.svg";
import chevron from "../../../assets/Icons/Header/chevron-right.svg";
const Footer = () => {
  const [toggle, setToggle] = useState(false);
  const [heightE1, setHeightE1] = useState();
  const refHeight = useRef();

  useEffect(() => {
    setHeightE1(`${refHeight.current}px`);
  }, []);
  const toggleState = () => {
    setToggle(!toggle);
  };

  const dropcontent = (
    <div className="dropdown-content">
      <div className="dropdown-menu">
        <div className="navigation">
          <a href="#" className="navigation-visible" onClick={toggleState}>
            Services
            <img
              className={toggle && "active"}
              src={chevron}
              alt=""
              width="20px"
              height="20px"
            />
          </a>

          <div
            className={
              toggle ? "accordion-toogle animated " : "accordion-toggle"
            }
            style={{ height: toggle ? `${heightE1}` : "0px" }}
            ref={refHeight}
          >
            <div className="navigation">
              <a href="#" className="navigation-visible" onClick={toggleState}>
                App Development
                <img
                  className={toggle && "active"}
                  src={chevron}
                  alt=""
                  width="20px"
                  height="20px"
                />
              </a>
            </div>
            <div
              className={
                toggle ? "accordion-toogle animated " : "accordion-toggle"
              }
              style={{ height: toggle ? `${heightE1}` : "0px" }}
              ref={refHeight}
            >
              <a href="#">App Development</a>
              <Link to="/Services">Mobile App Development</Link>
              <Link to="/datapack">Hybrid App</Link>
              <Link to="/wear">Wearable App</Link>
              <a href="#"> App maintenance</a>
              <a href="/quality">Quality Assurance</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="footer">
        <div className="featured-in">
          <div className="feature">
            <h1>Featured IN</h1>
          </div>
          <div className="guardian">
            <img src={guardian} alt="" width="148" height="48"></img>
          </div>
          <div className="forbes">
            <img src={forbes} alt="" width="130px" height="50px"></img>
          </div>
          <div className="telegraph">
            <img src={telegraph} alt="" width="145px" height="24px"></img>
          </div>
        </div>
        <div className="bottom-hr"></div>
        <div className="footer-logo">
          <div className="footer-img">
            <img src={brandlogo} alt="" width="110px" height="45px" />
          </div>
          <div className="footer-content">
            <div className="who-we-are-menu">
              <p>WHO WE ARE</p>
              <a href="#">About Us</a>
              <a href="#">Founder</a>
              <a href="#">Testimonals</a>
              <a href="#">Life At Sparx</a>
              <div className="carrer">
                <a href="#">Careers</a>
                <button className="hire">Hiring</button>
              </div>
              <a href="#">FAQs</a>
            </div>

            <div className="resources">
              <p>RESOURCES</p>
              <a href="#">Blog</a>
              <a href="#">Guides</a>
              <a href="#">Case Studies</a>
              <a href="#">Portfolio</a>
            </div>

            <div className="dedicated">
              <p>DEDICATED HIRING</p>
              <a href="#">
                Looking to hire for long-term <br /> or full-time assignments?
              </a>
            </div>

            <div className="guide">
              <p>LET US GUIDE YOU</p>
              <a href="#">Prototyping</a>
              <a href="#">MVP</a>
              <a href="#">Startup Incubation Services</a>
              <a href="#">Branding</a>
            </div>
          </div>
          <div className="services-app">
            <p>SERVICES</p>
            <a href="#">Mobile App Development</a>
            <a href="#">iOS App Development </a>
            <a href="#">Android App Development</a>
            <a href="#">React Native App Development</a>
            <a href="#">Flutter App Development</a>
            <a href="#">Web Design</a>
            <a href="#">eCommerce Development</a>
            <a href="#">Magento Development</a>
            <a href="#">PHP Development</a>
            <a href="#">WordPress Development</a>
            <a href="#">Blockchain Development</a>
            <a href="#">Internet of Things(IoT)</a>
          </div>

          <div className="footer-contact">
            <p>CONTACT</p>
            <div className="country-india">
              <img src={india} alt="" width="20" height="13.3" />
              <h4>India Office</h4>
            </div>
            <h5>
              H-21, First Floor, Sector-63, Noida,
              <br /> Uttar Pradesh 201301,
            </h5>
            <a href="#">tel:+919810230650</a>

            <div className="country-usa">
              <img src={usa} alt="" width="20" height="13.3" />
              <h4>USA Office</h4>
            </div>
            <h5>
              PMB #6020, 477 Madison Ave 6th FL,
              <br />
              New York, NY 10022,
            </h5>
            <a href="#">tel:+19177759550</a>

            <div className="country-uk">
              <img src={uk} alt="" width="20" height="13.3" />
              <h4>UK Office</h4>
            </div>
            <h5>
              Kemp House, 152 - 160 City Road,
              <br />
              London EC1V 2NX UK
            </h5>
            <a href="#">tel:+442032397499</a>
          </div>
        </div>
        <div className="bottom-footer"></div>
        <div className="bottom">
          <div className="copyright">
            <h6>
              ©2007-2022 Sparx IT Solutions. <br />
              All Rights Reserved.
            </h6>
          </div>
          <div className="use">
            <h6>Term Of Use</h6>
          </div>
          <div className="policy">
            <h6>Privacy Policy</h6>
          </div>
          <div className="linkedin">
            <img src={linkedin} alt=" " width="20px" height="21px" />
          </div>
          <div className="twitter">
            <img src={twitter} alt=" " width="20px" height="21px" />
          </div>
          <div className="facebook">
            <img src={facebook} alt=" " width="20px" height="21px" />
          </div>
          <div className="youtube">
            <img src={youtube} alt=" " width="20px" height="21px" />
          </div>
          <div className="instagram">
            <img src={instagram} alt=" " width="20px" height="21px" />
          </div>
        </div>
      </div>
      <div className="chat-pop">
        <img src={chat} alt="" width="50px" height="47px" />
      </div>
    </>
  );
};

export default Footer;
