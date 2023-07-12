import React, { useState } from "react";
import "./home.css";
import logo from "./images/GP_logomark_yellow.png";
import footer from "./images/footer.png";
import coins from "./images/coin.png";
import { z } from "zod";
import backend from "../backend";

function SignUp() {
  const [formData, setFormData] = useState<
    z.infer<typeof backend.schema.signup>
  >({});
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const reponse = await backend.api.signup(formData, confirmPassword);
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
          <h3 className="heading">REGISTRATION</h3>
        </div>
      </div>

      <form
        className="mx-[29px] grid grid-cols-2 text-left grid-flow-row gap-x-2"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col">
          <label>First Name</label>
          <input
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, firstname: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Last Name</label>
          <input
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, lastname: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Birthday</label>
          <input
            type="date"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, birthday: new Date(e.target.value) };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            className="input"
            // onChange={(e) =>
            //   setFormData((prev) => {
            //     return { ...prev, username: e.target.value };
            //   })
            // }
          ></input>
        </div>

        <div className="flex flex-col col-span-2">
          <label>Email</label>
          <input
            type="email"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Password Retype</label>
          <input
            type="password"
            className="input"
            onChange={(e) => setconfirmPassword(e.target.value)}
          ></input>
        </div>

        <div className="col-span-2 flex justify-evenly align-middle my-[30px]">
          <input
            className="button button-secondary"
            type="reset"
            value="Cancel"
            onClick={(e) => setFormData({})}
          />
          <input
            className="button button-primary"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>

      <div className="footer">
        <img src={footer} alt="GP Currency" className="w-screen h-max"></img>
      </div>
    </div>
  );
}

export default SignUp;
