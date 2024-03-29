import styled from "styled-components";

import Statistics from './statistics';
import { LuxuryColors } from "../../../../utils/styles";

export default styled(Statistics)`
  background-image: url('https://www.christopherjsmithlaw.com/storage/app/media/938210944.jpg');
  background-size: cover;

  .stats {
    background: #00000099;

    &-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 8rem;
      max-width: 2200px;
      margin: auto;
    }

    &-text {
      color: ${LuxuryColors.selected};
      text-align: justify;
      font-size: 2rem;
      padding: 6rem 6rem 6rem 7rem;
    }

    &-data {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 3rem 7rem 3rem 3rem;
    }
  }

  .stats-mobile-text {
    display: none;
  }

  .stats-data-mobile-item {
      display: none;
  }

  @media (max-width: 1100px) {
    .stats-container {
      gap: unset;
    }

    .stats-text {
      display: none;
    }

    .stats-mobile-text {
      display: unset;
      color: ${LuxuryColors.selected};
      text-align: left;
      font-size: 2rem;
      padding: 3rem 1rem 3rem 2rem;
    }
    
    .stats-data {
      padding: 3rem;
    }

    .stats-data-mobile-item {
      display: none;
    }
  }

  @media (max-width: 800px) {
    background-size: unset;

    .stats-container {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stats-text {
      display: none;
    }

    .stats-mobile-text {
      display: unset;
      color: ${LuxuryColors.selected};
      text-align: center;
      font-size: 2rem;
      padding: 5rem 1rem 1rem 1rem;
    }

    .stats-data {
      display: flex;
      flex-direction: column;
    }

    .stats-data-item {
      display: none;
    }

    .stats-data-mobile-item {
      display: unset;
    }
  }
`