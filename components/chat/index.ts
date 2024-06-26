import styled, { css } from "styled-components";

import Chat from "./chat";
import { LuxuryColors } from "../../utils/styles";

export default styled(Chat)`
  position: fixed;
  bottom: 0rem;
  right: 3rem;
  width: 33rem;
  border-radius: 8px;
  font-size: 1.5rem;
  color: #fff;
  background: #000;
  display: none;

  ${props => props.isOpen && css`
    display: unset;
  `}
  
  .chats {
    &-head {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1rem 1rem 2rem;
      font-size: 2rem;

      &_title {
        font-weight: 500;
      }

      &_close {
        aspect-ratio: 1 / 1;
        padding: 0 1rem;
        cursor: pointer;
      }
    }

    &-body {
      height: 35rem;
      width: 100%;
      background: ${LuxuryColors.chatBackground};
      overflow: scroll;
      overflow-x: hidden;

      ::-webkit-scrollbar {
      width: 6px;
      }
    
      ::-webkit-scrollbar-thumb {
        background: #8e8e8e;
        border-radius: 20px;
      }
    }

    &-input {
      height: 5rem;
      max-width: 100%;
      background: ${LuxuryColors.buttonHover};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem 0 2rem;
      gap: 2rem;

      &_box {
        background: #c0c0c0;
        border: unset;
        padding: .5rem;
        border-radius: 5px;

        :focus-visible {
          outline: unset;
          background: #efefef;
        }
      }

      &_btn {
        background: #8e8e8e;
        border: unset;
        padding: 0 3rem 0 0;
        font-size: 1.5rem;
        font-weight: 500;
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .messages {
    &-head {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1rem 1rem 2rem;
      font-size: 2rem;
      align-items: flex-end;

      &_back {
        cursor: pointer;
        display: flex;
        opacity: .6;

        :hover {
          opacity: 1;
        }

        transition: opacity .5s;
      }

      &_name {

      }

      &_close {
        padding: 0 1rem;
        cursor: pointer;
        display: flex;
        opacity: .6;

        :hover {
          opacity: 1;
        }

        transition: opacity .5s;
      }
    }

    &-body {
      height: 33rem;
      max-width: 100%;
      background: ${LuxuryColors.chatBackground};
      display: flex;
      flex-direction: column;
      overflow: scroll;
      overflow-x: hidden;
      gap: 1.5rem;
      padding: 1rem;

      ::-webkit-scrollbar {
        width: 6px;
      }
/*       
      ::-webkit-scrollbar-track {
        background: #c0c0c0;
      } */
      
      ::-webkit-scrollbar-thumb {
        background: #8e8e8e;
        border-radius: 20px;
      }

      &_own {
        background: unset;
        color: ${LuxuryColors.selected};
        align-self: flex-end;
      }

      &_its {
        background: unset;
        color: ${LuxuryColors.selected};
        align-self: flex-start;
      }
    }

    &-input {
      height: 5rem;
      max-width: 100%;
      background: ${LuxuryColors.darkFont};
      display: flex;
      align-items: center;
      padding: 0 2rem 0 2rem;
      gap: 2rem;

      &_box {
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

      &_btn {
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
    }
  }
`