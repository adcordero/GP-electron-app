import axios from "axios";
import { z } from "zod";

export const FormDataSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  birthday: z.coerce.date(),
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});

export async function APISingUp(
  formData: z.infer<typeof FormDataSchema>,
  confirmPassword: string
) {
  try {
    FormDataSchema.parse(formData);
    if (formData.password === confirmPassword) {
      await axios
        .post(
          "https://vn5qfc9uwl.execute-api.ap-southeast-1.amazonaws.com/Coding",
          formData
        )
        .then(function (response) {
          if (response.data.body.success) {
            console.log("Successfully signed up!");
          } else {
            console.log("User exists.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Confirmed password does not match initial password.");
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(`Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`);
      console.log(err.issues);
    }
  }
}