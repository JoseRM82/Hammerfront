import styled, { css } from 'styled-components'

import Header from './header'
import { Colors } from '../../utils/styles'

export default styled(Header)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1500px;
  margin: 0 auto;
  color: ${Colors.lightFont};

  ${props => props.header && css`
    color: ${Colors.darkFont};
  `}

  .signs {
    align-self: flex-end;
    font-size: 1.5rem;
    display: flex;
    padding: 1rem 5rem 0;
    gap: 1rem;
  }

  .sign {
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .main-header {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    padding: 2rem;
  }

  .logo {
    max-height: 4rem;
    max-width: 6rem;
    font-size: 2.5rem;

    :hover {
      cursor: pointer;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    width: fit-content;

    &-list {
      display: flex;
      justify-content: center;
      gap: 2rem;

      &_item {
        border: none;
        background: unset;
        font-weight: 600;
        font-size: 2rem;
        color: ${Colors.lightFont};

        ${props => props.header && css`
          color: ${Colors.darkFont};
        `}

        :hover {
          cursor: pointer;
          text-decoration: underline;
        }

        transition: text-decoration .8s;
      }
    }
  }
  `
