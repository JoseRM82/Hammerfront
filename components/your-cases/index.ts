import styled from "styled-components";

import { Colors } from "../../utils/styles";
import YourCases from './your-cases';

export default styled(YourCases)`
  display: flex;
  width: 100%;
  min-height: 72vh;
  border-bottom: solid 1px;
  border-top: solid 1px;

  .case_option {
    height: auto;
    background: ${Colors.lightFont};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: fit-content;

    &-navbar{

    }
     
    &-list {
      background: ${Colors.darkBackground};
      color: ${Colors.lightFont};
      font-size: 2rem;
      font-weight: 600;
      padding: 1.5rem;
      white-space: nowrap;
    }

    &-item {
      background: ${Colors.darkFont};
      color: ${Colors.lightFont};
      font-size: 1.8rem;
      padding: 1rem 1rem 1rem 3rem;
      cursor: pointer;
    }
  }

  .clicked {
      background: ${Colors.button};
      color: ${Colors.darkFont};
    }
`