import styled from "styled-components"
import { colors } from "./Colors"

export const TokenContainer = styled.div`
    display: grid;
    width: 40em;
    grid-template-columns: 50% 50%;
`

export const Token = styled.div`
    /* border: 1px solid ${colors.gray}; */
    /* background: ${colors.light}; */
    border-radius: 10px;
    padding: 4px;
    margin: 2px;
    white-space: nowrap;
    font-size: 1.3em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    
    & .name {
        margin: 0 5px;
        & .symbol {
            margin: 0 5px;
            color: ${colors.gray};
        }
    }

    & .price {
        margin: 0 5px;
        color: ${colors.gray};
    }

    &:hover {
        background: ${colors.light};
    }
`
