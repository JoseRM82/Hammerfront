import styled from "styled-components";

import WorkWithUs from './work-with-us';

export default styled(WorkWithUs)`
  border: solid 1.9px #d7d7d7;
  display: flex;
  justify-content: center;
  height: 50rem;
  padding: 10rem;

  .img-container {
    width: 250%;
    height: auto;
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
  }

  .work-text {
    text-align: justify;
    opacity: .9;
    padding: 0 0 4rem 0;
  }
`