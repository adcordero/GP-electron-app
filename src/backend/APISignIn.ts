import axios from "axios";
import { z } from "zod";
import { User } from "./APITypes";

export const SignInDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInOutput = {
  success: boolean;
  message: string;
  token?: string;
  active?: boolean;
  user?: User;
};

export async function APISingIn(
  formData: z.infer<typeof SignInDataSchema>
): Promise<SignInOutput> {
  let output: SignInOutput = {
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
          console.log(response.data.body.message);
          output = {
            success: true,
            message: response.data.body.message,
            token: response.data.body.token,
            active: response.data.body.active,
            user: response.data.body.user,
          };
        } else {
          console.log(response.data.body.message);
          output = { success: false, message: response.data.body.message };
        }
      })
      .catch(function (error) {
        console.log(error);
        output = { success: false, message: "Error occurred" };
      });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(err.issues);
      output = {
        success: false,
        message: `Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`,
      };
    }
  }

  return output;
}
