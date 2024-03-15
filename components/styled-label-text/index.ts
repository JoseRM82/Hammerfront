import styled from "styled-components";

import StyledLabelText from "./styled-label-text";

export default styled(StyledLabelText)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .styled{
    &-span {
      font-size: ${props => props.spanSize || '2rem'};
      font-weight: 600;
    }

    &-input {
      font-size: ${props => props.inputSize || '1.8rem'};
      border: unset;
      background: unset;
      border-radius: 5px;
      padding: .7rem;
      outline: #d7d7d7 solid 1.5px;

      :focus {
        box-shadow: 0px 3px 6px #00000080;
      }

      transition: box-shadow .5s;
    }

    &-textarea {
      font-size: ${props => props.inputSize || '1.8rem'};
      border: unset;
      background: unset;
      border-radius: 5px;
      padding: .7rem;
      outline: #d7d7d7 solid 1.5px;

      :focus {
        box-shadow: 0px 3px 6px #00000080;
      }

      transition: box-shadow .5s;
    }
  }
`