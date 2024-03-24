import styled, {css} from "styled-components";

import InFirstStep from "./in-first-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(InFirstStep)`
  flex-direction: column;
  box-shadow: -10px 0px 10px #000000;
  height: 100vh;
  padding: 0 8rem 0 5rem;
  display: flex;
  /* display: none; */

  ${props => props.sign && css`
    display: flex;
  `}

  .signin-body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    height: 80%;
  }

  .back-image {
    justify-self: flex-start;
    width: fit-content;
    cursor: pointer;
    opacity: .3;
    padding: 3rem 0rem 0rem;

    :hover {
      opacity: unset;
    }
  }

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