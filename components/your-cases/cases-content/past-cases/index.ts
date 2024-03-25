import styled from "styled-components";

import PastCases from './past-cases'
import { LuxuryColors } from "../../../../utils/styles";

export default styled(PastCases)`
  width: 100%;
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .past-cases-container{
    padding: 20rem 0rem 0rem 0rem;
  }

  .past-cases {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    width: 100%;

    &-categories {
      font-size: 3rem;
      text-align: center;
      background: ${LuxuryColors.alternative};
      color: ${LuxuryColors.button};
      padding: .5rem 2rem;
      font-weight: 600;
    }

    &-list {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
  }
`