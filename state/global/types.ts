import { Lawyer } from "../../components/professionals/list/professionals-list";

export interface Messages {
  content: string;
  user_id: string;
}

export interface State {
  client: boolean;
  lawyer: boolean;
  chatId: string;
  ownId: string;
  otherPersonId: string;
  chatIsOpen: boolean;
  currentTourStep: number;
  chatSelected: boolean;
  chatsList: any[];
  messages: Messages[];
  message_name: string;
  currentRequest: string;
  lawyersList: Lawyer[];
  sign: string;
}