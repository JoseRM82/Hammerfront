import styled from 'styled-components'

import Footer from './footer'

export default styled(Footer)`
  background: unset;
  border-top: solid 1.9px #d7d7d7;
  width: 100%;

  .footer {
    &-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      max-width: 160rem;
      margin: auto;
    }

    &-disclaimer {
      font-size: 2rem;
      font-weight: 600;
      opacity: .8;
    }

    &-social {
      display: flex;
      justify-content: space-evenly;
      gap: 4rem;
      font-size: 2rem;
      padding: 0 3rem 0 0;
      
      .social-link {
        opacity: .3;
    
        :hover {
          cursor: pointer;
          opacity: 1;
        }

        transition: opacity .5s;
      }
    }
  }

`
