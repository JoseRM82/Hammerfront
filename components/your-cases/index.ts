import styled from "styled-components";

import YourCases from './your-cases';

export default styled(YourCases)`
  display: flex;
  width: 100%;
  min-height: 72vh;
  border-bottom: solid 1px;
  border-top: solid 1px;

  .case_option {
    height: auto;
    background: #585858;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: fit-content;
    border: solid 1px;

    &-navbar{

    }
     
    &-list {
      background: #000;
      color: #efefef;
      font-size: 2rem;
      font-weight: 600;
      padding: 1.5rem;
      cursor: pointer;
      white-space: nowrap;
    }

    &-item {
      background: #646464;
      color: #000;
      font-size: 1.8rem;
      padding: 1rem 1rem 1rem 3rem;
      border: solid 1px;
      cursor: pointer;
    }
  }

  .clicked {
      background: #a0a0a0;
    }
`