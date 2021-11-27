import styled from "styled-components";
import { colors } from "./Colors";

export const BalanceText = styled.div`
  color: ${colors.light};
  font-size: 2em;
  border-bottom: 1px solid ${colors.gray};
`;

export const TradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.gray};
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
  width: 90%;
`;
