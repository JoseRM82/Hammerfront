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
    setUserInfo: (state, action: PayloadAction<{name: string, last_name: string} | {name: '', last_name: ''}>) => {
      state.userInfo = action.payload
    },
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload
    },
  }
})