import styled, {css} from "styled-components";

import StyledLabelText from "./styled-label-text";
import { LuxuryColors } from "../../utils/styles";

export default styled(StyledLabelText)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 3px solid ${LuxuryColors.alternativeFont}5c;
  border-radius: 4px;
  padding: 1.3rem;

  ${props => props.image && css`
    flex-direction: row;
  `}

  .label-image {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  :focus-within {
    border: 3px solid #fff;

    .styled-input {
        color: #fff;
    }
  }

  transition: border .3s;

  .styled{
    &-span {
      font-size: ${props => props.spanSize || '2rem'};
      font-weight: 600;
    }

    &-input {
      font-size: ${props => props.inputSize || '1.8rem'};
      border: unset;
      background: transparent;
      color: ${LuxuryColors.alternativeFont};
      fill: none;
      border-radius: 5px;
      
      :focus {
        fill: none;
        outline: unset;
        background: transparent;
      }
      
      :active {
        fill: none;
        outline: unset;
        background: transparent;
      }
      
      :focus-visible {
        fill: none;
        outline: unset;
        background: transparent;
      }

      transition: box-shadow .5s;
    }

    &-textarea {
      font-size: ${props => props.inputSize || '1.8rem'};
      border: unset;
      background: unset;
      border-radius: 5px;
      padding: .7rem;

      :focus {
        box-shadow: 0px 3px 6px #00000080;
      }

      transition: box-shadow .5s;
    }
  }
`