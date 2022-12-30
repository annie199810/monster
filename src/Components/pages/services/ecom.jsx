import React from "react";
import Ecommerce from "./ecommerce/ecomweb/ecomm";
 import Map from "./appdev/map/map";
 import Reason from "./ecommerce/Reasons/reasons";
 import Request from "./appdev/Request/request";
 import Offering from "./ecommerce/offer/offer";
 import Agile from "./ecommerce/Agile/agile";
 import Portfolio from "./ecommerce/Port/port";
 import Magento from "./ecommerce/Magento/magento";
 import Smart from "./ecommerce/Smart/smart";
// import Question from "./ecommerce/FAQ/faqs";
const Ecom=()=>{
    return(
<>
<Ecommerce/>
 <Map />
<Offering/>
<Agile/>
 <Portfolio/>
<Reason/>
 <Smart/>
<Magento/>
 <Request/>
{/* <Question/>  */}
</>
    )
}
export default Ecom