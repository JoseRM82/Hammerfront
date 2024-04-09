import styled, { css } from "styled-components";

import CasesCard from "./cases-card";
import { LuxuryColors } from "../../../../../utils/styles";

export default styled(CasesCard)`
  .files {
    cursor: pointer;
  }

  &.cases-card {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${LuxuryColors.darkCard};
    cursor: pointer;
    padding: 5rem 1rem;
    gap: 2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    
    ${props => props.showAllInfo && css`
      grid-column: span 3;
      display: flex;
      flex-direction: column;
      background: none;
      align-items: flex-start;
      gap: 2rem;
      text-align: left;
      padding: 6rem 1rem;
      text-overflow: unset;
      overflow: unset;
      cursor: initial;
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
      display: flex;
      flex-direction: column;
      /* grid-template-columns: repeat(2, 1fr); */
      gap: 2rem;
    }
  
    .complete-card-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      cursor: initial;
    }
  
    .complete-card-item {
      font-size: 1.5rem;
      color: ${LuxuryColors.selected};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: break-spaces;
    }
  
    .complete-span {
      color: ${LuxuryColors.lightFont};
      font-size: 1.5rem;
      font-weight: 700;
    }
  
    .requests {
      &-btns {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
      }
  
      &-btn {
        padding: 1rem 1rem;
      }
    }
  }

  .card-form {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .send-file-request {
    font-size: 1.8rem;
    color: ${LuxuryColors.selected};
    cursor: pointer;
  }
  
  .complete-card-desc {
    cursor: initial;
  }

  &.card-popover {
    /* cursor: pointer; */
    color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    .card-popover-element {
      justify-self: center;
      color: ${LuxuryColors.lightFont};
      cursor: pointer;
    }
  }

  .card-popover-element {
    align-self: center;
  }

  .requests {
    color: ${LuxuryColors.selected}
  }

  .files {
    color: ${LuxuryColors.button}
  }
`