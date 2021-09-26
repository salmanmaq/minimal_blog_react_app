import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PostsContextProvider } from "./store/posts-context";

ReactDOM.render(
  <PostsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostsContextProvider>,
  document.getElementById("root")
);
