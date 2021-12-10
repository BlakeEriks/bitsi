import styled from 'styled-components';
import { colors } from './Colors';

export const AssetsContainer = styled.div`
    display: flex;
    flex-wrap : wrap;
    justify-content: space-evenly;
    max-width: 39em;
`

export const AssetContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.2em 0.5em;
    justify-content: space-between;
    color: ${colors.gray};
    background: ${colors.light};
    border: 1px solid ${colors.gray};
    border-radius: 10px;
    margin: 4px 0;
    font-size: 1vw;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        border: 1px solid ${colors.accent};
        box-shadow: 0px 0px 3px ${colors.accent};
    }

    & .quantity {
        border-right: 2px solid ${colors.gray};
        padding: 0 5px;
        color: ${colors.dark};
    }

    & .value {
        margin: 0 5px;
    }
`