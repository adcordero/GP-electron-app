import axios from "axios";
import { z } from "zod";

export const SignInDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function APISingIn(
  formData: z.infer<typeof SignInDataSchema>
): Promise<{
  success: boolean;
  message: string;
  token?: string;
  active?: boolean;
  ign?: string;
}> {
  let output: {
    success: boolean;
    message: string;
    token?: string;
    active?: boolean;
    ign?: string;
  } = {
    success: false,
    message: "default",
  };

  try {
    SignInDataSchema.parse(formData);
    await axios
      .post(
        "https://oc54upda5b.execute-api.ap-southeast-1.amazonaws.com/Coding",
        formData
      )
      .then(function (response) {
        if (response.data.body.success) {
          console.log("Successfully signed in!");
          output = {
            success: true,
            message: "success",
            token: response.data.body.token,
            active: response.data.body.active,
            ign: response.data.body.ign,
          };
        } else {
          console.log("Invalid user details!");
          output = { success: false, message: "invalid user details" };
        }
      })
      .catch(function (error) {
        console.log(error);
        output = { success: false, message: "error occurred" };
      });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(`Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`);
      console.log(err.issues);
      output = { success: false, message: "error catch" };
    }
  }

  return output;
}
