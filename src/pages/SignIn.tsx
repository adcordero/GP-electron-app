import React from "react";
import { Link } from "react-router-dom";
import signin_bg from "./images/sign_in.png";
import logo from "./images/GP_logomark_yellow.png";

export default function SignIn() {
  return (
    <div style={{backgroundImage: `url(${signin_bg})`}}>
      {/* <h2>SignIn Page</h2>
      <Link to="/home">goto home page</Link> */}
      <div className="flex justify-items-center items-center" style={{paddingTop: "20px", paddingLeft: "40px"}}>
        <img src={logo} alt="Gamer Points™ Logo" style={{width: "80px"}}></img>
        <h1 className="text-white flex text-4xl font-branding font-bold" >GAMER<br/>POINTS
        <span className="text-xl font-medium">™</span>
        </h1>

        
      </div>
    </div>
  );
}
