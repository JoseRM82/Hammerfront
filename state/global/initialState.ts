import { State } from "./types";

export const initialState: State = {
  client: false,
  lawyer: false,
  ownId: '',
  chatIsOpen: false,
  currentChatId: '',
  chatsList: [],
  messages: [],
  message_name: '',
  currentRequest: '',
  lawyersList: [],
  sign: 'SignIn',
}