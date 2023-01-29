import React from "react";
import { createRoot } from "react-dom/client";
import Options from "@pages/options/Options";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(
    <React.StrictMode>
      <Options />
    </React.StrictMode>
  );
}

init();
