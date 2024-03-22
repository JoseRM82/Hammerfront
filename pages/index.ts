import styled from 'styled-components'

import Hammer from './hammer'
import { LuxuryColors } from '../utils/styles'

export default styled(Hammer)`
  background-attachment: fixed;

  .body {
    margin: auto;
    background: ${LuxuryColors.darkButton};
  }

  .header {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10;
  }
`
