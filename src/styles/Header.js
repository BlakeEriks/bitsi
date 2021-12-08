import styled from "styled-components";
import { colors } from "./Colors";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: white;
    border-bottom: 2px solid ${colors.light};
`

export const HeaderTitle = styled.div`
    font-size: 3em;
    color: ${colors.accent};
    margin: 1rem;
    cursor: pointer;
`

export const HeaderContent = styled.div`
    font-size: 2em;
    color: ${colors.light};
    margin: 1rem;
    display: flex;
`

export const HeaderLink = styled.div`
    font-size: large;
    color: ${colors.gray};
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        color: ${colors.accent}
    }
`

export const HeaderLinkDivider = styled.div`
    border: 1px solid ${colors.gray};
    
`