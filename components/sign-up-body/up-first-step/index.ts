import styled from "styled-components";

import UpFirstStep from "./up-first-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpFirstStep)`
  display: flex;
  flex-direction: column;
  
  .signup-body-container {
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

  @media (max-width: 500px) {
    .back-image {
      padding: 1rem 0rem 0rem;
    }

    .signup-form {
      max-width: 37rem;
      align-self: center;
    }

    .signup-body-container {
      align-items: center;
    }

    .signup-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      gap: 1rem;
    }
  }
`