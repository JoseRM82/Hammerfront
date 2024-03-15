import styled from 'styled-components'

import ProfessionalsList from './professionals-list'

export default styled(ProfessionalsList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  gap: 2rem;
  width: 70%;
  max-width: 150rem;

  .professionals-title {
    font-size: 4rem;
    font-weight: 700;
    padding: 2rem 0 4rem 0;
    align-self: flex-start;
  }

  .selected-lawyer {
    padding: 5rem 2rem 2rem 3rem;
    display: flex;
    background: #fff;
    aspect-ratio: 5/1.8;
    gap: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    width: 70%;

    :hover {
      box-shadow: 2px 3px 10px #00000080;
    }

    transition: box-shadow .4s;
  }

  .photo-container {
    max-width: 25rem;
    max-height: 37rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .lawyers-list {
    display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 3rem;
		row-gap: 6rem;
    padding: 3rem 0;

    &-card {
      :hover {
        box-shadow: 0px 3px 6px #00000080;
      }

      transition: box-shadow .4s;
    }
  }
`
