import React from "react";
import footer from "../pages/images/footer.png";
import logo from "../pages/images/GP_logomark_yellow.png";

type Props = {
  header: string;
  children: string | JSX.Element | JSX.Element[];
};

const BaseForm = ({ header, children }: Props) => {
  return (
    <div className="background">
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

      {children}
      <div className="fixed bottom-0">
        <img src={footer} alt="GP Currency" className="w-screen h-max"></img>
      </div>
    </div>
  );
};

export default BaseForm;
