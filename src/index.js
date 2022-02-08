import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import React from "react";
import ReactDOM from "react-dom";
import Mainpage from "./mainpage/mainpage";

const httpLink = new RestLink({
  uri: "/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Mainpage />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
