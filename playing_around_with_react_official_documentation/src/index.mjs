import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {MyButtons, Profile} from "./App.mjs";
import {ProductTable, SearchBar} from "./FilterableProductTable.mjs"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Profile />
    <MyButtons />
    <SearchBar />
    <ProductTable />
  </StrictMode>
);
