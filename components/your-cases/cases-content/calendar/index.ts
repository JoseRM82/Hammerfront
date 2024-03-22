import styled from "styled-components";

import Calendar from './calendar'
import { Colors, BlueColors } from "../../../../utils/styles";

export default styled(Calendar)`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  max-width: 100rem;
  font-size: 2rem;
  color: ${BlueColors.lightFont};

  .calendar {
    &-date {
      text-align: center;
      padding: 3rem 4rem;
      display: flex;
      justify-content: space-between;
      background: unset;
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
      font-size: 2.5rem;
      font-weight: 600;
      padding: 2rem 0;
      color: ${BlueColors.lightFont};

    }

    &-now {
      font-weight: 800;
      font-size: 3rem;
      color: ${BlueColors.lightFont};
    }

    &-back {
      font-weight: 500;
      color: ${BlueColors.lightFont};
      cursor: pointer;
    }

    &-prev, &-next {
      background: ${BlueColors.lightBackground};
      color: ${BlueColors.darkFont};
      font-size: 2.5rem;
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
      height: 4rem;
      width: 6rem;
    }
  }

  .sun {
    color: ${BlueColors.darkBackground};
  }

  .occupied-soon {
    background: #9d4242;
  }

  .occupied-later {
    background: #3b7032;
  }

  .today-back {
    background: ${BlueColors.button};
  }
  
  .today-font {
    color: ${BlueColors.darkFont};
    font-weight: 700;
  }
`