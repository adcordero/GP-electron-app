import React, { useState } from "react";
import "./home.css";
import logo from "./images/GP_logomark_yellow.png";
import footer from "./images/footer.png";
import coins from "./images/coin.png";
import { z } from "zod";
import { APISingUp, FormDataSchema } from "../backend/APISignUp";

function SignUp() {
  const [formData, setFormData] = useState<z.infer<typeof FormDataSchema>>({});
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const reponse = await APISingUp(formData, confirmPassword);
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

      <form className="forms" onSubmit={submitHandler}>
        <div className="name">
          <div>
            <label className="half-tag">First Name</label>
            <input
              type="text"
              className="cont"
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, firstname: e.target.value };
                })
              }
              // style={{ left: "-1px" }}
            ></input>
          </div>

          <div>
            <label className="half-tag">Last Name</label>
            <input
              type="text"
              className="cont"
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, lastname: e.target.value };
                })
              }
              // style={{ left: "5px" }}
            ></input>
          </div>
        </div>

        {/* <div>
          <label className="tag">Birthday</label>
          <input
            type="date"
            className="cont"
            style={{ width: "100%" }}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, birthday: new Date(e.target.value) };
              })
            }
          ></input>
        </div> */}

        <div className="bday-un">
          <div>
            <label className="half-tag"
            style={{left: '-158px'}}
            >Birthday</label>
            <input
            type="date"
            className="cont"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, birthday: new Date(e.target.value) };
              })
            }
            ></input>
          </div>

          <div>
            <label className="half-tag">Username</label>
            <input
              type="text"
              className="cont"
              // onChange={(e) =>
              //   setFormData((prev) => {
              //     return { ...prev, username: e.target.value };
              //   })
              // }
            ></input>
          </div>
        </div>

        <div>
          <label className="tag" style={{ left: "-360px" }}>
            Email
          </label>
          <input
            type="email"
            className="cont"
            style={{ width: "100%" }}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="password">
          <div>
            <label className="half-tag" style={{left: '-155px'}}>
              Password
            </label>
            <input
              type="text"
              className="cont"
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              style={{ left: "-1px" }}
            ></input>
          </div>

          <div>
            <label className="half-tag" style={{ left: "-125px" }}>
              Password Retype
            </label>
            <input
              type="password"
              className="pass-cont"
              style={{ left: "5px" }}
              onChange={(e) => setconfirmPassword(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="buttons">
          <input
            className="bttn"
            type="reset"
            value="Cancel"
            onClick={(e) => setFormData({})}
          />
          <input
            className="bttn"
            style={{ backgroundColor: "#F2CB05" }}
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>

      <div className="footer">
        <img src={footer} alt="GP Currency" className="coins"></img>
      </div>
    </div>
  );
}

export default SignUp;
