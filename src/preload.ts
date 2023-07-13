// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer, contextBridge } from "electron";
import IPC from "./backend/IPCChannels";
import { APISingIn, SignInDataSchema } from "./backend/APISignIn";
import { APISingUp, SignUpDataSchema } from "./backend/APISignUp";

contextBridge.exposeInMainWorld("api", {
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
});

declare global {
  interface Window {
    api: {
      signin: typeof APISingIn;
      signup: typeof APISingUp;
      schema: {
        signup: typeof SignUpDataSchema;
        signin: typeof SignInDataSchema;
      };
    };
  }
}
