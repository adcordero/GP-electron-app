import axios from "axios";
import { z } from "zod";

export const SignUpDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});

export type SignUpOutput = {
  success: boolean;
  message: string;
};

export async function APISignUp(
  formData: z.infer<typeof SignUpDataSchema>,
  confirmPassword: string
): Promise<SignUpOutput> {
  let output: SignUpOutput = {
    success: false,
    message: "default",
  };

  try {
    SignUpDataSchema.parse(formData);
    if (formData.password === confirmPassword) {
      await axios
        .post(
          "https://vn5qfc9uwl.execute-api.ap-southeast-1.amazonaws.com/Coding",
          formData
        )
        .then(function (response) {
          if (response.data.body.success) {
            console.log("Successfully signed up!");
            output = {
              success: true,
              message: "Successfully signed up!",
            };
          } else {
            console.log("User exists.");
            output = {
              success: false,
              message: "User exists.",
            };
          }
        })
        .catch(function (error) {
          console.log(error);
          output = {
            success: false,
            message: `Caught error: ${error}`,
          };
        });
    } else {
      console.log("Confirmed password does not match initial password.");
      output = {
        success: false,
        message: "Confirmed password does not match initial password.",
      };
    }
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
