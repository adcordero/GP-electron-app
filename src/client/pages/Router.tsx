import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./home";
import ProfileUpdate from "./ProfileUpdate";
import { Toaster } from "react-hot-toast";

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <HashRouter>
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/home" Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/profileupdate" Component={ProfileUpdate} />
      </Routes>
    </HashRouter>
  </>
);
