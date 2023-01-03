import React from "react";
import "./metareview.css";
import patrick from "../../../../../../assets/Images/Pages/Contact/patrick.jpg";
const MetaverseTestimonals = () => {
  return (
    <>
      <div className="visiting-customers">
        <div className="customers-known">
          <h1>Know What Our Customers Say</h1>
          <p>Bringing the Best to Our Customers & Making Them the Happiest.</p>
          <div className="border-testimonal"></div>
          <div className="patrick-usa">
            <div className="viewer-details">
              <div className="viewer-img">
                <img src={patrick} alt="" />
              </div>
              <div className="viewerz">
                <p>Patrick Moriarty</p>
                <h2> United States</h2>
              </div>
            </div>
            <div className="side-border"></div>
            <div className="viewer-testimonals">
              <p>
                “The new site is excellent, receiving good feedback from its
                users that is reflected in an increase in business sales. All
                bugs were addressed with technical skill, while the new design
                is modern and attractive. The team was active and communicative,
                providing good, regular updates."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaverseTestimonals;
