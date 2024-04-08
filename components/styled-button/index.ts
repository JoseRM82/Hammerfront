import styled, { css } from "styled-components";

import StyledButton from "./styled-button";
import { Colors, LuxuryColors } from "../../utils/styles";

export default styled(StyledButton)`
  border: unset;
  background: ${LuxuryColors.darkBackground};
  color: ${LuxuryColors.lightFont};
  padding: 1.5rem 4.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 3px;

  ${props => props.small && css`
    padding: 1.2rem 3rem;
    font-size: 1.5rem;
  `}

  ${props => props.white && css`
    background: ${LuxuryColors.button};
    color: ${LuxuryColors.darkFont};
  `}

  ${props => props.luxury && css`
    background: unset;
    color: #ffffff5c;
    border: 3px solid #ffffff5c;
    
    :hover {
      color: #ffffff;
      border: 3px solid #ffffff;
    }
  `}
`
  