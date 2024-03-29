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
    justify-content: center;
    padding: 0 0 4rem 0;
  }

  .text {
    font-size: 2rem;
    color: #fff;
    padding: 15rem 3rem 0rem 3rem;
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
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 420px) {
    .text {
      span {
        display: none;
      }
    }
  }

  @media (max-width: 800px) {
      .body-image-container {
        background-image: url('https://w0.peakpx.com/wallpaper/276/342/HD-wallpaper-lawyer-law-occupation-business-paragraphic.jpg');
      }

      .text {
        font-size: 1.6rem;
      }

      
  }

  @media (max-width: 1350px) {
    .body-image-container {
      background-repeat: round;
    }
  }

  @media (min-width: 1850px) {
    @media (min-height: 950px) {
      
      .text {
        max-width: unset;
        width: 80%;
        span {
          font-size: 4.5rem;
        }
      }
    }
  }
`