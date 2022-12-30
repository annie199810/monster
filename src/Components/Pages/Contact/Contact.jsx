import React from "react";
import "./Contact.css";
import { useState } from "react";
import { useEffect } from "react";
import bank from "../../../assets/Icons/pages/Contact/bank.svg";
import clutch from "../../../assets/Icons/pages/Contact/clutch.svg";
import facebook from "../../../assets/Icons/pages/Contact/facebook.svg";
import glassdoor from "../../../assets/Icons/pages/Contact/glassdoor.svg";
import goodfirms from "../../../assets/Icons/pages/Contact/goodfirms.svg";
import google from "../../../assets/Icons/pages/Contact/google.svg";
import skilled from "../../../assets/Icons/pages/Contact/skilled.svg";
import bree from "../../../assets/Images/Pages/Contact/bree.jpg";
import patrick from "../../../assets/Images/Pages/Contact/patrick.jpg";
import stouvant from "../../../assets/Images/Pages/Contact/stouvant.jpg";
import india from "../../../assets/Icons/Footer/india-flag.svg";
import usa from "../../../assets/Icons/Footer/us-flag.svg";
import uk from "../../../assets/Icons/Footer/uk-flag.svg";
import Slider from "react-slick";
const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const initialValues = {
    fullname: "",
    phone: "",
    email: "",
    budget: "",
    requirement: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [Submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Name Required";
    } else if (values.fullname.length < 3) {
      errors.fullname = "Name must have more than 3 characters";
    }
    if (!values.phone) {
      errors.phone = "select any option";
    }
    if (!values.email) {
      errors.mail = "Email Required";
    } else if (!regex.test(values.email)) {
      errors.mail = "Inavlid email format";
    }
    if (!values.budget) {
      errors.budget = "select any option";
    }
    if (!values.requirement) {
      errors.requirement = " Brief your project Requirments";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submitting) {
      console.log(formValues);
    }
  }, [Errors]);
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-menu">
          <h1>
            Discuss Your Vision
            <br />
            With The Industry Best
          </h1>
          <p>
            Let our experts unfold the 360-degree roadmap of your business plan.
          </p>
          <div className="bar"></div>
          <div className="customers-content">
            <div className="customers">
              <strong>
                We are our customer's favourite which makes us a best-rated
                solutions provider
              </strong>
            </div>
            <>
              <Slider {...settings}>
                <div className="rate-slider">
                  <div className="ratings">
                    <img src={bank} alt="" width="214px" height="80px" />
                    <img src={clutch} alt="" width="214px" height="80px" />
                    <img src={facebook} alt="" width="214px" height="80px" />
                    <img src={glassdoor} alt="" width="214px" height="80px" />
                    <img src={goodfirms} alt="" width="214px" height="80px" />
                    <img src={google} alt="" width="214px" height="80px" />
                    <img src={skilled} alt="" width="214px" height="80px" />
                  </div>
                </div>
              </Slider>
            </>
          </div>

          <div className="bar-hr"></div>
          <>
            <Slider {...settings}>
              <div className="testi-rating">
                <div className="testimonal-slider">
                  <div className="testimonal">
                    <h2>
                      <span>Bree </span>
                      Has Trusted Our Excellence.Are you The Next?
                    </h2>

                    <div className="testimonal-img">
                      <img src={bree} alt="" width="58px" height="58px" />
                      <div className="testimonal-id">
                        <h5>Bree Argetsinger </h5>
                        <h4>United States</h4>
                      </div>
                    </div>
                  </div>
                  <p>
                    “It has been delightful to work with Sparx IT Solutions.
                    They offered quality solutions within my budget. I would
                    highly recommend them, if someone is looking to hiring a
                    website design and development company. Thanks guys.”
                  </p>
                </div>
              </div>

              <div className="testimonal-slider">
                <div className="testimonal">
                  <h2>
                    <span>Stouvant </span>
                    Has Trusted Our Excellence.Are you The Next?
                  </h2>

                  <div className="testimonal-img">
                    <img src={stouvant} alt="" width="58px" height="58px" />
                    <div className="testimonal-id">
                      <h5>Stouvant Pittie </h5>
                      <h4>Director</h4>
                    </div>
                  </div>
                </div>
                <p>
                  “Sparx IT Solutions have been one of the Better Developers
                  that we have worked with for our magento site. They have
                  understood &amp; Executed all the tasks assigned in a fast and
                  Professional Manager. Stouvant Pittie,
                  Director(suhanipittie.com)”
                </p>
              </div>

              <div className="testimonal-slider">
                <div className="testimonal">
                  <h2>
                    <span>Patrick </span>
                    Has Trusted Our Excellence.Are you The Next?
                  </h2>

                  <div className="testimonal-img">
                    <img src={patrick} alt="" width="58px" height="58px" />
                    <div className="testimonal-id">
                      <h5>
                        <strong>United States</strong>
                      </h5>
                      <h4>United States</h4>
                    </div>
                  </div>
                </div>
                <p>
                  “The new site is excellent, receiving good feedback from its
                  users that is reflected in an increase in business sales. All
                  bugs were addressed with technical skill, while the new design
                  is modern and attractive. The team was active and
                  communicative, providing good, regular updates.”
                </p>
              </div>
            </Slider>
          </>
          <div className="locations">
            <h1>LOCATIONS</h1>
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

        <form onSubmit={handleSubmit} noValidate>
          <div className="contact-form">
            <h1>Take The First Step Towards Greatness</h1>
          </div>
          <div className="form-columns">
            <div className="form-columnone">
              <div className="form-content">
                <label></label>
                <input
                  type="text"
                  placeholder="Name"
                  id="inputs"
                  name="fullname"
                  value={formValues.fullname}
                  onChange={handleChange}
                />
                {Errors.fullname}
              </div>
              <div className="form-content">
                <label></label>
                <select
                  id="inputs"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                >
                  <option value="0">{} Phone +91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                  <option value="0">{}+91</option>
                </select>
                {Errors.phone}
              </div>

              <div className="form-content">
                <label></label>
                <input
                  type="email"
                  placeholder="Email"
                  id="inputs"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {Errors.email}
              </div>
              <div className="form-content">
                <label></label>
                <select
                  id="inputs"
                  name="budget"
                  placeholder="Budget"
                  value={formValues.budget}
                  onChange={handleChange}
                >
                  <option value="0">Budget</option>
                  <option value="0">50,000-1,50,000 INR</option>
                  <option value="1">1,50,000-3,00,000 INR</option>
                  <option value="2">3,00,000-5,00,000 INR</option>
                  <option value="3">5,00,000-8,00,000 INR</option>
                  <option value="4">8,00,000-15,00,000 INR</option>
                  <option value="5">15,00,000-30,00,000 INR</option>
                  <option value="6">30,00,000 INR and above</option>
                </select>
              </div>
              <div className="form-content">
                <label></label>
                <textarea
                  maxLength="3000"
                  cols="70"
                  rows="60"
                  placeholder="Requirment"
                  id="text"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="formSubmit">
            <button type="let begin talks">Let's Begin The Talks</button>
          </div>
          {Object.keys(Errors).lengthc === 0 && Submitting && (
            <span className="success-msg">Thank'z </span>
          )}
        </form>
      </div>
    </div>
  );
};
export default Contact;
