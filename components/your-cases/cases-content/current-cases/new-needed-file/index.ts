import styled from "styled-components";

import NewNeededFile from "./new-needed-file";
import { LuxuryColors } from "../../../../../utils/styles";

export default styled(NewNeededFile)`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  gap: 5rem;
  padding: 0.2rem 1rem;

  &.needed-file {
    color: black;
    font-weight: 600;
    font-size: 2rem;
    cursor: default;
  }

  .file-delete-button {
    background: unset;
    color: ${LuxuryColors.button};
    align-self: center;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
  }

  .file-input {
    display: none;
  }

  .file-label {
    cursor: pointer;
  }

  .send-file {
    color: ${LuxuryColors.button};
    font-size: 2rem;
  }
`