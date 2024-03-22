import styled from "styled-components";

import WorkWithUs from './work-with-us';
import { LuxuryColors } from "../../../utils/styles";

export default styled(WorkWithUs)`
  padding: 8rem 5rem 6rem 5rem;

  .work-wu-container {
    display: flex;
    justify-content: center;
    height: 50rem;
    padding: 3rem 5rem 3rem 5rem;
    max-width: 70vw;
    gap: 5rem;
    border-radius: 5px;
  }

  .img-container {
    width: 120rem;
    height: auto;
    display: flex;
    align-items: center;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    font-size: 2rem;
  }

  .work-title {
    margin: 0;
    color: ${LuxuryColors.lightFont};
    text-align: left;
  }

  .work-text {
    text-align: left;
    opacity: .9;
    padding: 0 0 4rem 0;
    color: ${LuxuryColors.lightBackground};
  }
`