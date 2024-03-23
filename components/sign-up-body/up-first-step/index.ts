import styled from "styled-components";

import UpFirstStep from "./up-first-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpFirstStep)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .signup {
    &-title{
      align-self: center;
      font-size: 3rem;
      margin: 0;
      display: flex;
      color: #fff;
    }

    &-form {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      padding: 1rem 0 3rem;
    }

    &-names {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
    }

    &-account {
      font-size: 1.5rem;
      color: #fff;
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
    opacity: .4;
  }
`