import React, { useState } from "react";
import { z } from "zod";
import { FillOutProfileDataSchema } from "../backend/APIFillOutProfile";
import BaseForm from "@components/BaseForm";

function ProfileUpdate() {
  const [formData, setFormData] = useState<
    z.infer<typeof FillOutProfileDataSchema>
  >({});

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const reponse = await window.api.filloutprofile(formData);
  };

  return (
    <BaseForm header="Profile">
      <form
        className="mx-[29px] grid grid-cols-2 text-left grid-flow-row gap-x-2"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col col-span-2">
          <label>Full Name</label>
          <input
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, fullname: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col col-span-2">
          <label>IGN (In Game Name)</label>
          <input
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, ign: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Sex</label>
          <select
            name="sex"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, sex: e.target.value };
              })
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
          <label>Phone Number</label>
          <input
            type="text"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, phone: e.target.value };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Discord (Optional)</label>
          <input
            type="input"
            className="input"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, discord: e.target.value };
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
          <input className="button button-primary" type="submit" value="Save" />
        </div>
      </form>
    </BaseForm>
  );
}

export default ProfileUpdate;
