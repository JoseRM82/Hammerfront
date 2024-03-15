import styled from "styled-components";

import Requests from './requests'

export default styled(Requests)`
  width: 100%;
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .requests {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    width: 100%;

    &-categories {
      font-size: 1.5rem;
      text-align: center;
      cursor: pointer;
      background: #a0a0a0;
      padding: .5rem 2rem;
      font-weight: 600;
    }

    &-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`