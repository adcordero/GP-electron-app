import React, { useState } from "react";
import "./home.css";
import logo from "./images/GP_logomark_yellow.png";
import footer from "./images/footer.png";
import { z } from "zod";
import { APIFillOutProfileDataSchema } from "../backend/APIFillOutProfile";

function EmailVerification() {
  const [formData, setFormData] = useState<
    z.infer<typeof APIFillOutProfileDataSchema>
  >({});

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // const reponse = await window.api.signup(formData, confirmPassword);
  };

  return (
    <div className="body">
      <div className="header">
        <div>
          <img src={logo} alt="Gamer Points™ logo" className="logo"></img>
        </div>
        <div>
          <h1 className="brand">
            GAMER POINTS<span className="tm">™</span>
          </h1>
          <h3 className="heading">EMAIL VERIFICATION</h3>
        </div>
      </div>

      <form
        className="mx-[29px] grid grid-cols-2 text-left grid-flow-row gap-x-2"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col col-span-2">
          <label>Code</label>
          <input
            type="input"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="col-span-2 flex justify-evenly align-middle my-[30px]">
          <input
            className="button button-secondary"
            type="reset"
            value="Clear"
            onClick={(e) => setFormData({})}
          />
          <input className="button button-primary" type="submit" value="Verify" />
        </div>
      </form>

      <div className="footer">
        <img src={footer} alt="GP Currency" className="w-screen h-max"></img>
      </div>
    </div>
  );
}

export default EmailVerification;
