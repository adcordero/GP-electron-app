import { ipcMain } from "electron";
import IPC from "./IPCChannels";
import { APISingIn } from "./APISignIn";
import { APISignUp } from "./APISignUp";
import { APIFillOutProfile } from "./APIFillOutProfile";

ipcMain.handle(IPC.signin, async (event, formData) => {
  return await APISingIn(formData);
});

ipcMain.handle(IPC.signup, async (event, formData, confirmPassword) => {
  return await APISignUp(formData, confirmPassword);
});

ipcMain.handle(IPC.filloutprofile, async (event, formData) => {
  return await APIFillOutProfile(formData);
});
