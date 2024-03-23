import styled from "styled-components";

import UpSecondStep from "./up-second-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpSecondStep)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  .signup-second {
    &-title{
      align-self: center;
      font-size: 3.5rem;
      margin: 0;
      display: flex;
      color: #fff;
      padding: 0 0 2.5rem 0;
    }

    &-form {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      padding: 1rem 0 3rem;
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
  }
`