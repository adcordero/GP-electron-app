import { APISingIn, SignInDataSchema } from "./APISignIn";
import { APISingUp, SignUpDataSchema } from "./APISignUp";

export const backend = {
  api: {
    signup: APISingUp,
    signin: APISingIn,
  },
  schema: {
    signup: SignUpDataSchema,
    signin: SignInDataSchema,
  },
};

export default backend;
