import styled from "styled-components";

import UpSecondStep from "./up-second-step";

export default styled(UpSecondStep)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 5px 10px #00000080;
  padding: 6rem;
  gap: 3rem;
  background: #fff;

  .signup-second {
    &-title{
      align-self: center;
      font-size: 3.5rem;
      margin: 0;
    }

    &-form {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 5rem;
      width: 100%;
      padding: 3rem 0;
    }

    &-account {
      font-size: 1.5rem;
    }

    &-btns {
      align-self: flex-end;
      display: flex;
      gap: 3rem;
    }
  }
`