import styled from "styled-components";

import NumberCard from './number-card'
import { Colors, BlueColors, LuxuryColors } from "../../../../../utils/styles";

export default styled(NumberCard)`
    background: ${LuxuryColors.darkCard};
    color: ${LuxuryColors.lightFont};
    display: flex;
    justify-content: center;
    gap: .5rem;
    padding: 2.5rem 0;
    border-radius: 3px;
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;

    &.notes-citations {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: unset;
        cursor: initial;
    }
    
    .new-citation {
        font-size: 1.5rem;
        padding: 0;
        background: none;
        color: blue;
        cursor: pointer;
        width: fit-content;
    }

    .citations {
        color: ${LuxuryColors.button};
    }

    .notes-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: -webkit-fill-available;
        padding: 0rem 2rem 1rem;
        border-bottom: 1px solid ${LuxuryColors.selected}47;
    }

    .note {
        color: ${LuxuryColors.selected};
        font-size: 2rem;
    }

    .delete {
        color: ${LuxuryColors.selected};
        font-size: 2rem;
        cursor: pointer;
    }

    .note-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        padding: 1rem 0rem 0rem 0rem;
    }

    .note-send {
        cursor: pointer;
        font-size: 2rem;
    }
`