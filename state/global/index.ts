import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

export default createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setClientActive: (state, action: PayloadAction<boolean>) => {
      state.client = action.payload
    },

    setLawyerActive: (state, action: PayloadAction<boolean>) => {
      state.lawyer = action.payload
    },

    setOwnId: (state, action: PayloadAction<string>) => {
      state.ownId = action.payload
    },

    setChatIsOpen: (state, action: PayloadAction<boolean>) => {
      state.chatIsOpen = action.payload
    },

    setCurrentChatId: (state, action: PayloadAction<string>) => {
      state.currentChatId = action.payload
    },

    setChatsList: (state, action: PayloadAction<any[]>) => {
      state.chatsList = action.payload
    },

    setMessages: (state, action: PayloadAction<any[]>) => {
      state.messages = action.payload
    },

    setMessageName: (state, action: PayloadAction<string>) => {
      state.message_name = action.payload
    },

    setCurrentRequest: (state, action: PayloadAction<string>) => {
      state.currentRequest = action.payload
    },
    
    setLawyersList: (state, action: PayloadAction<any[]>) => {
      state.lawyersList = action.payload
    },

    setSign: (state, action: PayloadAction<string>) => {
      state.sign = action.payload
    },
  }
})