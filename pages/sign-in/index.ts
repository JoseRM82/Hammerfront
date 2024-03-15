import styled from "styled-components";

import SignIn from "./sign-in";
import { Colors } from "../../utils/styles";

export default styled(SignIn)`
  background: ${Colors.lightBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  height: 100vh;
`