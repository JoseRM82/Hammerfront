import styled from "styled-components";

import { Colors, LuxuryColors } from "../../utils/styles";
import YourCases from './your-cases';

export default styled(YourCases)`
  display: flex;
  width: 100%;
  min-height: 72vh;
  padding-bottom: 8rem;

  .case_option {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;

    &-navbar{

    }
     
    &-list {
      color: ${LuxuryColors.unselected};
      font-size: 2.5rem;
      padding: 1.5rem 0;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        color: ${LuxuryColors.selected};
      }

      transition: color .5s;
    }
    
    &-item {
      color: ${LuxuryColors.unselected};
      padding: 1.5rem 0 .8rem 0;
      font-size: 1.8rem;
      cursor: pointer;
      width: fit-content;
      display: flex;
    }
  }

  /* .case-option {
    display: unset;

    transition: .2s ease all;
  } */

  .clicked-item {
    color: ${LuxuryColors.selected};
    border-bottom: 1px solid ${LuxuryColors.selected} ;
  }

  .clicked-list {
    color: ${LuxuryColors.selected};
  }

  /* .hide {
    transform: translateY(-100%); 
  } */

  .hide-list {
    display: none;
  }
`