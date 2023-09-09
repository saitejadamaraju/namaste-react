import { useContext, useEffect, useState } from "react";
import  {LOGO_URL} from "../utils/constants";
import * as urls from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

  const[theme,setTheme]=useState("Dark");

  const data=useContext(UserContext);
  
  const onlineStatus=useOnlineStatus();

  const cart = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-gray-300  dark:bg-slate-700 border-solid border-2 border-white">

          <div className="w-40">
            <Link to="/"><img src={LOGO_URL}  alt="LOGO" /></Link>           
          </div>

          <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
                <li className="px-4"> 
                  <button id="theme" className="w-16 border-solid border-2 border-black rounded-lg dark:text-white" 
                  onClick={()=>{
                    if(theme==="Light")
                    {
                       document.documentElement.classList.add('dark');
                       //document.getElementById("theme").classList.add('dark');
                       //document.getElementById("theme").innerText="Light"
                       setTheme("Dark")
                    }
                    else{
                      document.documentElement.classList.remove('dark');
                       //document.getElementById("theme").classList.remove('dark');
                       //document.getElementById("theme").innerText="Dark🌚"
                       setTheme("Light")
                    }
                    
                  }}>{theme}</button>
                </li>
                <li className="px-4  dark:text-white">
                  OnlineStatus:{onlineStatus?"🟢":"🔴"}
                </li>
                <li className="px-4  dark:text-white" >
                  <Link to="/" className="card-link">Home🏠</Link>
                </li>
                <li className="px-4  dark:text-white">
                  <Link to="/about" className="card-link">About us🙋‍♂️</Link>
                </li>
                <li className="px-4  dark:text-white" >
                  <Link to="/contact" className="card-link">Contact us📞</Link>
                </li>
                <li className="px-4  dark:text-white" >
                  <Link to="/cart" className="card-link">cart🛒-({cart.length})</Link>
                </li>

                <li>{data.loggedInUser}</li>
            </ul>
          </div>
           
        </div>
    )
}

export default Header;