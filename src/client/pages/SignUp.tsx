import React, { useState } from "react";
import { z } from "zod";
import { SignUpDataSchema } from "@backend/APISignUp";
import BaseForm from "@components/BaseForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignUp() {
  const [formData, setFormData] = useState<z.infer<typeof SignUpDataSchema>>(
    {}
  );
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const signupResponse = await window.api.signup(formData, confirmPassword);

    if (signupResponse.success) {
      navigate("/");
    } else {
      console.log(signupResponse.message);
      toast.error(signupResponse.message);
    }
  };

  const inputHandler = (e: React.ChangeEvent<any>) =>
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

  return (
    <BaseForm header="Sign Up">
      <form
        className="mx-[29px] grid grid-cols-2 text-left grid-flow-row gap-x-2"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col col-span-2">
          <label>Email</label>
          <input
            type="email"
            className="input"
            name="email"
            onChange={inputHandler}
          />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="text"
            className="input"
            name="password"
            onChange={inputHandler}
          />
        </div>

        <div className="flex flex-col">
          <label>Password Retype</label>
          <input
            type="password"
            className="input"
            onChange={(e) => setconfirmPassword(e.target.value)}
          ></input>
        </div>

        <div className="col-span-2 flex justify-evenly align-middle my-[30px] font-albert-sans">
          <input
            className="button bg-black-200 text-white-200"
            type="button"
            value="Log In"
            onClick={() => navigate("/")}
          />
          <input
            className="button button-secondary"
            type="reset"
            value="Cancel"
            onClick={() => setFormData({})}
          />
          <input
            className="button button-primary"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </BaseForm>
  );
}

export default SignUp;
