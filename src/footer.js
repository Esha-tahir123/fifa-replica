import React from 'react'

import sponsor from "./images/sponsor.JPG"
 const Footer = () => {
  return (
    <div>
        


        
         <div style={{width:"1000px", marginTop:"100px"}} className="footer"> 
         
     
         <th className="footer1">
       <img style={{width:"1000pxa"}} src="main.JPG" alt=""  /></th>
       
     
        
          <div style={{width:"700px"}}>
       
        <label style={{marginRight:"950px", color:"darkblue", padding:"50px"}} className="logo">FIFA</label>
        
        <h2 className="mar"></h2> <h3 className="mar2"><h4 style={{marginRight:"500px",marginTop:"20px",fontWeight:"bold"}} className="heading2">EXPLORE</h4>
        <h5 style={{marginRight:"500px", color:"gray"}}>Competitions</h5>
        <h5 style={{marginRight:"500px", color:"gray"}}>  About FIFA</h5>
        
        <h5 style={{marginRight:"500px",color:"gray"}}>women football</h5>
        <h5 style={{marginRight:"500px",color:"gray"}}>Impact</h5>
        <h5  style={{marginRight:"500px",color:"gray"}}>  <img className="pic" src="icons.JPG" alt=""  />
          </h5></h3>
          </div>
       
      <div style={{marginLeft:"700px", marginTop:"-250px"}}>
            <h4 style={{fontWeight:"bold"}} className="visit">Also Visit</h4>
            <h4 style={{color:"grey"}}className="mar2"><h4 style={{color:"grey"}} >All storis and topics</h4><h4 style={{color:"grey"}}>official documents</h4><h4 style={{color:"grey"}}>JObs careers</h4>
            <h4>contact FIFA</h4></h4>
          

            </div>
          <h1>___________________________________________________________________________________</h1>
     
        </div>
        <table className='table'>
          <tr>
            <td>Terms of service</td>
            <td style={{marginLeft:"100px"}}>Data protection portal</td>
            <td>Downloads </td>
            <td>Cookies Settings</td>
          </tr>
        </table>
        </div>
    
  )
}
export default Footer;