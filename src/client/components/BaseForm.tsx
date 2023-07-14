import React from "react";
import footer from "@images/footer.png";
import logo from "@images/GP_logomark_yellow.png";

type Props = {
  header: string;
  children: string | JSX.Element | JSX.Element[];
};

const BaseForm = ({ header, children }: Props) => {
  return (
    <div className="background">
      {/* <div className="header"> */}
      <div className="text-center flex items-center justify-center">
        <div>
          <img src={logo} alt="Gamer Points™ logo" className="w-[100px]"></img>
        </div>
        <div className="font-albert-sans font-normal">
          <h1 className="text-[40px] font-bold">
            GAMER POINTS<span className="font-normal">™</span>
          </h1>
          <h3 className="text-[30px] top-[-15px] relative">{header}</h3>
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
