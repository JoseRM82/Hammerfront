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

  .work-img {
    background-image: url('https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwyMXx8cmVzdW1lfGVufDB8fHx8MTY5NTcyMzEwNHww&ixlib=rb-4.0.3&fm=jpg&w=3456&h=5184&fit=max');
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .work-mobile-title {
    display: none;
  }

  .work-mobile-text {
    display: none;
    width: 100%;
  }

  .work-mobile-img {
    display: none;
  }

  .img-container {
    width: 50%;
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
    width: 50%;
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

  
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    .img-container {
      width: 100%;
      gap: 3rem;
    }

    .work-img {
      display: unset;
      width: 50%;
    }
    
    .work-mobile-img {
      display: none;
    }

    .text-container {
      display: none;
    }

    .work-wu-container {
      gap: unset;
      width: 100%;
      padding: 0rem 5rem;
    }

    .work-title {
      display: none;
    }

    .work-text {
      display: none;
    }

    .work-mobile-title {
      display: unset;
      margin: 0;
      color: ${LuxuryColors.lightFont};
      text-align: left;
      font-size: 3rem;
      padding: 0rem 5rem;
    }

    .work-mobile-text {
      display: unset;
      text-align: left;
      opacity: .9;
      padding: 0 0 4rem 0;
      font-size: 2rem;
      width: 50%;
      color: ${LuxuryColors.lightBackground};
    }
  }

  @media (max-width: 700px) {
    padding: 5rem 2rem;

    .work-mobile-img {
      display: unset;
      background-image: url('https://wallpapers.com/images/hd/office-worker-best-laptop-corporate-job-9bjgv24faioiqnvy.jpg');
      background-size: cover;
      height: -webkit-fill-available;
      width: 100%;
    }

    .work-img {
      display: none;
      width: 100%;
    }

    .img-container{
      display: flex;
      flex-direction: column;
      align-items: center;
    
      span {
        span {
          .work-img {
            display: none;
          }
        }
      }
    }

    .work-mobile-title {
      padding: 0rem;
    }

    .work-mobile-text {
      width: 100%;
    }

    .work-wu-container {
      padding: 0rem;
      width: 100%;
    }
  }
`