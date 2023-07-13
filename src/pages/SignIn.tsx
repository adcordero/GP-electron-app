import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signin_bg from "./images/sign_in.png";
import logo from "./images/GP_logomark_yellow.png";
import { z } from "zod";
import { SignInDataSchema } from "../backend/APISignIn";

export default function SignIn() {
  const [formData, setFormData] = useState<z.infer<typeof SignInDataSchema>>(
    {}
  );

  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const signinresponse = await window.api.signin(formData);

    if (signinresponse.success) {
      if (signinresponse.data) {
        window.sessionStorage.setItem("token", signinresponse.data);
      }
      navigate("home");
    }
  };

  return (
    <div style={{ backgroundImage: `url(${signin_bg})` }}>
      {/* <h2>SignIn Page</h2>
      <Link to="/home">goto home page</Link> */}
      <div className="flex justify-items-center items-center text-center pt-5 pl-16">
        <img src={logo} alt="Gamer Points™ Logo" className="w-28"></img>
        <h1 className="text-white-200 flex text-5xl font-albert-sans font-bold">
          GAMER
          <br />
          POINTS
          <span className="text-2xl font-medium">™</span>
        </h1>
      </div>

      <form
        className="justify-items-center items-center pt-5 pl-10"
        onSubmit={submitHandler}
      >
        <div>
          <label className="text-white-200 text-md relative left-2">
            Email
          </label>
          <br />
          <input
            type="email"
            className="bg-white-200 w-5/12 rounded"
            // style={{ width: "365px", borderRadius: "5px"}}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          ></input>
        </div>

        <div>
          <label className="text-white-200 text-md relative left-2">
            Password
          </label>
          <br />
          <input
            type="password"
            className="bg-white-200 w-5/12 rounded"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="pt-10">
          <button
            className="h-8 w-28 bg-white-200/50 ml-9 rounded text-white-100 font-albert-sans"
            type="button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
          <input
            className="h-8 w-28 bg-yellow-300/50 ml-8 rounded text-white-100 font-albert-sans"
            // style={{ backgroundColor: "#F2CB05" }}
            type="submit"
            value="Log In"
          />
        </div>
      </form>

      <div className="justify-items-center items-center pt-8 pl-10">
        <p className="text-yellow-500 font-albert-sans font-bold text-base">
          TURN YOUR GAMING <br /> PASSION INTO PROFESSION
        </p>
        <p className="text-white-100 font-poppins text-xs pt-1.5 pb-2">
          <span className="font-semibold">Gamer Points™</span> is a
          gaming/ad-tech <br /> company platform that allows you to <br />{" "}
          passively earn real world money by <br />
          playing your favorite video game.
        </p>
      </div>
    </div>
  );
}
