import styled from "styled-components";

import ActualCases from "./actual-cases";

export default styled(ActualCases)`
    width: 100%;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .actual {
      &-cases {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2px;
        width: 100%;

        &-categories {
          font-size: 1.5rem;
          text-align: center;
          cursor: pointer;
          background: #a0a0a0;
          padding: .5rem 2rem;
          font-weight: 600;
        }
      }

      &-cases-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
    }
`