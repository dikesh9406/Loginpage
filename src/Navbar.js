import "./Navbar.css";
import Bar from "./images/Bar.png";
import React, { useState } from "react";
import Mobile_Nav from "./Mobile_nav";
import "./Mobile_nav.css"
function Navbar() {
    const [status, setStatus] = useState(false);
    return (
        <div>
            <div className="Body">
                <div className="pc_nav">
                <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Menu</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="#"><li>Donate</li></a>




                    </ul>
                    <button className="button2" onClick={() => setStatus(!status)} type="button" > <img className="bar" src={Bar} alt="Bar" /></button>


                </div>
                

                


            </div>
            <div>
                    {
                        status?<Mobile_Nav/>:null
                        
                    }
          
                </div>
            
        </div>


    )
}
export default Navbar;