import styled, {css} from "styled-components";

import InFirstStep from "./in-first-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(InFirstStep)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: -10px 0px 10px #000000;
  gap: 2.5rem;
  height: 100vh;
  padding: 0 8rem 0 5rem;
  display: none;

  ${props => props.sign && css`
    display: flex;
  `}

  .signin {
    &-title{
      align-self: center;
      font-size: 3.5rem;
      margin: 0;
      display: flex;
      color: #fff;
    }

    &-form {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 0 3rem;
      width: 100%;
    }

    &-error {
      font-size: 1.5rem;
      color: ${LuxuryColors.button};
    }

    &-account {
      font-size: 1.5rem;
      color: #ffffff;
      display: flex;
      gap: 1rem;

      &-link {
        text-decoration: unset;
        color: ${LuxuryColors.button};
        cursor: pointer;

        :hover {
          font-weight: 600;
        }
      }
    }

    &-btns {
      align-self: flex-end;
      display: flex;
      gap: 3rem;
    }

    &-btn {
      font-weight: 600;
      padding: 0 4rem;
      font-size: 2.5rem;
      cursor: pointer;
      border-bottom: 2px solid #ffffff;
      
      transition: border-bottom .3s, opacity .3s;
    }
  }

  .overshadowed {
    border-bottom: 2px solid #ffffff5c;
    opacity: .4;
  }
`