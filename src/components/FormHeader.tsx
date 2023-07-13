import React from "react";
import logo from "../pages/images/GP_logomark_yellow.png";

type props = {
  header: string;
};

const FormHeader = ({ header }: props) => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="Gamer Points™ logo" className="logo"></img>
      </div>
      <div>
        <h1 className="brand">
          GAMER POINTS<span className="tm">™</span>
        </h1>
        <h3 className="heading">{header}</h3>
      </div>
    </div>
  );
};

export default FormHeader;
