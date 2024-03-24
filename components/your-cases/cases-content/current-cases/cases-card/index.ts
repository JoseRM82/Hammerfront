import styled, { css } from "styled-components";

import CasesCard from "./cases-card";
import { LuxuryColors } from "../../../../../utils/styles";

export default styled(CasesCard)`
  &.cases-card {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${LuxuryColors.darkCard};
    padding: 5rem 1rem;
    gap: 2rem;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    
    ${props => props.showAllInfo && css`
      grid-column: span 3;
      display: flex;
      flex-direction: column;
      background: ${LuxuryColors.buttonHover};
      align-items: center;
      gap: 2rem;
      text-align: left;
      padding: 0;
      text-overflow: unset;
      overflow: unset;
    `}
  
    .cases-card-item {
      color: ${LuxuryColors.lightFont};
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 2rem;
      max-width: 90%;
      font-weight: 600;
      padding: 0.2rem 0 0.2rem 1rem;
      text-overflow: ellipsis;
      overflow: hidden;

      ${props => props.showAllInfo && css`
        text-overflow: unset;
        overflow: unset;
      `}
    }

    .card-span {
      color: ${LuxuryColors.selected};
      font-weight: 700;
    }
  
    .complete-card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  
    .complete-card-container {
      display: flex;
      gap: 2rem;
      padding: 3rem 3rem 0 3rem;
    }
  
    .complete-card-item {
      font-size: 2rem;
      color: ${LuxuryColors.lightFont};
    }
    
    .complete-card-desc {
      font-size: 2rem;
      padding: 0rem 3rem 3rem 3rem;
    }
  
    .complete-span {
      color: ${LuxuryColors.selected};
      font-size: 2rem;
      font-weight: 700;
    }
  
    .requests {
      &-btns {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
  
      &-btn {
        padding: 1rem 1rem;
      }
    }
  }
  

  &.card-popover {
    cursor: pointer;
    color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    .card-popover-element {
      justify-self: center;
    }
  }

  .card-popover-element {
    align-self: center;
  }
`