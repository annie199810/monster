import React from "react";
import './accla.css'
const Accla=()=>{
    const texts=[{title:"Clutch",text:"Top App Developers in India"},
    {title:"GoodFirms",text:"Top Blockchain Development Companies in USA"},
    {title:"YOURSTORY",text:"Most-Trusted Android App Development Companies"}]



const renderAccla=texts.map((texts)=>{


return(
    <>
    
    <div className="text_card">
 <h2>{texts.title}</h2>
        
        <div className="app">
        <p>{texts.text}</p>

        </div>

    </div>
    </>
)


})
return(
    <>
    
    <div className="text_section">
        <div className="hii">
        <h1>Acclamations</h1>
        <p>Listed among top-rank service<br/>
        providers</p>
        </div>
        {renderAccla}
        

    </div>
    
    </>
)

}
export default Accla;