import styled, { css } from 'styled-components'

import Card from './card'

export default styled(Card)`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 6rem;
  padding: 2rem 2rem 1rem 4rem;
  background: #fff;
  justify-content: space-between;

  ${props => props.complete && css`
    grid-column: 1 / -1;
    padding: 3rem 5rem;
  `}

  .photo {
    padding: 1rem 0 0;
    object-fit: cover;
    width: 50px;
    height: 50px;
    display: flex;
    top: 0;
    ${props => props.complete && css`
      width: unset;
      height: unset;
      max-width: 250px;
      max-height: 290px;
    `}

    > span {
      border-radius: 50px;

      ${props => props.complete && css`
        border-radius: unset;
      `}
    }
  }

  .info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &_name {
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
    }

    &_specialty {
      font-size: 1.5rem;
      text-align: left;
    }

    &_university {
      font-size: 1.5rem;
      opacity: .7;
      text-align: left;
    }
  }

  .data {
    width: 70%;

    &_box {
      padding: 0 0 1.5rem 0;
      display: flex;
      justify-content: space-between;

      &-name {
        font-size: 3rem;
        font-weight: 700;
      }

      &-btn {
        padding: 0 2rem;
      }
    }

    &-valor {
      font-weight: 600;
    }

    
    &_age, &_specialty, &_university, &_experience {
      padding: .5rem 0;
      font-size: 2.5rem;
    }

    &_description{
      font-size: 2rem;
      padding: 2rem 0;
      opacity: .7;
    }
  }
`
