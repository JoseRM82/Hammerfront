import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'caseState',
  initialState,
  reducers: {
    setNextCourt: (state, action: PayloadAction<string>) => {
      state.next_court = action.payload
    },
    setNeededFiles: (state, action: PayloadAction<string>) => {
      state.needed_files = action.payload
    },
    setCaseDescription: (state, action: PayloadAction<string>) => {
      state.case_description = action.payload
    },
  }
})