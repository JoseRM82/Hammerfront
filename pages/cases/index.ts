import styled from "styled-components";

import Cases from './cases';

export default styled(Cases)`
  display: flex;
  min-height: 100vh;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  .body {
    max-width: 150rem;
    width: 100%;
    height: 100%;
  }
`