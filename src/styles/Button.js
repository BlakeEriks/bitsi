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
    padding: 0.8em;
    border-radius: 18px;
    background: #7c7c7c2b;
    color: white;
`

export const TradeButton = styled(Button)`
    border: 2px solid ${colors.light};
    outline: none;
    padding: 0.5em;
    border-radius: 10px;
    color: ${props => props.selected ? colors.dark : colors.light };
    background: ${props => props.selected ? colors.light : 'none' };
    transition: all 0.2s;
    margin: 10px 0;

    &:hover {
        background: ${props => props.selected ? colors.light : 'rgba(255,255,255,0.5)'};
    }
`