import styled from "styled-components";

import UpSecondStep from "./up-second-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpSecondStep)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .signup-second-body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 100%;
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

  .signup-error {
    font-size: 1.5rem;
    color: ${LuxuryColors.button};
  }

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

  @media (max-width: 500px) {
    padding: 0rem 1rem;

    .back-image {
      padding: 1rem 0rem 0rem;
    }

    .signup-second-title {
      font-size: 3rem;
    }

    .signup-second-form {
      max-width: 37rem;
      align-self: center;
    }

    .signup-second-body-container {
      align-items: center;
    }

    .signup-second-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      gap: 1rem;
    }
  }
`