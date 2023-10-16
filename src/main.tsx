import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import MainTheme from "./utils/theme";

const element = document.getElementById("root")!;
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainTheme />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
