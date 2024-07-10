import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {MyButtons, Profile, ShoppingList} from "./App.mjs";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Profile />
    <MyButtons />
    <ShoppingList />
  </StrictMode>
);
