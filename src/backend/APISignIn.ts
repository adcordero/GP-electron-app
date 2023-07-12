import axios from "axios";
import { z } from "zod";

export const SignInDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function APISingIn(formData: z.infer<typeof SignInDataSchema>) {
  try {
    SignInDataSchema.parse(formData);
    await axios
      .post("https://oc54upda5b.execute-api.ap-southeast-1.amazonaws.com/Coding", formData)
      .then(function (response) {
        if (response.data.body.success) {
          console.log("Successfully signed in!");
        } else {
          console.log("Invalid user details!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(`Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`);
      console.log(err.issues);
    }
  }
}