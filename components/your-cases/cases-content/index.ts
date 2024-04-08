import styled from "styled-components";

import CasesContent from "./cases-content";
import { Colors, LuxuryColors } from "../../../utils/styles";

export default styled(CasesContent)`
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${LuxuryColors.lightFont};

    .cases-title {
        font-size: 3rem;
        align-self: flex-start;
        font-weight: 600;
        display: flex;
    }

    .cases-content {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 850px) {
        padding: 3rem 0;
        
        .cases-title {
            padding: 0 0 0 2rem;
        }
    }

    @media (max-width: 500px) {
        padding: 0;

        .cases-title {
            font-size: 2rem;
            align-self: center;
        }
    }
`