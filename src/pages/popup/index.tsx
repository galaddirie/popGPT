import React from "react";
import ReactDOM from "react-dom/client";
import "@assets/styles/index.css";
import Popup from "@src/pages/popup/Popup";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
