import styled, { css } from "styled-components";

import StyledButton from "./styled-button";
import { Colors } from "../../utils/styles";

export default styled(StyledButton)`
  border: unset;
  background: ${Colors.darkBackground};
  color: ${Colors.lightFont};
  padding: 1.5rem 4.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  ${props => props.white && css`
    background: ${Colors.button};
    color: ${Colors.darkFont};
  `}
`
  