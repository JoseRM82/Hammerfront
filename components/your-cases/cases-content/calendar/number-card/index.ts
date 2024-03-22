import styled from "styled-components";

import NumberCard from './number-card'
import { Colors, BlueColors } from "../../../../../utils/styles";

export default styled(NumberCard)`
    background: ${BlueColors.darkButton};
    color: ${BlueColors.lightFont};
    padding: 2.5rem 0;
    border-radius: 3px;
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;

    &.new-citation {
        padding: 0;
        background: none;
        color: blue;
        cursor: pointer;
    }
`