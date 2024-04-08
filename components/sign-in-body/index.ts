import styled from "styled-components";

import SignInBody from "./signin-body";
import { LuxuryColors } from "../../utils/styles";

export default styled(SignInBody)`
  height: 100vh;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`