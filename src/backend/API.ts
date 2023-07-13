import { ipcRenderer } from "electron";
import { APISingIn, SignInDataSchema } from "./APISignIn";
import { APISingUp, SignUpDataSchema } from "./APISignUp";
import IPC from "./IPCChannels";
import { z } from "zod";

export const API = {
  signin: async function (formData: z.infer<typeof SignInDataSchema>): Promise<{
    success: boolean;
    message: string;
  }> {
    return await ipcRenderer.invoke(IPC.signin, formData);
  },
  signup: async function (
    formData: z.infer<typeof SignUpDataSchema>,
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
};
