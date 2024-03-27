import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'messageState',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.content = action.payload
    }
  }
})