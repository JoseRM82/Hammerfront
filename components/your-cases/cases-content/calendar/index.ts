import styled from "styled-components";

import Calendar from './calendar'

export default styled(Calendar)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  max-width: 100rem;
  font-size: 2rem;
  color: #efefef;

  .calendar {
    &-date {
      text-align: center;
      padding: 3rem 4rem;
      display: flex;
      justify-content: space-between;
      background: #343434;
    }

    &-month {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      text-align: center;
    }

    &-weekday {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      background: #343434;
      color: #efefef;
    }

    &-now {
      font-weight: 700;
    }

    &-back {
      font-weight: 300;
      cursor: pointer;
    }

    &-prev, &-next {
      cursor: pointer;
      padding: 0 3rem;
    }
  }

  .sun {
    color: #cfa44d;
  }

  .occupied-soon {
    background: #9d4242;
  }

  .occupied-later {
    background: #3b7032;
  }

  .today-back {
    background: #a0a0a0;
  }
  
  .today-font {
    color: #343434;
    font-weight: 700;
  }
`