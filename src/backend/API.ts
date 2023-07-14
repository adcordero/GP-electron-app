import { ipcRenderer } from "electron";
import { z } from "zod";
import IPC from "./IPCChannels";
import { APISingIn, SignInDataSchema } from "./APISignIn";
import { APISignUp, SignUpDataSchema } from "./APISignUp";
import {
  APIFillOutProfile,
  FillOutProfileDataSchema,
  FillOutProfileOutput,
} from "./APIFillOutProfile";

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
  filloutprofile: async function (
    formData: z.infer<typeof FillOutProfileDataSchema>
  ): Promise<FillOutProfileOutput> {
    return await ipcRenderer.invoke(IPC.filloutprofile, formData);
  },
};

export type apiInterface = {
  signin: typeof APISingIn;
  signup: typeof APISignUp;
  filloutprofile: typeof APIFillOutProfile;
};
