import styled from "styled-components";

import { Colors, LuxuryColors } from "../../utils/styles";
import YourCases from './your-cases';

export default styled(YourCases)`
  display: flex;
  width: 100%;
  min-height: 72vh;
  padding-bottom: 8rem;

  .case_option-mobile-item {
    display: none;
  }

  .case_option {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
     
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

  .clicked-item {
    color: ${LuxuryColors.selected};
    border-bottom: 1px solid ${LuxuryColors.selected} ;
  }

  .clicked-list {
    color: ${LuxuryColors.selected};
  }

  .hide-list {
    display: none;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;

    .case_option {
      flex-direction: row;
      gap: 3rem;
      font-size: 3rem;
      color: #fff;
      max-width: -webkit-fill-available;
      overflow-x: scroll;
    }

    .case_option::-webkit-scrollbar {
      height: 3px;
    }

    .case_option::-webkit-scrollbar-thumb {
      background: ${LuxuryColors.selected};
      border-radius: 5px;
    }

    .case_option-list,
    .case_option-item {
      display: none;
    }

    .case_option-mobile-item {
      display: unset;
    }
  }

`