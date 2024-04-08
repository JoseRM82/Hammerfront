import styled from "styled-components";

import CurrentCases from "./current-cases";
import { LuxuryColors } from "../../../../utils/styles";

export default styled(CurrentCases)`
  width: 100%;
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .current-cases-container{
    padding: 20rem 0rem 0rem 0rem;
  }

  .current {
    &-cases-categories {
      font-size: 3rem;
      text-align: center;
      background: ${LuxuryColors.alternative};
      color: ${LuxuryColors.button};
      padding: .5rem 2rem;
      font-weight: 600;
    }

    &-cases-list {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
  }

  &.chat-drawer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: -webkit-fill-available;
    width: -webkit-fill-available;
  }

  &.messages-body {
    height: -webkit-fill-available;
    min-width: 80%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    gap: 1.5rem;
    padding: 1rem;

    ::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #8e8e8e;
      border-radius: 20px;
    }
  }

  &.messages-body_own {
    background: unset;
    color: ${LuxuryColors.selected};
    align-self: flex-end;
    width: unset;
  }

  &.messages-body_its {
    background: unset;
    color: ${LuxuryColors.selected};
    align-self: flex-start;
    width: unset;
  }

  &.messages-input {
    height: 5rem;
    min-width: 80%;
    background: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }

  .messages-input_box {
    background: unset;
    border: unset;
    padding: .5rem;
    border-radius: 5px;
    color: ${LuxuryColors.lightFont};
    width: 100%;

    :focus-visible {
      outline: unset;
    }
  }

  .messages-input_btn {
    background: unset;
    border: unset;
    display: flex;
    height: 100%;
    cursor: pointer;
    opacity: .6;

    :hover {
      opacity: 1;
    }

    transition: opacity .5s;
  }
    
  @media (max-width: 900px) {
    .current-cases-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    padding: 0rem 2rem;

    .current-cases-list {
      display: flex;
    }
  }
`