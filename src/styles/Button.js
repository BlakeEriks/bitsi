import styled from "styled-components"
import { colors } from "./Colors"

const Button = styled.button`
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: none;
`

export const IconButton = styled(Button)`
    background: white;
    border-radius: 25px;
    padding: 10px;
    
    &, & * {
        transition: 0.2s all;
    }

    & * {
        color: ${props => props.selected ? colors.accent : colors.gray};
    }

    &:hover {
        background: ${colors.light};

        & * {
            color: ${colors.accent};
        }
    }
`

export const LoginButton = styled(Button)`
    border: none;
    outline: none;
    padding: 0.7em 0.8em;
    border-radius: 10px;
    border: 1px solid ${colors.dark};
    background: ${colors.light};
    color: ${colors.dark};
`

export const TradeButton = styled(Button)`
    outline: none;
    padding: 0.5em;
    border-radius: 10px;
    color: ${props => props.selected ? colors.accent : colors.gray };
    background: ${colors.light};
    transition: all 0.2s;
    margin: 10px 0;
    font-size: 1em;

    &:hover {
        color: ${colors.accent};
    }
`