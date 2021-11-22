import styled from "styled-components";
import { colors } from "./Colors";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${colors.dark}
`

export const HeaderTitle = styled.div`
    font-size: 3em;
    color: ${colors.light};
    margin: 1rem;
`

export const HeaderUsername = styled.div`
    font-size: 2em;
    color: ${colors.light};
    margin: 1rem;
`