import styled from "styled-components";
import { colors } from "./Colors";

export const ChartTitle = styled.div`
    text-align: left;
    font-size: 60px;
    margin: 10px 30px 0px 30px;
    color: ${colors.light}
`

export const ChartContainer = styled.div`
    height: 20em;
`

export const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 10px auto 0px auto;
`

export const ChartCurrentValue = styled.div`
    color: white;
    position: relative;
    z-index: 1;
    font-size: 2.5em;
`

export const ChartPeriodSelector = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    z-index: 1;
`

export const ChartPeriodButton = styled.div`
    cursor: pointer;
    font-size: 1em;
    color: ${props => props.selected ? colors.highlight : colors.gray};
    padding: 0 5px;
    transition: all 0.2s;

    &:hover {
        color: ${props => props.selected ? '' : colors.light}
    }
`