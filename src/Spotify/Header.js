import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

export default function Header(){
      return(
        <>
        <div className="container7">  
        <i class="fa-solid fa-angle-left"></i>
        <i class="fa-solid fa-angle-right"></i>
        
        <p className="p1"><Link id="sign" to="/signup">sign up</Link></p>
        
        
        <button id="btn1" type="button"><Link to="/login"><p className="p2">Log in</p> </Link></button>
       
        
        
        </div>
        <div className="container8">
          <div className="p3">Weekend Mix</div>
          <div className="container9">
          <Link to="/song"><div className="p4"><img className="img1" src="./image/1.jpg" atl="star boy"/><p className="p5">2016.. The Weeknd</p></div></Link>
            <div className="p4"><img className="img1" src="./image/2.jpg" atl="memory reboot"/><p className="p5">2023.. Memory Reboot</p></div>
            <div className="p4"><img className="img1" src="./image/3.jpg" atl="unforgettable"/><p className="p5">2017.. Unforgettable</p></div>
            <div className="p4"><img className="img1" src="./image/4.jpg" atl="after hours"/><p className="p5">2020.. After Hours</p></div>
          </div>
           
          <div className="container10">
             <div className="p6">Company
                  <p id="p9">About</p>
                  <p id="p9">Jobs</p>
                  <p id="p9">For the Record</p> 
             </div>
                  
                  <div className="p6">Communities
                  <p id="p9">For Artists</p>
                  <p id="p9">Developers</p>
                  <p id="p9">Advertising</p>
                  <p id="p9">Investors</p>
                  </div>
                  
                  <div className="p6">Useful links
                  <p id="p9">Support</p>
                  <p id="p9">Free mobile App</p>
                  </div>
                 
             <div className="p7">
              <span id="p7">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
              </span>
            
             </div>  
            
          </div> 
          <div className="under"></div> 
          <div className="copyright">© 2023 Spotify AB</div>
        
        </div>
        </>
      )
}
