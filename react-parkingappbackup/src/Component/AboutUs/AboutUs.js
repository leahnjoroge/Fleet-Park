import React from 'react';
//import pic1 from '../..images/pic1.jpg';
//import pic2 from '../..images/pic2.jpg';
const AboutUs = (props)=>{
    return(
        <div className="w3-content" style={{'max-width':'1200px'}}>
      <div className="w3-panel"> 
      <i className="w3-xlarge fa fa-bars"></i>
      </div>
      {/* First Grid:Logo & About*/} 
      <div className="w3-row">
      <div className="w3-half w3-container">
      <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
      <h1 className="w3-xxlarge w3-text-grey">We are Fleet Parking</h1>
      <h1 className="w3-jumbo"></h1>
      </div>
    <div className="w3-half w3-container w3-xlarge w3-text-grey">
    <p className=""> We build design teams
    -We break things down and build it better 
    -We deliever the best of Solutions </p>
    <p>Influx means </p>
    </div>
</div>
{/* Second Grid: Resent  */}
<div className="w3-row">
<div className="w3-half w3-container">

<p className="w3-xlarge w3-text-grey">
Demos,Logos,Reports,Name, Events,Media,Wordpress,Google,Books,Optimisations
</p>

</div>
    </div>
</div>
    )
}
export default AboutUs;