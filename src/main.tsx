import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Home from "./pages/home";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const container = document.getElementById("app");
// Create a root.
const root = ReactDOMClient.createRoot(container);

// create graphql client
const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

// Initial render: Render an element to the root.
root.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
