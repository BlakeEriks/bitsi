import styled from "styled-components";
import { colors } from "./Colors";

export const HorizontalFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || 'space-between'};
    align-items: ${props => props.alignItems || 'flex-start'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
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
    justify-content: space-around;
    align-items: center;
    width: 15em;
    background: white;
    color: ${colors.gray};
    height: 100%;
    padding: 70px 0;
    box-sizing: border-box;
`

export const DashboardContainer = styled.div`
    background: ${colors.light};
    display: flex;
    flex-direction: row;
    padding: 50px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    /* box-shadow: 0 10px 30px rgb(30 30 30 / 50%) inset; */
    flex: 1;
    height: 100%;
    box-sizing: border-box;
`

export const DashboardLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 750px;
`

export const Card = styled.div`
    box-shadow: 0 10px 30px rgb(209 213 223 / 50%);
    border-radius: 1rem;
    padding: 5px;
    height: ${props => props.height || 'auto'};
    background: white;
    margin: 10px;
    width: ${props => props.width || 'auto'};
`

export const ZeroHeightDiv = styled.div`
    height: 0;
`

export const FooterContainer = styled.div`
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
`