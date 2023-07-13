import { ipcRenderer } from "electron";
import { APISingIn, SignInDataSchema } from "./APISignIn";
import { APISingUp, SignUpDataSchema } from "./APISignUp";
import IPC from "./IPCChannels";

export const API = {
  schema: {
    signup: SignUpDataSchema,
    signin: SignInDataSchema,
  },
  signin: async function (formData: {}): Promise<{
    success: boolean;
    message: string;
  }> {
    return await ipcRenderer.invoke(IPC.signin, formData);
  },
  signup: async function (
    formData: {},
    confirmPassword: string
  ): Promise<{
    success: boolean;
    message: string;
  }> {
    return await ipcRenderer.invoke(IPC.signup, formData, confirmPassword);
  },
};

export type apiInterface = {
  signin: typeof APISingIn;
  signup: typeof APISingUp;
  schema: {
    signup: typeof SignUpDataSchema;
    signin: typeof SignInDataSchema;
  };
};
