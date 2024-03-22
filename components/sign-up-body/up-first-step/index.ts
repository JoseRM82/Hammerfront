import styled from "styled-components";

import UpFirstStep from "./up-first-step";

export default styled(UpFirstStep)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .signup {
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
      width: 100%;
      padding: 3rem 0;
    }

    &-names {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
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