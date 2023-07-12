import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home_bg from "./images/landing.png";

export default function Home() {

  let navigate = useNavigate();

  const routeChange = (toGo:string) => {
    // let path = toGo;
    navigate(toGo);
  }

  const [username, setUsername] = useState("placeholder");

  return (
    <div className="relative">
        <img src={home_bg} alt="GP coins" className="h-overall w-full"/>
        <p className="absolute text-white-100 top-7 right-7 text-5xl font-poppins text-right font-semibold">WELCOME, <br/> <span className="text-6xl">{username}!</span></p>

        <button className="absolute text-black-500 bottom-7 left-7 text-md font-poppins text-right font-medium bg-yellow-300/75 p-2 rounded" onClick={() => {routeChange('/')}}>Logout</button>
    </div>
  );
}
