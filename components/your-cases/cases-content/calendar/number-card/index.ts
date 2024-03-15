import styled from "styled-components";

import NumberCard from './number-card'

export default styled(NumberCard)`
    background: #343434;
    color: #efefef;
    padding: 3rem 0;
    cursor: pointer;

    &.new-citation {
        padding: 0;
        background: none;
        color: blue;
        cursor: pointer;
    }
`