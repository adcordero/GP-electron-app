import React from "react";
import { Link } from "react-router-dom";
import landing_bg from "./images/landing.png";
import logo from "./images/GP_logomark_yellow.png";

export default function Landing() {
  return (
    <div style={{backgroundImage: `url(${landing_bg})`}}>
      {/* <h2>Landing Page</h2>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link> */}

      <div className="flex justify-items-center items-center">
        <img src={logo} alt="Gamer Points™ Logo" className="h-auto max-w-xs"></img>
        <h1 className="text-white flex justify-end text-7xl font-branding font-bold">GAMER<br/>POINTS
        <span className="text-5xl font-medium">™</span>
        </h1>
        {/* <h1 className="text-white flex justify-end text-6xl">Points</h1> */}
      </div>
    </div>
  );
}
