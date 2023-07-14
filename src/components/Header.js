import { useState } from "react";
import  {LOGO_URL} from "../utils/constants";
import * as urls from "../utils/constants";

const Header=()=>{

  const [btnName,setBtnName]=useState("Login");
  console.log(urls.CDN_URL);
  console.log(urls.LOGO_URL);

  console.log("header called",btnName);
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" 
              src={LOGO_URL} 
              alt="LOGO"
            />
          </div>
          <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login"
                onClick={()=>{
                  btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                }}>{btnName}</button>
            </ul>
          </div>
           
        </div>
    )
}

export default Header;