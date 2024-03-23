import styled from "styled-components";

import CurrentCases from "./current-cases";

export default styled(CurrentCases)`
    width: 100%;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .current {
      &-cases {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2px;
        width: 100%;

        &-categories {
          font-size: 1.5rem;
          text-align: center;
          background: #a0a0a0;
          padding: .5rem 2rem;
          font-weight: 600;

          &-sort{
          font-size: 1.5rem;
          text-align: center;
          background: #a0a0a0;
          padding: .5rem 2rem;
          font-weight: 600;
          cursor: pointer;
          }
        }
      }

      &-cases-list {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
      }
    }

    .current-cases-cards {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }

    .current-cases-cards-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }   
`