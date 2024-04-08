import styled, { css } from "styled-components";

import MessagesList from "./messages-list";
import { LuxuryColors } from "../../../utils/styles";

export default styled(MessagesList)`
  padding: 1rem;
  font-size: 1.5rem;
  max-width: 70%;
  border-radius: 5px;
  border: .5px solid ${LuxuryColors.selected};
`