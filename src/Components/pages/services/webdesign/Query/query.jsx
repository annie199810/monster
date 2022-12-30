import React from "react";
import "./query.css"
import { useEffect,useState } from "react";
const Requests=()=>{
    const initialValues = {
        fullname: "",
        phone: "",
        email: "", 
    
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
       
      
        return errors;
      };
    
      useEffect(() => {
        if (Object.keys(Errors).length === 0 && Submitting) {
          console.log(formValues);
        }
      }, [Errors]);
    return(
 <div className="request">
    <h1>Request Free Consultation</h1>
    <div className="connect">
    <div className="provide">
<h2>Let’s Connect.</h2>
<img src="https://www.sparxitsolutions.com/assets-style/images/connect-img.webp" alt=""
width="220"
height="150" />
<p>Your business idea is valuable. We are here to provide you with the right business expertise.</p>
<ul>
    <li>On-call assistance in all timezones</li>
    <li>Projects consulting by experts</li>
    <li>Detail project estimation</li>
</ul>
    </div>
    <div className="query">
        <h2>Have a Query?</h2>
        <div className="que">
        <form onSubmit={handleSubmit} noValidate>
        
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
              
            </div>
          </div>
          <div className="formSubmit">
            <button type="let begin talks">Let's Begin The Talks</button>
          </div>
          {Object.keys(Errors).lengthc === 0 && Submitting && (
            <span className="success-msg">Thankz </span>
          )}
        </form>
        </div>
    </div>
 </div>
 </div>
    )
} 
export default Requests;