import React, { useEffect, useState } from "react";
import { z } from "zod";
import { FillOutProfileDataSchema } from "@backend/APIFillOutProfile";
import BaseForm from "@components/BaseForm";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProfileUpdate() {
  const [formData, setFormData] = useState<
    z.infer<typeof FillOutProfileDataSchema>
  >({ sex: "male" });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData(JSON.parse(window.sessionStorage.getItem("user")));
  }, [window.history.length]);

  const submitHandler = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const filloutprofileresponse = await window.api.filloutprofile(formData);
    if (filloutprofileresponse.success) {
      window.sessionStorage.setItem(
        "user",
        JSON.stringify(filloutprofileresponse.user)
      );
      navigate("/home");
    } else {
      console.log(filloutprofileresponse.message);
      toast.error(filloutprofileresponse.message);
    }
  };

  const [areaCode, setAreaCode] = useState("+63");

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
            defaultValue={"male"}
          >
            <option value="male" defaultChecked>
              Male
            </option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Birthday</label>
          <input
            type="date"
            className="input pl-1"
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, birthday: new Date(e.target.value) };
              })
            }
          ></input>
        </div>

        <div className="flex flex-col">
          <label>Phone Number</label>
          <div className="col-span-2 flex align-middle">
            <select
              name="area-code"
              className="input"
              onChange={(e) =>
                setAreaCode(e.target.value)
              }
              defaultValue={"+63"}
            >
              <option value="+63" defaultChecked>
                +63
              </option>
              <option value="+1">+1</option>
            </select>
            <input
              type="text"
              className="input ml-2 pl-1 w-full"
              placeholder="9XXXXXXXXX"
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, phone: (areaCode + e.target.value) };
                })
              }
            ></input>
          </div>
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
