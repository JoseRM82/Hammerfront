import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },

    setUserType: (state, action: PayloadAction<string>) => {
      state.user_type = action.payload
    },
  }
})