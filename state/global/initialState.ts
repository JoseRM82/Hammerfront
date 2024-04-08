import { Messages, State } from "./types";

export const intialMessages: Messages = {
  content: '',
  user_id: '',
}

export const initialState: State = {
  client: false,
  lawyer: false,
  chatId: '',
  ownId: '',
  otherPersonId: '',
  chatIsOpen: false,
  currentTourStep: 0,
  chatSelected: false,
  chatsList: [],
  messages: [],
  message_name: '',
  currentRequest: '',
  lawyersList: [],
  sign: 'SignIn',
}