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
`

export const SidePanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(50% / 3);
    border-top: 1px solid #eeeff3;
`

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: ${colors.light};
    width: calc(100%);
    justify-content: space-around;
    /* justify-content: ;
    align-items:  */
`

export const Card = styled.div`
    box-shadow: 0 10px 30px rgb(209 213 223 / 50%);
    border-radius: 1rem;
    padding: 50px;
`