import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./Context/Cart.context";
import AuthorContextProvider from "./Context/Author.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CartContextProvider>
      <AuthorContextProvider>
        <App />
      </AuthorContextProvider>
    </CartContextProvider>
  </Router>
);

reportWebVitals();
