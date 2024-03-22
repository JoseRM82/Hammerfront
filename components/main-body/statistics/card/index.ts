import styled from "styled-components";

import StatisticCard from "./statistics-card";

export default styled(StatisticCard)`
  background: #000000d6;
  border-radius: 4px;
  color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3rem;
  padding: 3rem;
  min-width: 20rem;
  min-height: 14rem;

  .statistic-desc {
    font-size: 2rem;
    text-align: left;
  }

  .statistic-value {
    align-self: flex-end;
    font-size: 4rem;
    white-space: nowrap;
  }
`