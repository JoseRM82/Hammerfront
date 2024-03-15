import styled from "styled-components";

import WhyUs from './why-us';

export default styled(WhyUs)`
  padding: 3rem;
  
  .card-container {
    display: flex;
    gap: 6rem;
  }

  .img-container {
    width: 200%;
    height: auto;
  }

  .description {
    font-size: 2rem;
    opacity: .8;
    text-align: justify;
  }
`