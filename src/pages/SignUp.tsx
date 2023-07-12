import React, { useState } from "react";
import "./home.css";
import logo from "./images/GP_logomark_yellow.png";
import footer from "./images/footer.png";
import coins from "./images/coin.png";
import { z } from "zod";
import axios from "axios";
const FormDataSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  birthday: z.coerce.date(),
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});

function SignUp() {
  const [formData, setFormData] = useState<z.infer<typeof FormDataSchema>>({});
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log(formData);

    // dialog.showMessageBox({
    //   type: 'question',
    //   title: 'Question',
    //   message: 'Do you want to do this?',
    // });

    try {
      FormDataSchema.parse(formData);
      if (formData.password === confirmPassword) {
        await axios
          .post(
            "https://vn5qfc9uwl.execute-api.ap-southeast-1.amazonaws.com/Coding",
            formData
          )
          .then(function (response) {
            if (response.data.body.success) {
              alert("Successfully signed up!");
            } else {
              alert("User exists.");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert("Confirmed password does not match initial password.");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert(`Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`);
        console.log(err.issues);
      }
    }
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
              style={{ left: "-1px" }}
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
              style={{ left: "5px" }}
            ></input>
          </div>
        </div>

        <div>
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
        </div>

        <div>
          <label className="tag" style={{ left: "-340px" }}>
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
              style={{ left: "-1px" }}
            ></input>
          </div>

          <div>
            <label className="half-tag" style={{ left: "-120px" }}>
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
        {/* <img src={footer} alt="GP Currency" className="coin"></img> */}
        {/* <img src={coins} alt="GP Currency" className="coins"></img>
            <img src={coins} alt="GP Currency" className="coins"></img> */}
      </div>
    </div>
  );
}

export default SignUp;
