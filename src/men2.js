import React from 'react'
import { Link } from 'react-router-dom';
import'./men2style.css'

const Men2 = () => {
  return (
    <div>
  <nav className="logo1">
       
        
      
      
       <div style={{width:"1400px",marginTop:"0px",marginLeft:"10px"}} className="line"></div>
       <ul  className="active4">
         
           <li>Tournaments FIFA</li>
           <li>About FIFA</li>
           
        
         
            <li>Women's football</li>
            <li> Social Impact</li>
            <li>Football development</li>
            <li> Technical</li>
            <li class="companymenuli"><a class="alisting">LEGAL  <b class="caret"></b></a>
    <ul class="submenu">
    <Link to="/Privacy"> <li> Privacy </li></Link>
       <Link to="/Terms"> <li>Terms</li></Link>
        
    </ul>
</li>
            <Link to="/Submenu">
          
           
            </Link>
       </ul>
   
   </nav>
    </div>
  )
}
export default Men2;