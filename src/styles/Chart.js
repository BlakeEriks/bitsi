import styled from "styled-components";
import { colors } from "./Colors";

export const ChartTitle = styled.div`
    text-align: left;
    font-size: 3em;
    margin: 10px 30px 0px 30px;
    color: ${colors.gray}
`

export const ChartContainer = styled.div`
    height: 20em;
    min-width: 40em;
`

export const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 10px auto 0px auto;
`

export const ChartBackground = styled.div`
    margin: 0 auto;
    height: 21.7em;
    width: 95.5%;
    background: ${colors.light};
    border-radius: 10px;
    position: relative;
    top: 0px;
    border: 1px solid ${colors.gray};
    box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 50px;
`

export const ChartCurrentValue = styled.div`
    color: ${colors.dark};
    position: relative;
    z-index: 1;
    font-size: 3em;
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
    color: ${props => props.selected ? colors.accent : colors.gray};
    padding: 0 5px;
    transition: all 0.2s;

    &:hover {
        color: ${props => props.selected ? '' : colors.accent};
    }
`

export const ToolTipContainer = styled.div`
    background: white;
    color: ${colors.dark}; 
    padding: 10px; 
    border-radius: 10px;
    border: 1px solid ${colors.gray};
`

export const ToolTipMainText = styled.div``

export const ToolTipSubText = styled.div`
    font-size: 12px;
    color: ${colors.gray};
`