import React, { useState } from "react";
import "./home.css";
import logo from "./images/GP_logomark_yellow.png";
import { z } from "zod";

const FormDataSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  birthday: z.coerce.date(),
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});

function Home() {
  const [formData, setFormData] = useState<z.infer<typeof FormDataSchema>>({});
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);

    const validation = FormDataSchema.safeParse(formData);
    console.log(validation);
    console.log(validation.success);

    if (validation.success) {
      if (formData.password === confirmPassword) {
        alert("Yay sign up");
      }
    }
  };

  return (
    <div className="body">
      <div className="header">
        <div>
          <img src={logo}></img>
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
                  return { ...prev, birthday: new Date(e.target.value) };
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
      </div>
    </div>
  );
}

export default Home;
