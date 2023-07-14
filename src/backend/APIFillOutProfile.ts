import axios from "axios";
import { z } from "zod";

export const FillOutProfileDataSchema = z.object({
  email: z.string().min(1),
  ign: z.string().min(4),
  fullname: z.string().min(1),
  sex: z.string().min(1),
  birthday: z.coerce.date(),
  phone: z.string().regex(new RegExp("[+]639[0-9]{9}")),
  discord: z.string().optional(),
});

export type FillOutProfileOutput = {
  success: boolean;
  message: string;
  user?: {
    sex: string;
    discord: string;
    email: string;
    fullname: string;
    ign: string;
    phone: string;
    birthday: string;
  };
};

export async function APIFillOutProfile(
  formData: z.infer<typeof FillOutProfileDataSchema>
): Promise<FillOutProfileOutput> {
  let output: FillOutProfileOutput = {
    success: false,
    message: "default",
  };

  try {
    FillOutProfileDataSchema.parse(formData);
    await axios
      .post(
        "https://yjd7aay04e.execute-api.ap-southeast-1.amazonaws.com/Coding",
        formData
      )
      .then(function (response) {
        if (response.data.body.success) {
          console.log("Profile updated!");
          output = {
            success: true,
            message: "Profile updated!",
            user: response.data.body.user,
          };
        } else {
          console.log("Profile did not update.");
          output = {
            success: false,
            message: "Profile did not update.",
          };
        }
      })
      .catch(function (error) {
        console.log(error);
        output = {
          success: false,
          message: `Error in fetch: ${error}`,
        };
      });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(`Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`);
      console.log(err.issues);
      output = {
        success: false,
        message: `Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`,
      };
    }
  }
  return output;
}
