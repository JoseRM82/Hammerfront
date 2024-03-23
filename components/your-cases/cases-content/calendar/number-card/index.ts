import styled from "styled-components";

import NumberCard from './number-card'
import { Colors, BlueColors, LuxuryColors } from "../../../../../utils/styles";

export default styled(NumberCard)`
    background: ${LuxuryColors.darkCard};
    color: ${LuxuryColors.lightFont};
    padding: 2.5rem 0;
    border-radius: 3px;
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;

    &.new-citation {
        font-size: 1.5rem;
        padding: 0;
        background: none;
        color: blue;
        cursor: pointer;
    }
`