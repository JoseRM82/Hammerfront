import styled from "styled-components";

import MainBody from './main-body';
import { LuxuryColors } from "../../utils/styles";

export default styled(MainBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .body-image-container {
    box-shadow: 0 0 20px 0 #00000065;
    width: 100%;
    height: 100vh;
    background-attachment: fixed; 
    background-image: url('https://wallpapercave.com/wp/wp4332988.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .body-cristal {
    background-color: #00000080;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 4rem 0;
  }

  .text {
    font-size: 2rem;
    color: #fff;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    width: 60%;
    max-width: 1050px;

    h1 {
      margin: 0;
      text-align: center;
    }

    span {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  .main-body {
    /* background: ${LuxuryColors.darkBackground}; */
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`