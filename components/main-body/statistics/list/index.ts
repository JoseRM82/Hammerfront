import styled from "styled-components";

import Statistics from './statistics';

export default styled(Statistics)`
  background-image: url('https://www.christopherjsmithlaw.com/storage/app/media/938210944.jpg');
  background-size: cover;

  .stats {
    background: #00000099;
    width: 100vw;

    &-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 8rem;
      max-width: 2200px;
      margin: auto;
    }

    &-text {
      color: #efefef;
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
`