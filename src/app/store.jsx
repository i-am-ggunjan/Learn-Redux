import { configureStore } from "@reduxjs/toolkit";
import showData from "../features/counter/counterSlice";
import productReducer from "../features/products/productSlice";
import GithubReducer from "../features/github/GithubSlice";

export const store = configureStore({
  reducer: {
    showing: showData,
    product: productReducer,
    github: GithubReducer,
  },
});
