import styled from "styled-components";

import WhyUsList from './why-us-list';

export default styled(WhyUsList)`
  padding: 6rem 12rem;
  background: inherit;

  .cards {
    border: solid 1.9px #d7d7d7;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    background: inherit;

    .list-title {
      align-self: flex-start;
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
    }
    
    .cards:nth-child(2n) {
      .card-container{
        flex-direction: row-reverse;
      }
    }
  }
`