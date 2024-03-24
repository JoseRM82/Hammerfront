import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";
import { Data } from "./types";

export default createSlice({
  name: 'lawyerState',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.last_name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setData: (state, action: PayloadAction<Data>) => {
      state.data = action.payload
    },
  }
})