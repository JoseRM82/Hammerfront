import styled from "styled-components";

import NewCases from "./new-cases";
import { LuxuryColors } from "../../utils/styles";

export default styled(NewCases)`
  background: ${LuxuryColors.darkFont};

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem;
  }
`