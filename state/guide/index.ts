import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'guideState',
  initialState,
  reducers: {
    setGuideAvailable: (state, action: PayloadAction<boolean>) => {
      state.guideAvailable = action.payload
    },
    setGuideCurrentOpen: (state, action: PayloadAction<boolean>) => {
      state.guideCurrentOpen = action.payload
    },
    setGuideCaseOpen: (state, action: PayloadAction<boolean>) => {
      state.guideCaseOpen = action.payload
    },
    setGuideCalendarOpen: (state, action: PayloadAction<boolean>) => {
      state.guideCalendarOpen = action.payload
    },
    setGuideRequestsOpen: (state, action: PayloadAction<boolean>) => {
      state.guideRequestsOpen = action.payload
    },
    setGuidePastOpen: (state, action: PayloadAction<boolean>) => {
      state.guidePastOpen = action.payload
    },
  }
})