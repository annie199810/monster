import React from "react";
import Design from "../../pages/services/webdesign/webdesign";
import Maps from "../../pages/services/webdesign/mapcard/mapcard";
import Delivers from "../../pages/services/webdesign/deliver/deliver";
import Bene from "../../pages/services/webdesign/benefit/benefit";
import Creats from "../../pages/services/webdesign/coveti/coveti";
import Choose from "../../pages/services/webdesign/Choose/choose";
import Seamless from "../../pages/services/webdesign/process/process";
import Frequentlys from "../../pages/services/webdesign/FAQ/frequen";
import Guide from "../../pages/services/webdesign/guide/guide";
import Requests from "../../pages/services/webdesign/Query/query";
const Serving=()=>{
    return(
       <>
       <Design/>
       <Maps/>
       <Delivers/>
       <Bene/>
       <Creats/>
        <Choose/>
       <Seamless/>
       {/* <Frequentlys/> */}
       <Guide/>
       <Requests/>  
       </>
    )
}
export default Serving;