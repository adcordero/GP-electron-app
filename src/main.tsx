import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const container = document.getElementById("app");
// Create a root.
const root = ReactDOMClient.createRoot(container);

// create graphql client
// const client = new ApolloClient({
//   uri: "https://flyby-router-demo.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

// Initial render: Render an element to the root.
root.render(
  // <ApolloProvider client={client}>
  <HashRouter>
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/signup" Component={SignUp} />
      <Route path="/home" Component={Home} />
    </Routes>
  </HashRouter>
  // </ApolloProvider>
);
