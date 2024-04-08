import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initial-state";
import { Information } from "./types";

export default createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setCalendarInfo: (state, action: PayloadAction<Record<string, Information>>) => {
      state.calendar_information = action.payload
    },
  }
})