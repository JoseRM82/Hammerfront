import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'registerState',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.first_name = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.last_name = action.payload
    },
    setFirstPassword: (state, action: PayloadAction<string>) => {
      state.first_password = action.payload
    },
    setSecondPassword: (state, action: PayloadAction<string>) => {
      state.second_password = action.payload
    },
    setUserType: (state, action: PayloadAction<string>) => {
      state.user_type = action.payload
    },
  }
})