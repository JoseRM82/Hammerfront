import styled, { css } from 'styled-components'

import Card from './card'
import { LuxuryColors } from '../../../utils/styles'

export default styled(Card)`
  cursor: pointer;
  font-size: 2rem;
  background: #171e23;
  color: #ffffff;
  display: grid;
  padding: 2rem 0rem 2rem 2rem;
  grid-template-columns: 1fr 2fr;

  ${props => props.complete && css`
    grid-template-columns: 1fr 2fr 1fr;  
    grid-column: 1 / -1;
  `}

  .photo {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    justify-content: center;

    ${props => props.complete && css`
      width: 70%;
      height: 100%;
      max-width: 250px;
      max-height: 290px;
      justify-self: center;
      padding: unset;
    `}

    > span {
      border-radius: 50px;

      ${props => props.complete && css`
        border-radius: unset;
      `}
    }
  }

  .current-photo {
    align-self: center;
  }

  .complete-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3rem 1rem;
  }

  .data {
    gap: 3rem;
    display: flex;
    flex-direction: column;
  }

  .data-body {

  }

  .professional-data {
    font-size: 2rem;
  }

  .data-valor {
    font-size: 2.5rem;
    color: ${LuxuryColors.lightFont};
  }

  .professional-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0rem 2rem 3rem;
  }

  .info{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
  }
  
  .request-btn {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 0rem 0rem 0rem;
  }
`
