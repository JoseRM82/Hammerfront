import styled, { css } from 'styled-components'
import logo from './logo.png'

import Header from './header'
import { Colors, LuxuryColors } from '../../utils/styles'

export default styled(Header)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1500px;
  margin: 0 auto;
  color: ${Colors.lightFont};

  ${props => props.header && css`
    color: ${LuxuryColors.darkFont};
  `}

  .logo-container {
    max-width: 8rem;
    max-height: 8rem;
  }

  .page-name {
    font-size: 3rem;
    color: #ffffff;
    font-weight: 800;
    letter-spacing: .5rem;
    cursor: pointer;
  }

  .signs {
    align-self: flex-end;
    font-size: 2.5rem;
    display: flex;
    gap: 1rem;
  }

  .sign {
    cursor: pointer;
    font-size: 2.5rem;

    :hover {
      text-decoration: underline;
    }
  }

  .main-header {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    padding: 3rem;
  }

  .logo {
    font-size: 2.5rem;

    :hover {
      cursor: pointer;
    }
  }

  .signed-user {
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    background: ${LuxuryColors.darkBackground};
    padding: 2rem;
    color: ${LuxuryColors.button};
    
    ${props => props.header && css`
    color: ${LuxuryColors.button};
    `}
    
    :hover {
      cursor: pointer;
      background: ${LuxuryColors.buttonHover};
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
      align-items: baseline;

      &_item {
        border: none;
        background: unset;
        font-weight: 600;
        font-size: 2rem;
        padding: 2rem;
        color: ${Colors.lightFont};

        ${props => props.header && css`
          color: ${LuxuryColors.selected};
        `}

        :hover {
          cursor: pointer;
          background: ${LuxuryColors.buttonHover};
        }

        transition: text-decoration .8s;
      }
    }
  }

  &.header-popover {
    /* background: ${LuxuryColors.darkFont}; */
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1rem;
    color: ${LuxuryColors.selected};

    .header-popover-field {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: .5rem 1rem;
      font-weight: 600;
      font-size: 2rem;
      cursor: pointer;

      .header-popover-image {
        display: flex;
        align-items: center;
      }
    }
  }
`
