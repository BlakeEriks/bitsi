import styled from 'styled-components'
import { colors } from './Colors'

export const Entry = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 20px;
    padding: 10px 0;
    cursor: pointer;

    & * {
        color: ${props => props.highlight && colors.accent + ' !important'};
    }

    &:hover {
        background: ${colors.light};
    }
`