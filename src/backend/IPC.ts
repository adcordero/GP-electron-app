import { ipcMain } from "electron";
import { APISingIn } from "./APISignIn";
import IPC from "./IPCChannels";
import { APISingUp } from "./APISignUp";

ipcMain.handle(IPC.signin, async (event, formData) => {
  return await APISingIn(formData);
});

ipcMain.handle(IPC.signup, async (event, formData, confirmPassword) => {
  return await APISingUp(formData, confirmPassword);
});
