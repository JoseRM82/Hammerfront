import styled from 'styled-components'

import Footer from './footer'
import { LuxuryColors } from '../../utils/styles'

export default styled(Footer)`
  /* background: ${LuxuryColors.darkBackground}; */
  background: inherit;
  width: 100%;

  .footer {
    &-filter {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      align-items: center;
      padding: 4rem 2rem 5rem 2rem;
      max-width: 160rem;
      margin: auto;
    }

    &-disclaimer {
      font-size: 2.5rem;
      font-weight: 700;
      opacity: .8;  
      color: ${LuxuryColors.lightFont};
    }

    &-social {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
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
