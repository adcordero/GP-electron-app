import React, { useState } from "react";
import "./home.css";
import { Row, Col, Button } from "react-bootstrap";
// import logo from "./images/GP_logomark yellow.png";
// import { Password } from 'primereact/password';

import { z } from "zod";

const FormDataSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  birthday: z.coerce.date(),
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});

function Home() {
  const [formData, setFormData] = useState({});

  const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const output=FormDataSchema.safeParse({
    //     firstname: "1",
    //     lastname: "1",
    //     birthday: "2023/12/01",
    //     email: "test@gmail.com",
    //     password: "12345678",
    // });
    console.log(formData);
    const validation = FormDataSchema.safeParse(formData);
    console.log(validation);
  };

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  // const [lastName, setLastName]= useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [retypePass, setRetypePass] = useState<string>("");
  // const []

  // const [showPass, setShowPass] = useState<boolean>(false);
  // const [showRetype, setShowRetype] = useState<boolean>(false);

  const typeFirstName = (e: string) => {
    setFirstName(e);
  };

  const typeLastName = (e: string) => {
    setLastName(e);
  };

  const typeEmail = (e: string) => {
    setEmail(e);
  };

  const typePassword = (e: string) => {
    setPassword(e);
  };

  const retypePassword = (e: string) => {
    setRetypePass(e);
  };

  // const handleShowPassword = () => {

  // }

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRetypePass("");
  };

  return (
    <div className="body">
      <div className="header">
        <div>
          {/* <img src={require("./images/GP_logomark yellow.png")}></img> */}
        </div>
        <div>
          <h1 className="brand">
            GAMER POINTS<span className="tm">™</span>
          </h1>
          <h3 className="heading">REGISTRATION</h3>
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
              ></input>
            </div>
          </div>

          <div>
            <label className="tag">Birthday</label>
            <input
              type="date"
              className="cont"
              style={{ width: "728px" }}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, birthday: e.target.value };
                })
              }
            ></input>
          </div>

          <div>
            <label className="tag" style={{ left: "-340px" }}>
              Email
            </label>
            <input
              type="email"
              className="cont"
              style={{ width: "728px" }}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            ></input>
          </div>

          <div className="password">
            <div>
              <label className="half-tag" style={{ left: "-145px" }}>
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
              ></input>
            </div>

            <div>
              <label className="half-tag" style={{ left: "-120px" }}>
                Password Retype
              </label>
              <input
                type="password"
                className="pass-cont"
                onChange={(e) => retypePassword(e.target.value)}
                value={retypePass}
              ></input>
            </div>
          </div>

          <div className="buttons">
            <button className="bttn" onClick={() => resetForm()}>
              Cancel
            </button>
            <button
              className="bttn"
              style={{ backgroundColor: "#F2CB05" }}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
