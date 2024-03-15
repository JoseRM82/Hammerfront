import styled from "styled-components";

import InFirstStep from "./in-first-step";
import { Colors } from "../../../utils/styles";

export default styled(InFirstStep)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 5px 10px #00000080;
  padding: 6rem;
  gap: 2.5rem;
  background: ${Colors.lightBackground};

  .signin {
    &-title{
      align-self: center;
      font-size: 3.5rem;
      margin: 0;
      display: flex;
      gap: 1rem;
    }

    &-form {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 5rem;
      padding: 1rem 0 3rem;
      width: 100%;
    }

    &-error {
      font-size: 1.5rem;
      color: red;
    }

    &-account {
      font-size: 1.5rem;
    }

    &-btns {
      align-self: flex-end;
      display: flex;
      gap: 3rem;
    }

    &-btn {
      padding: 0 2rem;
      font-size: 2.5rem;;
    }
  }

  .overshadowed {
    opacity: .4;
  }
`