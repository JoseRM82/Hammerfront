import styled from 'styled-components'

import Hammer from './hammer'

export default styled(Hammer)`
  background-attachment: fixed;

  .body {
    margin: auto;
  }

  .header {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10;
  }
`
