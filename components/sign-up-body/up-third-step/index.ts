import styled from "styled-components";

import UpThirdStep from "./up-third-step";

export default styled(UpThirdStep)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 5px 10px #00000080;
  padding: 6rem;
  gap: 3rem;
  background: #fff;

  .signup-third {
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

    &-upcontainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
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