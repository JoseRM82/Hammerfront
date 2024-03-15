import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from './initial-state';
import { UserType } from "./types";

export default createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<UserType | null>) => {
      state.type = action.payload
    },
    setTokenUser: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
    },
  }
})