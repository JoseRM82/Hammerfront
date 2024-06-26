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
    display: flex;
    align-items: center;
    justify-content: center;

    &-hammer {
      font-size: 4.5rem;
      font-weight: 800;
      letter-spacing: 1rem;
      color: #ffffff4a;
    }
  }

  .signin-background {
    background: ${LuxuryColors.darkButton};
  }
  
  @media (max-width: 1200px) {
    justify-content: center;

    .signin-background {
      width: 80%;
    }

    .signin-glass {
      display: none;
    }
  }
  
  @media (max-width: 1000px) {
    .signin-background {
      width: 100%;
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
   
    .signin-glass {
      display: none;
    }
  }

  @media (max-width: 500px) {
    background-image: unset;

    .signin-background {
      width: -webkit-fill-available;
    }
  }
  `