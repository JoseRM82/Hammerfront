import styled from "styled-components";

import Calendar from './calendar'
import { Colors, BlueColors, LuxuryColors } from "../../../../utils/styles";

export default styled(Calendar)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 75%;
  max-width: 100rem;
  font-size: 2rem;
  color: ${LuxuryColors.button};

  .calendar {
    &-date {
      text-align: center;
      padding: 1rem 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: unset;
    }

    &-month {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 12px;
      text-align: center;
    }

    &-weekday {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      font-size: 2.5rem;
      font-weight: 600;
      padding: 1rem 0;
      color: ${LuxuryColors.lightFont};

    }

    &-now {
      font-weight: 800;
      font-size: 3rem;
      color: ${LuxuryColors.button};
    }

    &-back {
      font-weight: 500;
      font-size: 2.5rem;
      color: ${LuxuryColors.lightFont};
      cursor: pointer;
    }

    &-prev, &-next {
      color: ${LuxuryColors.button};
      font-size: 3rem;
      font-weight: 800;
      cursor: pointer;
      height: 4rem;
      width: 6rem;
    }
  }

  .sun {
    color: ${LuxuryColors.button};
  }

  .occupied-soon {
    background: #9d4242;
  }

  .occupied-later {
    background: #3b7032;
  }

  .today {
    background: ${LuxuryColors.button};
    color: ${LuxuryColors.darkFont};
    font-weight: 700;
  }
  
  .today-font {
  }
`