import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'caseState',
  initialState,
  reducers: {
    setNextCourt: (state, action: PayloadAction<string>) => {
      state.next_court = action.payload
    },
    setNeededFile: (state, action: PayloadAction<string>) => {
      state.needed_file = action.payload
    },
    setFileName: (state, action: PayloadAction<string>) => {
      state.file_name = action.payload
    },
    setCaseDescription: (state, action: PayloadAction<string>) => {
      state.case_description = action.payload
    },
    setFileSent: (state, action: PayloadAction<boolean>) => {
      state.file_sent = action.payload
    },
    setFileDeleted: (state, action: PayloadAction<boolean>) => {
      state.file_deleted = action.payload
    },
    setFileUrl: (state, action: PayloadAction<{name: string, url: string, key: string}>) => {
      state.file_url = action.payload
    },
  }
})