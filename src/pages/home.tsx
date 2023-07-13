import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home_bg from "./images/landing.png";

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(
    window.sessionStorage.getItem("token")
  );

  return (
    <div className="relative">
      <img src={home_bg} alt="GP coins" className="h-overall w-full" />
      <p className="absolute text-white-100 top-7 right-7 text-5xl font-poppins text-right font-semibold">
        WELCOME, <br /> <span className="text-6xl">{username}!</span>
      </p>

      <button
        className="absolute text-black-500 bottom-7 left-7 text-md font-poppins text-right font-medium bg-yellow-300/75 p-2 rounded"
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
