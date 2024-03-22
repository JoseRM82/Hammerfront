import styled from "styled-components";

import WhyUsList from './why-us-list';
import { LuxuryColors } from "../../../../utils/styles";

export default styled(WhyUsList)`
  padding: 10rem 12rem 15rem 12rem;
  background: ${LuxuryColors.lightBackground};

  .cards {
    /* border: solid 1.9px ${LuxuryColors.darkBackground}; */
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    background: inherit;

    .list-title {
      align-self: flex-start;
      font-size: 5rem;
      font-weight: 700;
      color: ${LuxuryColors.darkFont};
    }
    
    .cards:nth-child(2n) {
      .card-container{
        flex-direction: row-reverse;
      }

      .img-container {
        border-radius: 0px 5px 5px 0px;
      }
      
      .desc-container {
        border-radius: 5px 0px 0px 5px;
      }
    }
  }
`