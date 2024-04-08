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
        justify-content: space-between;
        width: -webkit-fill-available;
        padding: 0rem 2rem;
    }

    .note {
        color: ${LuxuryColors.selected};
        font-size: 1.5rem;
    }

    .delete {
        color: ${LuxuryColors.selected};
        font-size: 1.5rem;
        cursor: pointer;
    }

    .note-form {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }

    .note-send {
        cursor: pointer;
    }
`