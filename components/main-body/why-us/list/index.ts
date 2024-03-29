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

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    background: inherit;
  }

  .phone-container {
    display: none;
  }

  @media (max-width: 750px) {
    padding: 10rem 6rem 15rem 6rem;

    .container {
      display: none;
    }

    .phone-container {
      display: flex;
      flex-direction: column;
      
      .img-container {
        width: 100%;
        padding: 3rem 0;
        border-radius: 5px 5px 0px 0px;
      }
      
      .desc-container {
        width: auto;
        border-radius: 0px 0px 5px 5px;
      }

      .card-container {
        flex-direction: column;
      }
      
      .phone-cards {
        flex-direction: column;
      }

      .phone-cards:nth-child(2n) {
        .card-container{
          flex-direction: column;
        }
  
        .img-container {
          padding: 3rem 0;
          border-radius: 5px 5px 0px 0px;
        }
        
        .desc-container {
          border-radius: 0px 0px 5px 5px;
        }
      }
    }

  }

  @media (max-width: 1000px) {
    .phone-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
      background: inherit;
    }

    .img-container {
      width: 40%;
    }

    .desc-container {
      width: 60%;
    }

    .container {
      display: none;
    }

    .phone-cards:nth-child(2n) {
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

  @media (min-width: 1850px) {
    @media (min-height: 950px) {
      .content-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`