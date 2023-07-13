import { ipcMain } from "electron";
import IPC from "./IPCChannels";
import { APISingIn } from "./APISignIn";
import { APISingUp } from "./APISignUp";
import { APIFillOutProfile } from "./APIFillOutProfile";

ipcMain.handle(IPC.signin, async (event, formData) => {
  return await APISingIn(formData);
});

ipcMain.handle(IPC.signup, async (event, formData, confirmPassword) => {
  return await APISingUp(formData, confirmPassword);
});

ipcMain.handle(IPC.filloutprofile, async (event, formData, confirmPassword) => {
  return await APIFillOutProfile(formData, confirmPassword);
});
