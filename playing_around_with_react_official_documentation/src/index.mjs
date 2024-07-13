import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {MyButtons, Profile, ShoppingList} from "./App.mjs";
import {ProductRow,ProductCategoryRow} from "./FilterableProductTable.mjs"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Profile />
    <MyButtons />
    <ShoppingList />
    <ProductCategoryRow />
    <ProductRow />
  </StrictMode>
);
