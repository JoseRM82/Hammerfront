import styled, {css} from "styled-components";

import SignUpBody from "./sign-up-body";
import { LuxuryColors } from "../../utils/styles";

export default styled(SignUpBody)`
  box-shadow: -10px 0px 10px #000000;
  height: 100vh;
  padding: 0 8rem 0 5rem;
  gap: 2.5rem;
  display: flex;
  

  ${props => props.sign && css`
    display: flex;
  `}

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 900px) {
    box-shadow: unset;
  }

  @media (max-width: 500px) {
    padding: unset;
    box-shadow: unset;
  }
`