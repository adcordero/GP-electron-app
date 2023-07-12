import axios from "axios";
import { z } from "zod";

export const SignInDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});

export async function APISingIn(formData: z.infer<typeof SignInDataSchema>) {
  try {
    SignInDataSchema.parse(formData);
    await axios
      .post("INSERT LINK HERE", formData)
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
