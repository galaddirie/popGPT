import React from "react";
import { createRoot } from "react-dom/client";
import Panel from "@pages/panel/Panel";

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(
    <React.StrictMode>
      <Panel />
    </React.StrictMode>
  );
}

init();
