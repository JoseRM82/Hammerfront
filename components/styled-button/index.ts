import styled, { css } from "styled-components";

import StyledButton from "./styled-button";

export default styled(StyledButton)`
  border: unset;
  background: #000;
  color: #fff;
  padding: 1.5rem 4.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  ${props => props.white && css`
    background: #efefef;
    color: #000;
  `}
`
  