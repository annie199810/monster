import React from "react";
import "./port.css"

const Portfolio=()=>{
    return(
 <div className="port-folio">
 <div className="view">
    <div className="folio">
        <h2>2100+ eCommerce Development Projects Completed <button>Browse Our Portfolio</button></h2>
       
        <div className="page">
            <div className="page1">
                <img src="https://www.sparxitsolutions.com/assets-style/portfolio/portfolio-web/diyaonline.jpg"alt=""
                 width="350"
                 height="300"/>
                   <div className="Diyaonline">
                <h1>Diyaonline</h1>
                <p>Fashion & Beauty / HTML, PHP, Magento 2, Bootstrap</p>
                <h5>Ecommerce / B2C / Clothing</h5>
            </div>
            </div>
          
            <div className="page2">
            <img src="	https://www.sparxitsolutions.com/assets-style/portfolio/portfolio-web/Eefendi.jpg"alt=""
                 width="350"
                 height="300"/>
                  <div className="Eefendi">
                <h1>Eefendi</h1>
                <p>Retail</p>
                <h5>Ecommerce / B2C / Store Manager(Vendor) / Product Management / 
                    Vendor Membership management / Order History / Order Delivery Report/Status</h5>
            </div>
            </div>
            <div className="page3">
            <img src="https://www.sparxitsolutions.com/assets-style/portfolio/portfolio-web/Freshby.jpg"alt=""
                 width="350"
                 height="300"/>
                  <div className="Freshby">
                <h1>Freshby</h1>
                <p>Retail / HTML, PHP, WordPress, iOS, Android</p>
                <h5>Ecommerce / B2C / Subscriptions / Searching & Filter</h5>
            </div>
            </div>
        </div>
        </div>
    <div className="view2">
        <div className="Know">
            <div className="Say">
         <h1>Know What Our Customers Say</h1>
         <h3>Bringing the Best to Our Customers & Making Them the Happiest.</h3>
            </div>
            <div className="slick">
          
            </div>
            <div className="custom-bar"></div>
            </div>
    
            <div className="abdullah">
                <div className="Alrasheedi">
                <img src="https://www.sparxitsolutions.com/assets-style/images/abdullah-alrasheedi.jpg" alt="" 
           width="150px"
           height= "150px"/>
                </div>
                <div className="mart">
                    <h3>Abdullah Alrasheedi Kuwait</h3>
      </div>
     <div className="aust">
                 <p>My name is Abdullah Alrasheedi, I approached Sparx IT Solutions to develop iOS and Android
         application for my news website. They have good team and did exactly what I wanted. Mr. David is the great man and kept 
                    me updated throughout the development process. I will surely recommend them.</p>
                </div>
            </div>
        </div>
</div>

 </div>
    )
}
export default Portfolio;