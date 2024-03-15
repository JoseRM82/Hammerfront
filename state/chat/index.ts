import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'chatState',
  initialState,
  reducers: {
    setChatInput: (state, action: PayloadAction<string>) => {
      state.chatInput = action.payload
    }
  }
})