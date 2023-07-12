import { APISingUp, SignUpDataSchema } from "./APISignUp";

export const backend = {
  api: {
    signup: APISingUp,
  },
  schema: {
    signup: SignUpDataSchema
  }
};

export default backend;
