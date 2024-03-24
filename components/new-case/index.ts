import styled from "styled-components";

import NewCase from "./new-case";
import { LuxuryColors } from "../../utils/styles";

export default styled(NewCase)`
  box-shadow: 3px 5px 10px #00000080;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${LuxuryColors.darkButton};

  .NewCase-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 5rem;
    color: #000;
  }
  
  .NewCase-title {
    text-align: center;
    font-size: 4rem;
    font-weight: 700;
    color: ${LuxuryColors.selected};
  }

  .NewCase {
    gap: 5rem;
    display: flex;
    flex-direction: column; 
    
    &-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5.5rem 3rem;
    }
  }
  
  .btns {
    gap: 3rem;
    display: flex;
    padding: 0 1.5rem 3rem 0;
  }
`;