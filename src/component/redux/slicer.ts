import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice(
  {
    name: "page"
    , initialState: {
      page: "home"
      
    },
    reducers: {
      page : (state,action) => {
        state.page = action.payload
      }
      
    }
  }
)


export const { page} = pageSlice.actions
export default pageSlice.reducer