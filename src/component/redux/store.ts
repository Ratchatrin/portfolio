import { configureStore } from "@reduxjs/toolkit";
import slicerReducer from "./slicer";
const store = configureStore(
  {
    reducer : {page :  slicerReducer}
  }
)

export default store