import styled from "styled-components";
import { colors } from "./Colors";

export const HorizontalFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || 'space-between'};
    /* align-items: ${props => props.alignItems || 'center'}; */
    width: ${props => props.width || 'auto'};
`

export const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems || 'flex-start'};
    width: ${props => props.width || 'auto'};
    padding: ${props => props.padding || '0'};
`

export const SidePanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: calc(50% / 3);
    background: ${colors.dark};
    margin-top: 50px;
    color: ${colors.gray};
`

export const DashboardContainer = styled.div`
    background: ${colors.gray};
    display: flex;
    flex-direction: row;
    padding: 50px;
    border-top-left-radius: 50px;
    box-shadow: 0 10px 30px rgb(30 30 30 / 50%) inset;
`

export const Card = styled.div`
    box-shadow: 0 10px 30px rgb(209 213 223 / 50%);
    border-radius: 1rem;
    padding: 5px;
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || '15em'};
    background: ${colors.dark};
    margin: 10px;
`

export const ZeroHeightDiv = styled.div`
    height: 0;
`