import styled from "styled-components";

import ChatsList from "./chats-list";
import { Colors } from "../../../utils/styles";

export default styled(ChatsList)`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  cursor: pointer;
  border-bottom: .1px solid #00000025;

  :hover {
    background: #dddada;
  }

  .chat_content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0 0 0 3rem;

    &-name {
      font-size: 1.5rem;
      font-weight: 500;
      color: #000;
      max-width: 22rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &-message {
      font-size: 1.2rem;
      color: #000000;
      max-width: 22rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .chat_counter {
    font-size: 1.5rem;
    font-weight: 500;
    align-self: center;
    padding: 0 2rem 0 0;
    color: #000;
  }
`