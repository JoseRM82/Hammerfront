import styled from "styled-components";

import MainBody from './main-body';

export default styled(MainBody)`
  padding: 0 0 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .body-image-container {
    box-shadow: 0 0 5px 0 #00000065;
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
    padding: 0 0 16rem 0;
  }

  .text {
    font-size: 2rem;
    color: #fff;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
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
    width: calc(100% - 6rem);
    max-width: 120rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
  }
`