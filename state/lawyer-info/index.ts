import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'lawyerState',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setAdress: (state, action: PayloadAction<string>) => {
      state.adress = action.payload
    },
    setWorkArea: (state, action: PayloadAction<string>) => {
      state.work_area = action.payload
    },
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zip_code = action.payload
    },
    setLanguages: (state, action: PayloadAction<string>) => {
      state.languages = action.payload
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload
    },
  }
})