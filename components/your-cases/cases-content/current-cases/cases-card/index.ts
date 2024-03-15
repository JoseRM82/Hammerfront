import styled, { css } from "styled-components";

import CasesCard from "./cases-card";

export default styled(CasesCard)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;
  cursor: pointer;

  ${props => props.showAllInfo && css`
    display: flex;
    flex-direction: column;
    background: #e0d69e;
    gap: 2rem;
    text-align: left;
    padding: 2.5rem;
  `}

  .cases-card-item {
    background: #e0d69e;
    text-align: left;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    padding: 0.2rem 0 0.2rem 1rem;
  }

  .complete-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    width: 100%;
  }

  .complete-card-container {
    display: flex;
    gap: 2rem;
  }

  .complete-card-item {
    font-size: 2rem;
  }

  .complete-span {
    font-size: 2rem;
    font-weight: 600;
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
`