import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initial-state";

export default createSlice({
  name: 'clientState',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setAdress: (state, action: PayloadAction<string>) => {
      state.adress = action.payload
    },
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zip_code = action.payload
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.languages = action.payload
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phone_number = action.payload
    },
  }
})