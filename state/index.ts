import { combineReducers } from 'redux';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import clientState from './client-info'
import lawyerState from './lawyer-info'
import registerState from './register'
import userState from './user'
import loginState from './login'
import globalState from './global'
import messageState from './message'
import chatState from './chat'

const appReducer = combineReducers({
  clientState: clientState.reducer,
  lawyerState: lawyerState.reducer,
  registerState: registerState.reducer,
  userState: userState.reducer,
  loginState: loginState.reducer,
  globalState: globalState.reducer,
  messageState: messageState.reducer,
  chatState: chatState.reducer,
})

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppMiddlewareGetState = () => RootState;
export type AppReduxMiddleware = (
  dispatch: AppDispatch,
  getState: () => RootState,
) => void | Promise<void>;
