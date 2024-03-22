import { Lawyer } from "../../components/professionals/list/professionals-list";

export interface State {
  client: boolean;
  lawyer: boolean;
  ownId: string;
  chatIsOpen: boolean;
  currentChatId: string;
  chatsList: any[];
  messages: any[];
  message_name: string;
  currentRequest: string;
  lawyersList: Lawyer[];
  sign: string;
}