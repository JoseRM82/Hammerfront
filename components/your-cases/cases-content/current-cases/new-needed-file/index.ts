import styled from "styled-components";

import NewNeededFile from "./new-needed-file";
import { Colors } from "../../../../../utils/styles";

export default styled(NewNeededFile)`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  gap: 5rem;
  padding: 0.2rem 1rem;

  &.needed-file {
    color: black;
    font-weight: 600;
    font-size: 1.7rem;
    cursor: default;
  }

  .file-delete-button {
    
  }

  .file-input {
    display: none;
  }

  .file-label {
    cursor: pointer;
  }

  .send-file {
    color: ${Colors.darkFont};
    font-size: 2rem;
  }
`