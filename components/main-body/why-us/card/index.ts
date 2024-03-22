import styled from "styled-components";

import WhyUs from './why-us';
import { LuxuryColors } from "../../../../utils/styles";

export default styled(WhyUs)`
  background: ${LuxuryColors.lightBackground};
  border-radius: 5px;

  &.why-us-image {
    background: ${LuxuryColors.darkButton};
  }
  
  .card-container {
    display: flex;
  }

  .img-container {
    width: 200%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0px 0px 5px;
    background: ${LuxuryColors.darkButton};
  }
  
  .desc-container {
    padding: 6rem 4rem 6rem 4rem;
    background: ${LuxuryColors.darkBackground};
    text-align: center;
    border-radius: 0px 5px 5px 0px;
  }

  .description {
    font-size: 2rem;
    opacity: .8;
    color: ${LuxuryColors.lightFont};
  }
`