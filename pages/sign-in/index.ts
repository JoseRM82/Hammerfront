import styled from "styled-components";

import SignIn from "./sign-in";
import { Colors, LuxuryColors } from "../../utils/styles";

export default styled(SignIn)`
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url('https://images.squarespace-cdn.com/content/v1/6335a569d520dc7883fdfcfc/a05d19ee-c84f-410d-9f33-36f207c71660/Civil+Theft.jpg');
  background-size: cover;

  .signin-glass {
    width: 100%;
    background: ${LuxuryColors.darkButton}d1;
    height: 100vh;
  }

  .signin-background {
    background: ${LuxuryColors.darkButton};
  }
`