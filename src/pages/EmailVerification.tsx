import React, { useState } from "react";
import { z } from "zod";
import { APIFillOutProfileDataSchema } from "../backend/APIFillOutProfile";
import BaseForm from "@components/BaseForm";

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
    <BaseForm header="Email Verification">
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
            onClick={() => setFormData({})}
          />
          <input
            className="button button-primary"
            type="submit"
            value="Verify"
          />
        </div>
      </form>
    </BaseForm>
  );
}

export default EmailVerification;
