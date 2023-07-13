// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer, contextBridge } from "electron";
import IPC from "./backend/IPCChannels";
import { APISingIn } from "./backend/APISignIn";
import { APISingUp } from "./backend/APISignUp";

contextBridge.exposeInMainWorld("api", {
  signin: async function (formData: {}): Promise<{
    success: boolean;
    message: string;
  }> {
    return await ipcRenderer.invoke(IPC.signin, formData);
  },
});

declare global {
  interface Window {
    api: {
      signin: typeof APISingIn;
      signup: typeof APISingUp;
    };
  }
}
