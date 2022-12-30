import React from "react";
import "./testimonal";

const Testimonals = () => {
  return (
    <>
      <div className="testimonal">
        <div className="Know">
          <div className="Say">
            <h1>Know What Our Customers Say</h1>
            <h3>
              Bringing the Best to Our Customers & Making Them the Happiest.
            </h3>
          </div>
          <div className="slick"></div>
          <div className="custom-bar"></div>
        </div>

        <div className="Martino">
          <div className="Australia">
            <img src={jan} alt="" width="150px" height="150px" />
          </div>
          <div className="mart">
            <h3>Jan Van Elst Belgium</h3>
          </div>

          <div className="aust">
            <p>
              “Internal stakeholders are pleased with the superior design and
              stability of the site. Efficient and proactive, the team provided
              near-constant progress updates and delivered the final product
              within a short timeline. Their consistent professionalism and
              excellent customer service set them apart.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonals;
