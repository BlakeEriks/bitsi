import styled from "styled-components";
import { VerticalFlexBox } from "./Boxes";
import { colors } from "./Colors";

export const BalanceText = styled.div`
  color: ${colors.dark};
  font-size: 2em;
  border-bottom: 1px solid ${colors.gray};
`;

export const MoversContainer = styled(VerticalFlexBox)`
    width: 90%;
    margin: 20px auto;
`

export const Mover = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2ch;
    cursor: pointer;
`

export const PercentChange = styled.span`
    color: ${props => props.positive ? 'rgba(20,120,20,0.8)' : 'rgba(160,20,20,0.8)'};
    font-size: 1.3ch;
`

export const TradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 90%;
`;

export const TradeSelect = styled.select`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;
  margin: 5px 0 10px 0;
`;

export const TradeInput = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1em;
  margin: 5px 0 10px 0;
  width: 8em;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;

export const SubHeader  = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 24px;
    color: ${colors.dark};
`