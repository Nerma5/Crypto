import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { CryptoProvider } from "./context/useCrypto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CryptoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CryptoProvider>
);
