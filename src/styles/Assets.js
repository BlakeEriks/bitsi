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
    max-width: 33%;
    font-size: 1.2em;

    & .quantity {
        width: 100%;
        border-right: 2px solid ${colors.gray};
        padding: 0 5px;
    }

    & .value {
        margin: 0 5px;
    }
`