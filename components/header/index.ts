import styled, { css } from 'styled-components'

import Header from './header'

export default styled(Header)`
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 1500px;
  margin: 0 auto;
  color: #efefef;

  ${props => props.header && css`
    color: #000;
  `}

  .signs {
    align-self: flex-end;
    font-size: 1.5rem;
    display: flex;
    padding: 0 2rem;
    gap: 1rem;
  }

  .sign {
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  .main-header {
    display: flex;
    justify-content: space-between;
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
        color: #efefef;

        ${props => props.header && css`
          color: #000;
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
