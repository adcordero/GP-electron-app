import axios from "axios";
import { z } from "zod";

export const APIFillOutProfileDataSchema = z.object({
  fullname: z.string().min(1),
  ign: z.string().min(4),
  displayname: z.string().min(1),
  sex: z.string().min(1),
  birthday: z.coerce.date(),
  phonenumber: z.string().regex(new RegExp("[+]639[0-9]{9}")),
  discord: z.string().optional(),
});

export async function APIFillOutProfile(
  formData: z.infer<typeof APIFillOutProfileDataSchema>
) {
  try {
    APIFillOutProfileDataSchema.parse(formData);
    await axios
      .post("TODO: FILL OUT PROFILE LINK", formData)
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
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.log(`Field: ${err.issues[0].path[0]} - ${err.issues[0].message}`);
      console.log(err.issues);
    }
  }
}
