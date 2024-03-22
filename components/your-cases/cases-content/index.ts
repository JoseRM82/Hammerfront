import styled from "styled-components";

import CasesContent from "./cases-content";
import { Colors } from "../../../utils/styles";

export default styled(CasesContent)`
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    color: ${Colors.darkFont};

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
`